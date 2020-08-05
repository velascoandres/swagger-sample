import { ApiBodyOptions } from '@nestjs/swagger';

export interface CrudApiDocConfig {
  createOne?: {  // MethodName
    apiBody: ApiBodyOptions;
  }
}
