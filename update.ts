import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  const user = await prisma.user.update({
    where: {
      id: 16,
    },
    data: {
      userPreference: {
        create: {
            emailUpdates:true
        },
      },
    },
  });
  console.log(user);
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
