import express from "express";
import dotenv from "dotenv"
import * as path from "path";
import {fileURLToPath} from "url"
import router from "./routes/weatherRouter.js";

dotenv.config({path: "./.env"})

const app = express()
const PORT = process.env.PORT || 3001

const __dirname = path.dirname(fileURLToPath(import.meta.url))

app.set('view engine', 'ejs');
app.use(express.static(__dirname+ '/public'));
app.use("/weather", router)

app.get((req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});