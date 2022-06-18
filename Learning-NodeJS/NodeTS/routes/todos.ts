import { Router } from "express";
import todosController from "../controllers/todos"

const todos = [];

const router = Router()

router.get("/", (req, res, next) => {

})

export default router