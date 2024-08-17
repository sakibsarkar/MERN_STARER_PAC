import express from "express";
import authRoute from "./auth.route";
import userRoute from "./route";

const router = express.Router();

const moduleRoute = [
  {
    path: "/auth",
    route: authRoute,
  },

  {
    path: "/user",
    route: userRoute,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
