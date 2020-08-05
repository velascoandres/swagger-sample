import { Controller } from '@nestjs/common';
import { ApiController } from '../../lib/generics/api-controller';
import { ProductDto } from './product.dto';
import { SwaggerDoc } from '../../lib/decorators/swagger-doc';
import { ProductService } from './product.service';
import { ApiTags } from '@nestjs/swagger';

@SwaggerDoc(
  {
    createOne: {
      apiBody: {
        type: ProductDto,
      },
    },
  },
)
@ApiTags('product')
@Controller('product')
export class ProductController extends ApiController<ProductDto>{
  constructor(
    private readonly _productService: ProductService,
  ) {
    super(
      _productService,
    );
  }
}
