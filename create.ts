import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({log:["query"]});

async function main() {
  await prisma.user.deleteMany()
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "JohnDoe@email.com",
      age: 27,
      userPreference:{
        create:{
            emailUpdates:true
        }
      }
    },
    select:{
        name:true,
        userPreference:{
            select:{
                emailUpdates:true
            }
        }
    }
    // include:{
    //     userPreference:true
    // }
  });
  console.log(user);
}

main()
  .catch((e) => console.log("error", e.message))
  .finally(() => prisma.$disconnect());
