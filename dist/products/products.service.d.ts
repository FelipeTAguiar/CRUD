import { Model } from 'mongoose';
import { Product } from './schema/product.schema';
export declare class ProductsService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    create(product: Product): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product | null>;
    update(id: string, product: Product): Promise<Product | null>;
    delete(id: string): Promise<any>;
}
