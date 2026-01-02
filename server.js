const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.mp3': 'audio/mpeg',
    '.json': 'application/json'
};

// Map request paths to actual file locations
function getFilePath(requestUrl) {
    let reqPath = requestUrl === '/' ? '/html/index.html' : requestUrl;

    // Normalize path to prevent directory traversal
    reqPath = path.normalize(decodeURIComponent(reqPath));

    // Resolve absolute path
    const absolutePath = path.resolve(__dirname, '.' + reqPath);

    // Security Check: Ensure the resolved path is still within the project directory
    if (!absolutePath.startsWith(__dirname)) {
        console.warn(`[Security] Blocked traversal attempt: ${requestUrl}`);
        return null; // Return null to indicate access denied/file not found
    }

    return absolutePath;
}

const server = http.createServer((req, res) => {
    const filePath = getFilePath(req.url);

    if (!filePath) {
        res.writeHead(403);
        res.end('Forbidden');
        return;
    }

    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'text/plain';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(data);
        }
    });
});

server.listen(PORT, () => {
    console.log('========================================');
    console.log('  Server running at:');
    console.log('  http://localhost:' + PORT);
    console.log('========================================');
    console.log('Press Ctrl+C to stop the server');
});
