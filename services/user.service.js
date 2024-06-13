const db = require("../models");
const user_model = db.Users;

exports.getUsers = async () => {
  try {
    const users = await user_model.findAll();
    return users;
  } catch (error) {
    throw new Error(error.message);
  }
};
exports.findOneById = async (id) => {
  return user_model.findOne({
    where: { id: id },
  });
};
exports.create = async (nUser) => {
  return await user_model.create(nUser);
};

exports.update = async (nUser, id) => {
  await user_model
    .update(nUser, {
      where: { id: id },
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error.message);
    });
};
exports.deleted = async (id) => {
  //   return user_model.destroy();
  await user_model
    .destroy({
      where: { id: id },
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
// exports.createUser = async (userData) => {
//   try {
//     const newUser = await user_model.create(userData);
//     return newUser;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
// exports.updateUser = async (id, updateData) => {
//   try {
//     const user = await user_model.findByPk(id);
//     if (!user) {
//       throw new Error("User not found");
//     }
//     const updatedUser = await user.update(updateData);
//     return updatedUser;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
