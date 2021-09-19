import axios from 'axios';
const cheerio = require('cheerio');
const { find } = require('cheerio/lib/api/traversing');
import Product from '../modules/products/infra/typeorm/entities/Product';
import { getConnection } from 'typeorm';
import { CronJob } from 'cron';
import ProductService from '../modules/products/services/product.service';
import createConnection from "../shared/infra/typeorm";


createConnection();
const fetchData = async url => {
    const result = await axios.get(url);
    return result.data;
};

const main = async () => {
     const productService = new ProductService();
    await productService.delete();

    const content = await fetchData('https://world.openfoodfacts.org/');
    const $ = cheerio.load(content);
    $('ul.products > li').each(async (i, e) => {

        const url =
            'https://world.openfoodfacts.org' + $(e).find('a').attr('href');
        const codeLink = url.split('/');
        const code = codeLink[4];
        let today = new Date();
        const product = await producDetail(url) as Product;

        await productService.create(product);
    });
};

const producDetail = async url => {
    const content = await fetchData(url);
    const $ = cheerio.load(content);
    let product_name;
    let barcode;
    let status;
    let categories;
    let packaging;
    let brands;
    let image_url;
    $('#main_column').each((i, e) => {
        product_name = $(e).find('h1').text();
        barcode = $(e)
            .find('#barcode_paragraph')
            .text()
            .replace(/\s|Barcode: /g, '');
        status = 'imported';
        categories = $(e)
            .find('.medium-12.large-8.xlarge-8.xxlarge-8.columns')
            .find('p:nth-child(5):first')
            .text()
            .replace(/Categories: /g, '');
        packaging = $(e)
            .find('.medium-12.large-8.xlarge-8.xxlarge-8.columns')
            .find('p:nth-child(3):first')
            .text()
            .replace(/Packaging: /g, '');
        brands = $(e)
            .find('.medium-12.large-8.xlarge-8.xxlarge-8.columns')
            .find('p:nth-child(4):first')
            .text()
            .replace(/Brands: /g, '');
        image_url = $(e)
            .find('#image_box_front > a > img.show-for-xlarge-up')
            .attr('src');
    });
    return {
        product_name,
        barcode,
        status,
        categories,
        packaging,
        brands,
        image_url,
    };
};

const job = new CronJob(
    '* * 23 1-31 0-11 *',
    () => {
        main();
    },
    null,
    true,
    'America/Sao_Paulo',
);

main();
