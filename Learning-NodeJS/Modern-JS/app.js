import express from "express";
import reqHandler from "./reqHandler.js";

const app = express();

app.get("/", reqHandler);

app.listen(3000);
