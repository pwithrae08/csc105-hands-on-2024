import type { Context } from "hono";
import * as userModel from "../models/user.model.ts";
import { database } from "../index.ts";

type createUserBody = {
	firstName: string;
	lastName: string;
};

export const createUser = async (c: Context) => {
	try {
		const body = await c.req.json<createUserBody>();
		if (!body.firstName || !body.lastName)
			return c.json(
				{
					success: false,
					data: null,
					msg: "Missing required fields",
				},
				400
			);
		if (await userModel.isDuplicate(body.firstName, body.lastName)) {
			return c.json({
				success: false,
				data: null,
				msg: "The first name or last name is duplicated",
			});
		}
		const newUser = await userModel.createUser(
			body.firstName,
			body.lastName
		);
		return c.json({
			success: true,
			data: newUser,
			msg: "Created new User successful!",
		});
	} catch (e) {
		return c.json(
			{
				success: false,
				data: null,
				msg: `${e}`,
			},
			500
		);
	}
};

export const getAllUsers = async (c: any) => {
    const users = await database.user.findMany();
    return c.json(users);
};


export const updateUser = async (c: any) => {
    const id = Number(c.req.param("id"));
    const { firstName, lastName } = await c.req.json();
    const updatedUser = await database.user.update({
      where: { id },
      data: { firstName, lastName },
    });
    return c.json(updatedUser);
  };