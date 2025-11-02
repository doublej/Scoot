let currentData = null;

const scanBtn = document.getElementById('scanBtn');
const pathInput = document.getElementById('pathInput');
const statsDiv = document.getElementById('stats');
const totalSizeSpan = document.getElementById('totalSize');

scanBtn.addEventListener('click', async () => {
    const path = pathInput.value;
    scanBtn.disabled = true;
    scanBtn.textContent = 'Scanning...';

    try {
        const response = await fetch('/api/scan', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ path })
        });

        if (!response.ok) {
            const error = await response.json();
            alert(error.detail || 'Scan failed');
            return;
        }

        currentData = await response.json();
        displayResults(currentData);
    } catch (error) {
        alert('Error: ' + error.message);
    } finally {
        scanBtn.disabled = false;
        scanBtn.textContent = 'Scan';
    }
});

function displayResults(data) {
    statsDiv.classList.remove('hidden');
    totalSizeSpan.textContent = `Total: ${formatSize(data.total_size)}`;

    renderTreemap(data.root);
    renderTreeView(data.root);
}

function formatSize(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return `${size.toFixed(2)} ${units[unitIndex]}`;
}

function renderTreemap(root) {
    const container = document.getElementById('treemap');
    container.innerHTML = '';

    const width = container.clientWidth;
    const height = container.clientHeight;

    const svg = d3.select('#treemap')
        .append('svg')
        .attr('width', width)
        .attr('height', height);

    const hierarchy = d3.hierarchy(root)
        .sum(d => d.is_directory ? 0 : d.size)
        .sort((a, b) => b.value - a.value);

    const treemap = d3.treemap()
        .size([width, height])
        .padding(1)
        .round(true);

    treemap(hierarchy);

    const colorScale = d3.scaleSequential(d3.interpolateCool)
        .domain([0, hierarchy.height]);

    const cells = svg.selectAll('g')
        .data(hierarchy.leaves())
        .join('g')
        .attr('transform', d => `translate(${d.x0},${d.y0})`);

    cells.append('rect')
        .attr('class', 'tile')
        .attr('width', d => d.x1 - d.x0)
        .attr('height', d => d.y1 - d.y0)
        .attr('fill', d => colorScale(d.depth));

    cells.append('text')
        .attr('class', 'tile-text')
        .attr('x', d => (d.x1 - d.x0) / 2)
        .attr('y', d => (d.y1 - d.y0) / 2)
        .text(d => {
            const width = d.x1 - d.x0;
            const height = d.y1 - d.y0;
            if (width > 50 && height > 20) {
                return d.data.name;
            }
            return '';
        });

    cells.append('title')
        .text(d => `${d.data.name}\n${formatSize(d.data.size)}`);
}

function renderTreeView(root) {
    const container = document.getElementById('treeview');
    container.innerHTML = '<h3>File Tree</h3>';

    const tree = document.createElement('div');
    renderNode(root, tree, 0);
    container.appendChild(tree);
}

function renderNode(node, parent, depth) {
    const div = document.createElement('div');
    div.className = 'node';
    div.style.paddingLeft = `${depth * 20}px`;
    div.textContent = `${node.is_directory ? '📁' : '📄'} ${node.name} (${formatSize(node.size)})`;

    parent.appendChild(div);

    if (node.children && node.children.length > 0) {
        node.children.forEach(child => renderNode(child, parent, depth + 1));
    }
}
