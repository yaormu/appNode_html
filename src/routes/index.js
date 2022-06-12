import { Router } from "express";

const router = Router();

router.get("/", (req, res) => res.render("index", { title: 'First Website with Node' }));
router.get("/about", (req, res) => res.render("about", { titulo: 'About Me' }));
router.get("/contact", (req, res) => res.render("contact", { title: 'Contact Page' }));

export default router;
