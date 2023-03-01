import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
 const user = await prisma.user.delete({
    where:{
        email:'user@email.com'
    }
 })
 console.log(user);
 
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
