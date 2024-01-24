import express, {Router} from "express";
import weatherController from "../controllers/weatherController.js"

const router = express.Router()

router.get("/", await weatherController.getWeather)

export default router