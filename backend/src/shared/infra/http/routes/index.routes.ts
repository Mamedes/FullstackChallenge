/* eslint-disable import/no-unresolved */
import { Router } from 'express';
import { ListProductController } from '@modules/products/useCases/ListProduct/ListProductController';

const router = Router();
const listProductController = new ListProductController();

router.get('/products', listProductController.handle);

router.get('/', (request, response) => {
    return response.send('Hello world');
});
export { router };
