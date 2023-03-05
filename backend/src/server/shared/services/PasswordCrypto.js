import bcrypt from "bcryptjs";

const SALT_RANDOMS = 8;

const hashPassword = async (password) => {
  const saltGenerated = await bcrypt.genSalt(SALT_RANDOMS);
  return await bcrypt.hash(password, saltGenerated);
};

const verifyPassword = async (password, hashedPassword) => {
  return await bcrypt.compare(password, hashedPassword);
};

export const PasswordCrypto = {
  hashPassword,
  verifyPassword,
};
