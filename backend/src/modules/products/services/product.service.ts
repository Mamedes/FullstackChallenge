import { getConnection } from 'typeorm';
import  Product  from '../infra/typeorm/entities/Product';
import ProductsRepository from '../infra/typeorm/repositories/ProductRepository';
import createConnection from "../../../shared/infra/typeorm";


createConnection();


export class ProductService {
    private productsRepository: ProductsRepository;


   public create = async (product: Product) => {
       const newproduct = await this.productsRepository.create(product);


        return newproduct

    }
    public delete = async () => {
        await getConnection()
        .createQueryBuilder()
        .delete()
        .from(Product)
        .execute();
      }


      public index = async () => {
        const posts = await this.productsRepository.find()
        return posts;
      }




}

export default ProductService;
