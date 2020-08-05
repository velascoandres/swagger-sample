import { ApiProperty } from '@nestjs/swagger';

export class ProductDto {
  @ApiProperty()
  description: string;
  @ApiProperty()
  price: number;
}
