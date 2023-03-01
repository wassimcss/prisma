import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  await prisma.user.deleteMany();
  const users = await prisma.user.createMany({
    data: [
      {
        name: "John Doe",
        email: "JohnDoe@email.com",
        age: 27,
      },
      {
        name: "Dan Abramov",
        email: "DanAbramov@email.com",
        age: 22,
      },
    ],
  });
  console.log(users);
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
