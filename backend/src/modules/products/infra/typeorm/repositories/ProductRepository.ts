import { getRepository, Repository } from 'typeorm';
import { uuid } from 'uuid';
import { ICreateProductDTO } from '@modules/products/dtos/ICreateProductDTO';
import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { getConnection } from 'typeorm';
import Product from '../entities/Product';

class ProductsRepository implements IProductsRepository {
    private products: Product[] = [];

    public async create({
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
        const product = new Product();

        Object.assign(product, {
            id: uuid(),
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
        this.products.push(product);

        return product;
    }

    async find(): Promise<Product[]> {
        const product = this.products.map(function (e) {
            return e;
        });
        return product;
    }

    async findById(id: string): Promise<Product> {
        const findproduct = this.products.find(product => product.id === id);

        return findproduct;
    }
    public async destroy(): Promise<void> {
        await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Product)
            .execute();
    }
}

export default ProductsRepository;
