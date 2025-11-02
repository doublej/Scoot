# KDirStat C++ Application Architecture Analysis

## Executive Summary

KDirStat is a Qt/KDE application for disk usage visualization that follows a clean Model-View-Controller architecture with specialized components for directory tree scanning, data management, and dual visualization modes (tree view and treemap view).

## Core Architectural Components

### 1. Data Model Layer

#### KFileInfo (kfileinfo.h/cpp)
**Role**: Base class representing file system entities
- **Purpose**: Lightweight representation of files/directories with size, permissions, timestamps
- **Key Features**:
  - Designed for memory efficiency (handles 150,000+ objects)
  - Contains basic file metadata (size, mode, links, mtime, device)
  - Supports sparse file detection
  - Provides virtual methods for tree navigation
  - File type detection (file, dir, symlink, device, etc.)

#### KDirInfo (kdirinfo.h/cpp)
**Role**: Specialized KFileInfo for directories with child management
- **Purpose**: Directory nodes that can contain children and maintain statistics
- **Key Features**:
  - Manages child collections (files and subdirectories)
  - Caches aggregated statistics (total size, file counts, latest mtime)
  - Supports "dot entries" (pseudo-directories for non-directory children)
  - Tracks directory read state (queued, reading, finished, error)
  - Provides recursive cleanup and finalization

#### KDirTree (kdirtree.h/cpp)
**Role**: Root container and coordinator for the directory tree
- **Purpose**: Manages the entire directory tree structure and reading process
- **Key Features**:
  - Maintains root node and current selection
  - Coordinates reading jobs through job queue
  - Handles cross-filesystem policies
  - Emits Qt signals for tree changes
  - Supports cache read/write operations
  - Manages reading method selection (local vs KIO)

### 2. Directory Reading System

#### KDirReadJob (kdirreadjob.h/cpp)
**Role**: Abstract base class for directory reading operations
- **Purpose**: Provides framework for asynchronous directory scanning
- **Key Features**:
  - Time-sliced reading to maintain UI responsiveness
  - Pluggable reading strategies
  - Job queue integration
  - Progress notification system

#### KLocalDirReadJob
**Role**: Local filesystem reader using lstat() system calls
- **Purpose**: High-performance local directory scanning with device boundary support
- **Key Features**:
  - Direct filesystem access via opendir()/lstat()
  - Device number tracking for single-filesystem scans
  - Superior performance for local directories

#### KioDirReadJob
**Role**: Network-transparent reader using KDE's KIO subsystem
- **Purpose**: Support for remote filesystems (FTP, HTTP, SMB, etc.)
- **Key Features**:
  - Protocol-independent access
  - Network transparency
  - Cannot enforce filesystem boundaries

#### KDirReadJobQueue
**Role**: Job scheduler and coordinator
- **Purpose**: Manages reading job execution and timing
- **Key Features**:
  - Time-sliced execution
  - Queue management (FIFO)
  - Automatic job cleanup
  - Signals for reading start/finish

### 3. Data Access Layer

#### KDirTreeIterators (kdirtreeiterators.h/cpp)
**Role**: Sophisticated iteration patterns over tree structures
- **Purpose**: Provides multiple tree traversal strategies
- **Key Classes**:
  - `KFileInfoIterator`: Basic unsorted iteration
  - `KFileInfoSortedIterator`: Sorted iteration (by name, size, time)
  - `KFileInfoSortedBySizeIterator`: Size-filtered iteration for performance
- **Dot Entry Policies**:
  - `KDotEntryTransparent`: Flattens dot entries (default)
  - `KDotEntryAsSubDir`: Treats dot entries as subdirectories
  - `KDotEntryIgnore`: Completely ignores dot entries

### 4. Visualization Layer

#### KDirTreeView (kdirtreeview.h/cpp)
**Role**: Traditional hierarchical tree view using Qt's QListView
- **Purpose**: Detailed tabular view with multiple columns of information
- **Key Features**:
  - Multiple data columns (size, percentage, items, mtime, etc.)
  - Percentage bars for visual size comparison
  - Lazy tree expansion for performance
  - PacMan animation during scanning
  - Context menus and selection management
  - Color-coded directory levels
  - Configurable display options

#### KTreemapView (ktreemapview.h/cpp)
**Role**: Treemap visualization using Qt's QCanvas
- **Purpose**: Space-efficient visualization showing relative sizes as nested rectangles
- **Key Features**:
  - Cushioned treemap rendering with 3D lighting effects
  - Squarified treemap algorithm for better aspect ratios
  - Interactive zoom in/out capabilities
  - Color coding by file type/properties
  - Selection synchronization with tree view
  - Configurable visual parameters (lighting, colors, grid)

#### KTreemapTile (ktreemaptile.h/cpp)
**Role**: Individual rectangular tile in the treemap
- **Purpose**: Represents one file/directory as a visual rectangle
- **Key Features**:
  - Recursive subdivision algorithms
  - Cushion surface calculations for 3D effects
  - Mouse interaction handling
  - Size-proportional display
  - Hierarchical parent-child relationships

### 5. Application Controller Layer

#### KDirStatApp (kdirstatapp.h/cpp)
**Role**: Main application window and coordinator
- **Purpose**: Orchestrates all components and manages user interactions
- **Key Features**:
  - Menu and toolbar management
  - Window layout with splitter (tree view + treemap)
  - Action coordination between views
  - Cleanup operations integration
  - Configuration management
  - Recent files handling
  - Status bar updates and progress reporting

