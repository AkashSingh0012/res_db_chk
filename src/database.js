import { PrismaClient } from "@prisma/client"; // path to generated Prisma client
const prisma = new PrismaClient();
export async function getRegistrationById(transaction_id) {
  return prisma.registered_master.findUnique({
    where: { transaction_id },
    select: {
      transaction_id: true,
      salutation: true,
      first_name: true,
      last_name: true,
      contact_no: true,
    },
  });
}

/**
 * Check if abstract exists for a registration
 */
export async function abstractExists(transaction_id) {
  const abstract = await prisma.abstract_submission.findUnique({
    where: { transaction_id },
  });
  return abstract !== null;
}
export async function insertAbstract(data) {
  return prisma.abstract_submission.create({
    data: {
      transaction_id: data.registration_id, 
      salutation: data.salutation,
      first_name: data.first_name,
      last_name: data.last_name,
      designation: data.designation,
      abstract_title: data.abstract_title,
      abstract_category: data.abstract_category,
      keywords: data.keywords,
      file_name: data.file_name,
      file_type: data.file_type,
      file_size_kb: data.file_size_kb,
      abstract_file: data.abstract_file,
    },
  });
}
