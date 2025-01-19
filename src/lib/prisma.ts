import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient().$extends({
  model: {},
});

export default { prisma };
