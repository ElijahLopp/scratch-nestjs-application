import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/checkIn')
  getRootRoute() {
    return 'Hi There!';
  }

  @Get('/checkOut')
  getByThere() {
    return 'Bye There!';
  }
}
