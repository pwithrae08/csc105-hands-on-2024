import { Hono } from "hono";
import { userRouter } from "./user.routes.ts";
import { todoRouter } from "./todo.routes.ts";

const mainRouter = new Hono();

mainRouter.route("/users", userRouter);
mainRouter.route("/todos", todoRouter);
export { mainRouter };