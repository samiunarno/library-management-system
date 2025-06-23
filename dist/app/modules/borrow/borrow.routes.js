"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const borrow_controller_1 = require("./borrow.controller");
const borrowRouter = (0, express_1.Router)();
borrowRouter.post("/borrow", borrow_controller_1.BorrowController.borrowBook);
borrowRouter.get("/borrow", borrow_controller_1.BorrowController.getBorrowSummary);
exports.default = borrowRouter;
