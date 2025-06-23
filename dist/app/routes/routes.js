"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const borrow_routes_1 = __importDefault(require("../modules/borrow/borrow.routes"));
const book_routes_1 = __importDefault(require("../modules/book/book.routes"));
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use("/api", book_routes_1.default);
router.use("/api", borrow_routes_1.default);
exports.default = router;
