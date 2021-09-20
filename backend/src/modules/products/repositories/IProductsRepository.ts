import { ICreateProductDTO } from '../dtos/ICreateProductDTO';
import { Product } from '../infra/typeorm/entities/Product';

interface IProductsRepository {
    create(data: ICreateProductDTO): Promise<Product>;
    find(page: number, limit: number): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    destroy(): Promise<void>;
}

export { IProductsRepository };
