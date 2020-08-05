import { CrudApiDocConfig } from './crud-api-config.interface';
import { ApiBodyOptions } from '@nestjs/swagger';
import { Type } from '@nestjs/common';
import { SwaggerEnumType } from '@nestjs/swagger/dist/types/swagger-enum.type';
import { RequestBodyObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { SwaggerHelper } from './utils';


export interface CreateUpdateOneConfig  {
  apiBody: ApiBodyOptions;
}
export type RequestBodyOptions = Omit<RequestBodyObject, 'content'>;

export interface ApiBodyMetadata extends RequestBodyOptions {
  type?: Type<unknown> | Function | [Function] | string;
  isArray?: boolean;
  enum?: SwaggerEnumType;
}


export function SwaggerDoc( // Decorator
  options: CrudApiDocConfig,
): ClassDecorator {
  return (target: any) => {
    return  SwaggerHelper.makeCrudDoc(options, target);
  };
}

