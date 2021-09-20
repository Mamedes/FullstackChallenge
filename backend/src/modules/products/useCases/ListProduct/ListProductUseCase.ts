import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../repositories/IProductsRepository';
import { Product } from '../../infra/typeorm/entities/Product';

@injectable()
class ListProductUseCase {
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository,
    ) {}

    async execute(page: number, limit: number): Promise<Product[]> {
        const products = await this.productsRepository.find(page, limit);

        return products;
    }
}

export { ListProductUseCase };
