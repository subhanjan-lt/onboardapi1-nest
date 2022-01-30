import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { UsersService } from './users.service';

@Injectable()
export class HeaderAuthMiddleware implements NestMiddleware {
    constructor(private readonly service: UsersService) {}

    async use(req: Request, res: Response, next: NextFunction) {
        if (req.get('auth_key') === undefined) res.status(401).send('You are not authorized to request this data.');
        else {
            const headerkey = await this.service.findOneHeaderKey(req.get('auth_key'));
            if (headerkey === null) res.status(401).send('You are not authorized to request this data.');
            else next();
        }
    }
}
