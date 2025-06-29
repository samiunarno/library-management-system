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
exports.BookService = void 0;
const book_model_1 = __importDefault(require("./book.model"));
const createBook = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const newBook = new book_model_1.default(payload);
    return yield newBook.save();
});
const getBooks = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const { filter, sortBy = "createdAt", sort = "desc", limit = "10" } = query;
    const filterQuery = {};
    if (filter) {
        filterQuery.genre = filter;
    }
    const sortOrder = sort === "asc" ? 1 : -1;
    const sortQuery = {
        [sortBy]: sortOrder,
    };
    const books = yield book_model_1.default.find(filterQuery)
        .sort(sortQuery)
        .limit(Number(limit));
    return books;
});
const getBookById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.default.findById(id);
});
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.default.findByIdAndUpdate(id, payload, { new: true });
});
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    return yield book_model_1.default.findByIdAndDelete(id);
});
exports.BookService = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
};
