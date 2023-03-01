import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const user = await prisma.user.findMany({
    where: {
      name: {
        // equals: "John Doe",
        // not:'John Doe',
        in: ["John Doe", "Dan Abramov"],
        // notIn:["aa","zzz"]
      },
      age:{
        lt:30
      },
      email:{
        contains:"@email.com",
        // startsWith:"John",
        // endsWith:".com"
      }
    },
  });
  console.log(user);
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
