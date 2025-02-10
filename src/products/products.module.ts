import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductSchema } from './schema/product.schema'; // Importe o schema do produto

@Module({
  imports: [
    // Registre o modelo Product no MongooseModule
    MongooseModule.forFeature([{ name: 'Product', schema: ProductSchema }]),
  ],
  providers: [ProductsService], // ProductsService já está declarado
  controllers: [ProductsController],
})
export class ProductsModule {}

