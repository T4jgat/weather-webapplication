import express, {Router} from "express";
import weatherController from "../controllers/weatherController.js"

const router = express.Router()

router.get("/weather", await weatherController.getWeather)
router.get("/", await weatherController.homePage)

export default router