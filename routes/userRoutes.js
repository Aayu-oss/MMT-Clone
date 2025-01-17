import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} from "../controllers/usercontroller.js";
import { verifyAdmin, verifyToken, verifyUser } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
  res.send("hello user, you are logged in");
});
router.get("/checkuser/:id", verifyUser, (req, res, next) => {
  res.send("hello user, you are logged in and you can delete your account");
});
router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
  res.send("hello admin, you are logged in and you can delete all accounts");
});

router.get("/", verifyAdmin, getUsers);
router.put("/:id", verifyUser, updateUser);
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getUser);

export default router;
