import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // add role and user state table
  const roles = [
    { id: 0, name: 'user' },
    { id: 1, name: 'admin' },
  ];
  await prisma.role.createMany({
    data: roles,
  });

  // add user state table
  const user_state = [
    { id: 0, name: 'active' },
    { id: 1, name: 'inactive' },
  ];

  await prisma.role.createMany({
    data: user_state,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
