import { database } from "../index.ts";

export const createTodo = async (title: string, userId: number) => {
    const todo = await database.todo.create({
        data: {
            title: title,
            userId: userId,
        },
    });
    return todo;
}
export const getTodo = async (id: number) => {
    const todo = await database.todo.findUnique({
        where: {
            id: id,
        },
        include: {
            user: true, 
        },
    });
    return todo;
}
export const deleteTodo = async (id: number) => {
    const todo = await database.todo.delete({
        where: {
            id: id,
        },
    });
    return todo;
}
