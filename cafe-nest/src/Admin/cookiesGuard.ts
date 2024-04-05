import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class ExtractCookiesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // console.log("Dds");
    // console.log(req);
    
    const token = req.cookies['access_token']; // Assuming your token is named 'token'
    // console.log(token,"fds");
    
    req['token'] = token; // Attach token to the request object
    next();
  }
}