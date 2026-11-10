import express from "express"
import { deleteUrl, getUrls, shortenUrl, urlRedirect } from "../controllers/urlController.js"

const router = express.Router()

router.get("/geturls",getUrls)
router.get("/:shortID",urlRedirect)
router.post("/",shortenUrl)
router.delete("/:id",deleteUrl)


export default router