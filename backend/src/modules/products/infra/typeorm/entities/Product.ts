import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity('products')
class Product {
    @PrimaryColumn()
    id: string;

    @Column()
    code: string;

    @Column()
    barcode: string;

    @Column()
    status: string;

    @Column()
    imported_t: string;

    @Column()
    url: string;

    @Column()
    product_name: string;

    @Column()
    quantity: string;

    @Column()
    categories: string;

    @Column()
    packaging: string;

    @Column()
    brands: string;

    @Column()
    image_url: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export default Product ;
