/* eslint-disable import/no-unresolved */
import { container } from 'tsyringe';

import { IProductsRepository } from '@modules/products/repositories/IProductsRepository';
import { ProductsRepository } from '@modules/products/repositories/Implementations/ProductsRepository';

container.registerSingleton<IProductsRepository>(
    'ProductsRepository',
    ProductsRepository,
);
