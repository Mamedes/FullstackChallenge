import { container } from 'tsyringe';
import { Product } from '../../infra/typeorm/entities/Product';

import { CreateProductUseCase } from './CreateProductUseCase';

class CreateProductController {
    async handle(product: Product): Promise<void> {
        const createProduct = container.resolve(CreateProductUseCase);
        await createProduct.execute(product);
    }
}
export { CreateProductController };
