const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(cors());

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const docPath = path.join(__dirname, 'document.json');
let document = "";

// Optional: Load from file on server start
if (fs.existsSync(docPath)) {
    document = fs.readFileSync(docPath, 'utf8');
}

// Health check endpoint
app.get('/', (req, res) => {
    res.send('Collaborative Editor WebSocket server is running.');
});

wss.on('connection', (ws) => {
    console.log('New client connected');

    // Send current state
    ws.send(JSON.stringify({ type: 'init', data: document }));

    ws.on('message', (message) => {
        try {
            const parsedMessage = JSON.parse(message);
            if (parsedMessage.type === 'update') {
                document = parsedMessage.data;

                // Broadcast to all connected clients
                wss.clients.forEach((client) => {
                    if (client.readyState === WebSocket.OPEN) {
                        client.send(JSON.stringify({ type: 'update', data: document }));
                    }
                });
            }
        } catch (error) {
            console.error('Error parsing message:', error);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Optional: Save to file every 10 seconds
setInterval(() => {
    fs.writeFileSync(docPath, document, 'utf8');
}, 10000);

// Handle server errors
process.on('uncaughtException', (err) => {
    console.error('Unhandled exception:', err);
});

const PORT = 5000;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
