import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const user = await prisma.user.findMany({
    where: {
      writtenPosts:{
        // every:{
        //     title:{
        //         startsWith:'Test'
        //     }
        // }
        // none:{
        //     title:{
        //         startsWith:'Test'
        //     }
        // }
        some:{
            title:{
                startsWith:'Test'
            }
        }
      }

    },
  });
  console.log(user);
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
