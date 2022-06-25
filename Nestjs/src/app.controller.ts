/* eslint-disable prettier/prettier */
import { Controller, Delete, Get, Patch, Post, Put, Head, Options, Body, Redirect, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query('token') token, @Body() body): string {
    if (token) return token;    
    if (body) return body;    
    return this.appService.getHello();
  }
  @Get("test")
  getHell(@Query() query): string {
    if (query['token']) return query['token']; 
    return this.appService.getHello();
  }

  @Post()
  postHello(@Body() body): string {
    console.log(body);
    return body;
    return JSON.stringify(body);
    return `{"hhh":"ppp"}`
    return this.appService.postHello();
  }

  @Post("redirect")
  @Redirect('/test')
  
  @Put()
  putHello(): string {
    return this.appService.putHello();
  }
  
  @Patch()
  patchHello(): string {
    return this.appService.patchHello();
  }

  @Delete()
  deleteHello(): string {
    return this.appService.deleteHello();
  }
  
  @Head()  
  headHello(): string {
    return this.appService.headHello(); // not work...
  }

  @Options()
  optionsHello(): string {
    return this.appService.optionsHello();
  }

}
