const express = require('express');
const app = express();
const server = require('http').createServer(app); // 使用 http 模組來建立一個 HTTP 伺服器
const port = 8080;
// Socket.io
const io = require('socket.io')(server,{cors:true}); // 引入 Socket.IO 模組並將其附加到 HTTP 伺服器上
//設置了 cors 選項為 true，允許跨域請求，這樣可以允許來自不同源的客戶端連接到 Socket 伺服器

io.on('connection', client => {
    console.log(`socket 用戶連接 ${client.id}`);

    client.on('joinRoom', room => { 
        const rooms = Array.from(client.rooms) // 拿取Client已加入的所有房間
        client.leave(rooms[0]) // 每個client可以加入多個房間，在最一開始每個Client都會有預設的房間，房間名稱是自己的ID
        client.join(room)
        io.sockets.in(room).emit('roomBroadcast', '已有新人加入聊天室！'); // 傳送訊息給room中的所有Client，廣播
    });

    client.on('peerconnectSignaling', message => {
        const nowRoom = Array.from(client.rooms)[0] 
        client.to(nowRoom).emit('peerconnectSignaling', message) // 透過Client觸發peerconnectSignalingg事件
    });

    client.on('disconnect', () => { 
        console.log(`socket 用戶離開 ${client.id}`); 
    });
});

server.listen(port, () => { //執行伺服器
    console.log(`Socket伺服器已啟動，監聽在 http://localhost:${port}`);
  });