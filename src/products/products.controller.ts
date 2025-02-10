import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './schema/product.schema';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() product: Product): Promise<Product> {
    return this.productsService.create(product);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product | { message: string }> {
    const product = await this.productsService.findOne(id);
    if (!product) {
      return { message: 'Product not found' };
    }
    return product;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() product: Product): Promise<Product | { message: string }> {
    const updatedProduct = await this.productsService.update(id, product);
    if (!updatedProduct) {
      return { message: 'Product not found' };
    }
    return updatedProduct;
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<any> {
    return this.productsService.delete(id);
  }
}