/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// CREATE USERS
export function createUser(userData) {
  const newUser = new UserModel({
    name,
    email,
    phone,
    password: bcrypt.hashSync(password, 8),
    userType,
    status,
  });
  const createdUser = newUser.save();
  return createdUser;
}
