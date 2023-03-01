import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const user = await prisma.user.update({
    where: {
      id:16,
    },
    data: {
      age: {
        increment: 1,
        // decrement: 1,
        // multiply: 2,
        // divide:2


      },
    },
  });
  console.log(user);
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
