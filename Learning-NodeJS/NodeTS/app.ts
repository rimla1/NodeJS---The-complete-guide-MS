import express from "express"
import todoRoutes from "./routes/todos"

const app = express();

app.use(todoRoutes)

app.listen(3535);
