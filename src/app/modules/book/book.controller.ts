import { Request, Response } from "express";
import { BookService } from "./book.service";

const handleResponse = (
  res: Response,
  promise: Promise<any>,
  successStatus: number,
  successMessage: string,
  failureStatus: number,
  failureMessage: string
) => {
  promise
    .then((data) =>
      res
        .status(successStatus)
        .json({ success: true, message: successMessage, data })
    )
    .catch((error) =>
      res
        .status(failureStatus)
        .json({ success: false, message: failureMessage, error })
    );
};

const createBook = (req: Request, res: Response) => {
  handleResponse(
    res,
    BookService.createBook(req.body),
    201,
    "Book created successfully",
    400,
    "Sorry Failed"
  );
};

const getBooks = (req: Request, res: Response) => {
  handleResponse(
    res,
    BookService.getBooks(req.query),
    200,
    "Books retrieved successfully",
    500,
    "Failed "
  );
};

const getBookById = (req: Request, res: Response) => {
  handleResponse(
    res,
    BookService.getBookById(req.params.bookId),
    200,
    "Book retrieved successfully",
    404,
    "Book not found"
  );
};

const updateBook = (req: Request, res: Response) => {
  handleResponse(
    res,
    BookService.updateBook(req.params.bookId, req.body),
    200,
    "Book updated successfully",
    400,
    "Book update failed"
  );
};

const deleteBook = (req: Request, res: Response) => {
  handleResponse(
    res,
    BookService.deleteBook(req.params.bookId).then(() => null), // no data for delete
    200,
    "Book deleted successfully",
    500,
    "Book deletion failed"
  );
};

export const BookController = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
};
