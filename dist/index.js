"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const example_1 = __importDefault(require("./routes/example"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
const isDevelopment = process.env.NODE_ENV === "development";
app.use("/example/", example_1.default);
if (isDevelopment) {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT} - ${process.env.NODE_ENV}`);
    });
}
module.exports = app;
