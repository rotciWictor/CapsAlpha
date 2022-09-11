
wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
        const obj = JSON.parse(data);
        const type = obj.type;
        const params = obj.params;

        switch (type) {
            case "create":
                create(params);
                break;
            case "join":
                join(params);
                break;
            case "leave":
                leave(params);
                break;
            default:
                console.warn(`Type: ${type} unknown`);
                break;
        }
    });

    function create(params) { }
    function join(params) { }
    function leave(params) { }
});

const maxClients = 2;
let rooms = {};

function generalInformation(ws) {
    let obj;
    if (ws["room"] === undefined)
    obj = {
      "type": "info",
      "params": {
        "room": ws["room"],
        "no-clients": rooms[ws["room"]].length,
      }
    }
    else
    obj = {
      "type": "info",
      "params": {
        "room": "no room",
      }
    }
  
    ws.send(JSON.stringify(obj));
  }

function create(params) {
    const room = genKey(5);
    rooms[room] = [ws];
    ws["room"] = room;

    generalInformation(ws);
}

function genKey(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(
            Math.floor(Math.random() * characters.length));
    }
    return result;
}

function join(params) {
    const room = params.code;
    if (!Object.keys(rooms).includes(room)) {
        console.warn(`Room ${room} does not exist!`);
        return;
    }

    if (rooms[room].length >= maxClients) {
        console.warn(`Room ${room} is full!`);
        return;
    }

    rooms[room].push(ws);
    ws["room"] = room;

    generalInformation(ws);
}

function leave(params) {
    const room = ws.room;
    rooms[room] = rooms[room].filter(so => so !== ws);
    ws["room"] = undefined;

    if (rooms[room].length == 0)
        close(room);
}

function close(room) {
    rooms = rooms.filter(key => key !== room);
}
module.exports = class wsDocuments {

}

/* 

{
    type: 'type', // create, join, leave, changes, save
    params: object, // {document: 'uuid'}, {ops: []}, {content: 'content'}
    userId: string, // uuid
    documentId: string, // uuid
}

*/