import { inject, injectable } from 'tsyringe';
import { IProductsRepository } from '../../repositories/IProductsRepository';
import { Product } from '../../infra/typeorm/entities/Product';
import { ICreateProductDTO } from '../../dtos/ICreateProductDTO';

@injectable()
class CreateProductUseCase {
    constructor(
        @inject('ProductsRepository')
        private productsRepository: IProductsRepository,
    ) {}

    async execute({
        code,
        barcode,
        status,
        imported_t,
        url,
        product_name,
        quantity,
        categories,
        packaging,
        brands,
        image_url,
    }: ICreateProductDTO): Promise<Product> {
        const product = await this.productsRepository.create({
            code,
            barcode,
            status,
            imported_t,
            url,
            product_name,
            quantity,
            categories,
            packaging,
            brands,
            image_url,
        });

        return product;
    }
}

export { CreateProductUseCase };
