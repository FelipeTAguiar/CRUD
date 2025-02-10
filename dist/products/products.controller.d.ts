import { ProductsService } from './products.service';
import { Product } from './schema/product.schema';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    create(product: Product): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product | {
        message: string;
    }>;
    update(id: string, product: Product): Promise<Product | {
        message: string;
    }>;
    delete(id: string): Promise<any>;
}
