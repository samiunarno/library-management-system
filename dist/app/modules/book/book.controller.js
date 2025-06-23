"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const handleResponse = (res, promise, successStatus, successMessage, failureStatus, failureMessage) => {
    promise
        .then((data) => res
        .status(successStatus)
        .json({ success: true, message: successMessage, data }))
        .catch((error) => res
        .status(failureStatus)
        .json({ success: false, message: failureMessage, error }));
};
const createBook = (req, res) => {
    handleResponse(res, book_service_1.BookService.createBook(req.body), 201, "Book created successfully", 400, "Sorry Failed");
};
const getBooks = (req, res) => {
    handleResponse(res, book_service_1.BookService.getBooks(req.query), 200, "Books retrieved successfully", 500, "Failed ");
};
const getBookById = (req, res) => {
    handleResponse(res, book_service_1.BookService.getBookById(req.params.bookId), 200, "Book retrieved successfully", 404, "Book not found");
};
const updateBook = (req, res) => {
    handleResponse(res, book_service_1.BookService.updateBook(req.params.bookId, req.body), 200, "Book updated successfully", 400, "Book update failed");
};
const deleteBook = (req, res) => {
    handleResponse(res, book_service_1.BookService.deleteBook(req.params.bookId).then(() => null), // no data for delete
    200, "Book deleted successfully", 500, "Book deletion failed");
};
exports.BookController = {
    createBook,
    getBooks,
    getBookById,
    updateBook,
    deleteBook,
};
