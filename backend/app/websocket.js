const server = require("./app");

const WebSocket = require('ws');
const wss = new WebSocket.Server({
    server: server,
    clientTracking: true
})

////////////////////////////////////////////////////////////////////////////////
// WebSocket Server

wss.on('error', (error) => {
    console.log('Socket Server Error: ' + error);
});

wss.on('close', () => {
    console.log('Socket Server Close');
});

wss.on('connection', (ws, req) => {
    console.log('Socket Client Connection');
    //ws.send('Welcome to the chat, enjoy :)');

    ws.on('error', (error) => {
        console.log('Socket Error: ' + error);
    });

    ws.on('pong', () => { ws.isAlive = true });

    ws.on('close', () => { console.log('Socket Client Disconnected') });

    //wsStart(ws, req)

    ws.userId = uuid();
    ws.documentId = uuid(1, -1)

    ws.on('message', (data, isBinary) => {
        try {
            const message = isBinary ? data : data.toString();
            //console.log(isBinary, message, typeof message)
            console.log(wss)
            wss.clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN && ws.userId !== client.userId) {
                    client.send(message);
                }
            });
        }
        catch (e) { console.log("WS-MESSAGE ERROR: message(fn) --> received non-parsable DATA --> " + e); return; }
    });


    //ws.on('message', (data, isBinary) => { })
});