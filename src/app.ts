import express from "express"
import "express-async-errors"
import cors from "./libs/cors"
import rateLimit from "./libs/express-rate-limit"
import router from "./infra/routes"
import appMiddleware from "./application/middlewares/app-middleware"

const app = express()

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors)
app.use(rateLimit)
app.use(router)
app.use(appMiddleware)

export { app }