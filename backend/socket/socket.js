import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

export  default io;


export const getRecieverSocketId = (recieverId) =>{
  return userSocketMap[recieverId]
}


const userSocketMap = {}; //{userId:socketId}
io.on("connection", (socket) => {

  console.log("a user connected", socket.id);
  const userId = socket.handshake.query.userId;
  console.log("USer Id",userId)

  if (userId != "undefined") userSocketMap[userId] = socket.id;

  io.emit("Get Online USer", Object.keys(userSocketMap));

  socket.on("disconnect", () => {
    console.log("User disconnected", socket.id);
    delete userSocketMap[userId];
    io.emit("Get Online USer", Object.keys(userSocketMap));
  });

});

export { app, io, server };
