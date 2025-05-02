import type { Context } from "hono";
import { database } from "../index.ts";

export const isDuplicate = async( firstName: string, lastName: string ) => {
    const user = await database.user.findFirst({
        where: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

export const createUser = async( firstName: string, lastName: string ) => {
    const user = await database.user.create({
        data: {
            firstName: firstName,
            lastName: lastName,
        },
    });
    return user;
}

export async function getallusers(c:Context) {
    const users = await database.user.findMany();
  return c.json(users);
};

