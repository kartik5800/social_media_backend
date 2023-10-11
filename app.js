// requires ...
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import AuthRoute from "./Routes/AuthRoute.js";
import UserRoute from "./Routes/UserRoute.js";
import PostRoute from "./Routes/PostRoute.js";
import UploadRoute from "./Routes/Uploadroute.js";
import ChatRoute from "./Routes/ChatRoute.js";
import MessageRoute from "./Routes/MessageRoute.js";

const app = express();

app.use(express.json());

// Middleware
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// to serve images inside public folder
app.use(express.static("public"));
app.use("/images", express.static("images"));

// usage of routes
app.use("/auth", AuthRoute);
app.use("/user", UserRoute);
app.use("/post", PostRoute);
app.use("/upload", UploadRoute);

app.use("/chat", ChatRoute);
app.use("/message", MessageRoute);

export default app;
