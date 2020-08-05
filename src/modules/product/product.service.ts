import { Injectable } from '@nestjs/common';
import { PrincipalService } from '../../lib/generics/principal-service';
import { ProductDto } from './product.dto';

@Injectable()
export class ProductService extends PrincipalService<ProductDto> {

}
