"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    console.log(">>> Entrou!");
    res.json({
        id: 1,
        name: "João",
        age: 18,
        env: process.env.NODE_ENV,
    });
});
exports.default = router;
