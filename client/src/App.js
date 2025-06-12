import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [document, setDocument] = useState("");
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = new WebSocket('ws://localhost:5000');
        setSocket(newSocket);

        newSocket.onopen = () => {
            console.log('WebSocket connection established');
        };

        newSocket.onmessage = (event) => {
            try {
                const message = JSON.parse(event.data);
                if (message.type === 'init' || message.type === 'update') {
                    setDocument(message.data);
                }
            } catch (error) {
                console.error('Error parsing message:', error);
            }
        };

        newSocket.onclose = () => {
            console.log('WebSocket connection closed');
        };

        newSocket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return () => {
            newSocket.close();
        };
    }, []);

    const handleChange = (e) => {
        const newDocument = e.target.value;
        setDocument(newDocument);
        if (socket && socket.readyState === WebSocket.OPEN) {
            socket.send(JSON.stringify({ type: 'update', data: newDocument }));
        }
    };

    const handleSave = () => {
        const blob = new Blob([document], { type: 'text/plain;charset=utf-8' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "collab-note.txt";
        link.click();
        window.URL.revokeObjectURL(url);
    };

    return (
        <main className="App">
            <h1>Collaborative Editor</h1>
            <section className="editor-section">
                <textarea
                    value={document}
                    onChange={handleChange}
                    placeholder="Begin writing your masterpiece..."
                    rows="20"
                    cols="80"
                />
                <button className="save-button" onClick={handleSave}>
                    Save Document
                </button>
            </section>
        </main>
    );
}

export default App;
