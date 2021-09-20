import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Products1631926955030 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'code',
                        type: 'varchar',
                    },
                    {
                        name: 'barcode',
                        type: 'varchar',
                    },
                    {
                        name: 'status',
                        type: 'varchar',
                    },

                    {
                        name: 'imported_t',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'url',
                        type: 'varchar',
                    },
                    {
                        name: 'product_name',
                        type: 'varchar',
                    },
                    {
                        name: 'quantity',
                        type: 'varchar',
                    },
                    {
                        name: 'categories',
                        type: 'varchar',
                    },
                    {
                        name: 'packaging',
                        type: 'varchar',
                    },
                    {
                        name: 'brands',
                        type: 'varchar',
                    },
                    {
                        name: 'image_url',
                        type: 'varchar',
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('products');
    }
}
