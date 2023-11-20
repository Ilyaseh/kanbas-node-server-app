import express from 'express'
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import Lab5 from "./lab5.js";
import Hello from "./hello.js";
import ModuleRoutes from "./modules/routes.js";
import "dotenv/config";

const app = express();

// Use CORS middleware
app.use(cors());

// Use express.json() middleware to parse JSON bodies
app.use(express.json());

// Define your routes
ModuleRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);

// Start the server
app.listen(process.env.PORT || 4000);