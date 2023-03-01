import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {

  const user = await prisma.user.findUnique({
   where:{
    name_age:{
        name:'John Doe',
        age:27
    }
   }
  });
  console.log(user);
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
