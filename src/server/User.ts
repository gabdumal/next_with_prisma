"use server";

import { prisma } from "@/lib/prisma";
import User from "@/types/User";

export const create = async (
  previousState: User,
  formData: FormData
): Promise<User> => {
  const email = formData.get("email");
  const name = formData.get("name");

  if (!email || !name) {
    throw new Error("Email and Name are required");
  }

  if (email instanceof File || name instanceof File) {
    throw new Error("Email and Name must be a string");
  }

  const result = await prisma.user.create({
    data: {
      email,
      name,
    },
  });

  return {
    id: result.id,
    name: result.name,
    email: result.email,
  };
};
