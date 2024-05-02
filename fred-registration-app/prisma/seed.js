const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');

const prisma = new PrismaClient();

// Paths to SQL scripts
const sqlFileNames = ['FRDBaseData.sql', 'FRDCatalogTestData.sql', 'FRDUserTestData.sql'];
const sqlFilePaths = sqlFileNames.map(fileName => path.join(__dirname, '../database', fileName));

async function main() {
  for (const filePath of sqlFilePaths) {
    // Read the SQL file content
    const sql = fs.readFileSync(filePath, 'utf8');
    // Execute the SQL script
    await prisma.$executeRawUnsafe(sql);
    console.log(`Executed SQL script: ${filePath}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
