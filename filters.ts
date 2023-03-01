import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const user = await prisma.user.findMany({
    skip: 1,
    take: 2,
    orderBy: {
      age: "asc",
    },

    // distinct: ["age"],
  });
  console.log(user);
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
