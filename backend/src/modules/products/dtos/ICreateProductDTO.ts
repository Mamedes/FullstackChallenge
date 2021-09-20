interface ICreateProductDTO {
    code: string;
    barcode: string;
    status: string;
    imported_t: Date;
    url: string;
    product_name: string;
    quantity: string;
    categories: string;
    packaging: string;
    brands: string;
    image_url: string;
    id?: string;
}

export { ICreateProductDTO };
