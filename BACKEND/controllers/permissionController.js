const getUserPermission = require("../utils/userPermissions");
const permissionController = async (req, res) => {
  let permissions = await getUserPermission(req.user);
  res.status(200).json({ message: "Fetched successfully", data: permissions });
};

module.exports = permissionController;
