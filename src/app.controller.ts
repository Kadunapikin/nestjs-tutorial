import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getAllBooks(): Book[]  {
    return this.bookService.getAllBooks();
  }

  @Get('getById/:id')
  getBooksById(@Param('id') id: string): Book | undefined  {
    const bookID = +id
    return this.bookService.findById(bookID);
  }
}
