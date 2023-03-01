import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  //   const userPreference = await prisma.userPreference.create({
  //     data: {
  //       emailUpdates:true
  //     },
  //   });
  //   console.log('5a11ccd0-3a56-43d8-a39c-7d3cf5978f03');
  const user = await prisma.user.update({
    where: {
      id: 16,
    },
    data: {
      userPreference: {
        connect: {
          id: '5a11ccd0-3a56-43d8-a39c-7d3cf5978f03',
        },
      },
    },
  });
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
