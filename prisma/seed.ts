import prisma from "@/lib/db";
import seedConfig from "@/prisma/seedConfig";

async function main () {
  console.log("Start seeding...");

  for (const { name, model } of seedConfig(prisma).slice().reverse()) {
    console.log(`Cleaning table: ${name}...`);
    await model.deleteMany();
  }

  for (const { name, model, data } of seedConfig(prisma)) {
    console.log(`Seeding ${data.length} items into ${name}...`);
    for (const itemData of data) {
      const created = await model.create({
        data: itemData,
      });
      console.log(`Created ${name} with ID: ${created.id}`);
    }
  }

  console.log("Seeding finished.");
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
