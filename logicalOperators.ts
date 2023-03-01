import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const user = await prisma.user.findMany({
    where: {
    //   AND: [{ name: { startsWith: "Jo" } }, { age: { lte: 60 } }],
    //   OR: [{ name: { startsWith: "Jo" } }, { age: { lte: 60 } }],
    NOT:{email:"aa@aa.aa"}

    },
  });
  console.log(user);
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
