import "dotenv/config";
import express from 'express'
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import Lab5 from "./lab5.js";
import Hello from "./hello.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
// const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/kanbas';

mongoose.connect(CONNECTION_STRING);
import session from "express-session";

const app = express();
app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));
const sessionOptions = {
    secret: "mongodb+srv://ilyaselharoui:Voetbal17@cluster0.xl2prxj.mongodb.net/?retryWrites=true&w=majority",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  app.use(session(sessionOptions));
  
  
app.use(express.json());
UserRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
app.listen(process.env.PORT || 4000);