import { Hono } from "hono";
import * as todoController from "../controllers/todo.controller.ts";

const todoRouter = new Hono();
todoRouter.post("/", todoController.createTodo);
todoRouter.get("/", todoController.getTodo);
todoRouter.patch("/:id/complete", todoController.completeTodo);
todoRouter.delete("/", todoController.deleteTodo);
todoRouter.get("/user/:id", todoController.getTodosOfUser);
todoRouter.patch("/:id/title", todoController.updateTodoTitle);

export { todoRouter };