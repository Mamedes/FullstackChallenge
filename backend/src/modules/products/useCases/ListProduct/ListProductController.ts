/* eslint-disable prefer-destructuring */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { IBaseController } from '@shared/infra/http/controllers';
import { ListProductUseCase } from './ListProductUseCase';


class ListProductController implements IBaseController {
    async handle(req: Request, res: Response): Promise<Response> {
        const{ page}  = req.query
        const  {limit}  = req.query;
        console.log(page, limit);

        const listProductUseCase = container.resolve(ListProductUseCase);

        const products = await listProductUseCase.execute(+page, +limit);

        return res.json(products);
    }
}

export { ListProductController };
