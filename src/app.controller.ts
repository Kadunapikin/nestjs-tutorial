import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Book } from './FakeDatabase';

@Controller('books')
export class BooksController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllBooks(): string {
    // return this.appService.getHello();
    return 'Book';
  }
}
