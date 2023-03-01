import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const user = await prisma.post.findMany({
    where: {
    //   author:{
    //     is:null
    //   },
      author:{
        isNot:null
      }

    },
  });
  console.log(user);
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
