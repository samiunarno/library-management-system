"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowService = void 0;
// src/app/modules/borrow/borrow.service.ts
const borrow_model_1 = __importDefault(require("./borrow.model"));
const book_model_1 = __importDefault(require("../book/book.model"));
const borrowBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { book: bookId, quantity, dueDate } = payload;
    const book = yield book_model_1.default.findById(bookId);
    if (!book)
        throw new Error("Book not found");
    if (book.copies < quantity)
        throw new Error("Not enough copies available");
    book.copies -= quantity;
    if (book.copies === 0)
        book.available = false;
    yield book.save();
    const borrowRecord = yield borrow_model_1.default.create({ book: bookId, quantity, dueDate });
    return borrowRecord;
});
const getBorrowSummary = () => __awaiter(void 0, void 0, void 0, function* () {
    return borrow_model_1.default.aggregate([
        {
            $group: {
                _id: "$book",
                totalQuantity: { $sum: "$quantity" },
            },
        },
        {
            $lookup: {
                from: "books",
                localField: "_id",
                foreignField: "_id",
                as: "bookInfo",
            },
        },
        { $unwind: "$bookInfo" },
        {
            $project: {
                _id: 0,
                book: {
                    title: "$bookInfo.title",
                    isbn: "$bookInfo.isbn",
                },
                totalQuantity: 1,
            },
        },
    ]);
});
exports.BorrowService = {
    borrowBook,
    getBorrowSummary,
};