## Communication Patterns and Data Flow

### 1. Startup and Directory Reading Flow

```
User selects directory → KDirStatApp → KDirTree::startReading()
                                    ↓
KDirTree creates KDirReadJob → JobQueue → Time-sliced execution
                                         ↓
KDirReadJob reads entries → Creates KFileInfo/KDirInfo objects
                                         ↓
Tree structure built → Signals emitted → Views updated
```

### 2. Signal-Slot Communication Architecture

#### KDirTree Signals:
- `childAdded(KFileInfo*)` - New node created
- `deletingChild(KFileInfo*)` - Node about to be deleted
- `childDeleted()` - Node deletion completed
- `selectionChanged(KFileInfo*)` - Selection changed
- `finished()` - Reading completed
- `progressInfo(QString)` - Status updates

#### View Synchronization:
- Both views connect to KDirTree selection signals
- Selection changes propagate between tree view and treemap
- Progress information flows to status bar
- Reading state changes update UI elements

### 3. Reading Job Lifecycle

```
1. Job Creation: KDirTree creates appropriate read job type
2. Job Queuing: Job added to KDirReadJobQueue
3. Time-Sliced Execution: QTimer triggers periodic job processing
4. Directory Scanning: Job reads entries and creates KFileInfo objects
5. Tree Integration: New nodes added to tree with proper parent-child links
6. Notification: Signals emitted for view updates
7. Job Completion: Job removes itself from queue and cleans up
```

### 4. Treemap Generation Process

```
KTreemapView::rebuildTreemap() → Root tile creation
                               ↓
KTreemapTile constructor → Recursive subdivision
                        ↓
Algorithm selection (Simple vs Squarified)
                        ↓
Child tile creation → Size-proportional rectangles
                   ↓
Cushion surface calculation → 3D visual effects
                           ↓
QCanvas rendering → Interactive display
```

## Key Design Patterns

### 1. Model-View-Controller (MVC)
- **Model**: KDirTree, KFileInfo, KDirInfo (data representation)
- **View**: KDirTreeView, KTreemapView (visual representation)
- **Controller**: KDirStatApp (user interaction coordination)

### 2. Strategy Pattern
- **KDirReadJob**: Abstract reading strategy
- **Concrete Strategies**: KLocalDirReadJob, KioDirReadJob, KCacheReadJob
- **Context**: KDirTree selects appropriate strategy

### 3. Iterator Pattern
- **Abstract Iterator**: KFileInfoIterator
- **Concrete Iterators**: KFileInfoSortedIterator, KFileInfoSortedBySizeIterator
- **Different Policies**: Dot entry handling, sorting criteria

### 4. Observer Pattern
- **Subject**: KDirTree (emits signals)
- **Observers**: KDirTreeView, KTreemapView, KDirStatApp (receive signals)
- **Notifications**: Tree changes, selection changes, progress updates

### 5. Composite Pattern
- **Component**: KFileInfo (base interface)
- **Leaf**: File entries (KFileInfo instances)
- **Composite**: Directory entries (KDirInfo instances with children)

## Memory Management and Performance

### 1. Memory Optimization
- **Minimal KFileInfo footprint**: Critical for handling 150,000+ files
- **Lazy tree expansion**: Only visible branches fully populated
- **Cached statistics**: Expensive calculations stored in KDirInfo
- **Smart pointer usage**: Automatic cleanup when nodes deleted

### 2. Performance Optimization
- **Time-sliced reading**: Maintains UI responsiveness during scans
- **Size-filtered iteration**: Skips tiny files in treemap generation
- **Squarified treemap algorithm**: Better visual representation than simple subdivision
- **Direct filesystem access**: KLocalDirReadJob bypasses KIO overhead

### 3. Scalability Features
- **Job queue management**: Prevents resource exhaustion
- **Cross-filesystem boundary enforcement**: Prevents runaway scans
- **Configurable minimum tile sizes**: Reduces treemap complexity
- **Progressive disclosure**: Only expand tree branches as needed

## Integration Points

### 1. Qt/KDE Framework Integration
- **QObject signal-slot system**: Inter-component communication
- **QCanvas**: Hardware-accelerated treemap rendering
- **QListView**: Native tree view widget
- **KConfig**: Persistent configuration management
- **KIO**: Network-transparent file access

### 2. System Integration
- **POSIX filesystem APIs**: Direct lstat() calls for performance
- **Device boundary detection**: Prevents crossing filesystem boundaries
- **MIME type integration**: File type detection for coloring
- **Desktop environment**: Standard menus, toolbars, dialogs

### 3. Cache System Integration
- **KDirTreeCache**: Serialization of complete tree structures
- **File format**: Custom binary format for fast loading
- **Cache validation**: Timestamp-based freshness checking

## Conclusion

The KDirStat architecture demonstrates excellent separation of concerns with clear layer boundaries. The combination of a robust data model, asynchronous reading system, and dual visualization modes provides both detailed analysis capabilities and intuitive visual representation. The heavy use of Qt's signal-slot mechanism ensures loose coupling between components while maintaining rich inter-component communication.

The architecture successfully balances performance requirements (handling large directory trees) with usability features (responsive UI, multiple view modes) through careful design choices like time-sliced operations, lazy evaluation, and efficient memory management.