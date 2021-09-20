/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-unresolved */
import { getRepository, Repository } from 'typeorm';
import { ICreateProductDTO } from '../../dtos/ICreateProductDTO';
import { IProductsRepository } from '../../repositories/IProductsRepository';

import { Product } from '../../infra/typeorm/entities/Product';

export class ProductsRepository implements IProductsRepository {
    private repository: Repository<Product>;

    constructor() {
        this.repository = getRepository(Product);
    }

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
        const product = this.repository.create({
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
        await this.repository.save(product);
        return product;
    }

    async find(page, limit): Promise<Product[] | any> {
        const skippedItems = (page - 1) * limit;
        const totalCount = await this.repository.count();

        const products = await this.repository
            .createQueryBuilder()
            .orderBy('created_at', 'DESC')
            .offset(skippedItems)
            .limit(limit)
            .getMany();

        return {
            totalCount,
            page,
            limit,
            data: products,
        };
    }

    async findById(id: string): Promise<Product> {
        const findproduct = await this.repository.findOne(id);
        return findproduct;
    }
    public async destroy(): Promise<void> {
        await this.repository
            .createQueryBuilder()
            .delete()
            .from(Product)
            .execute();
    }
}
