import { CrudApiDocConfig } from './crud-api-config.interface';
import { DECORATORS } from '@nestjs/swagger/dist/constants';
import { DEFAULT_BODY_METADATA } from './constants';
import { ApiBodyMetadata, CreateUpdateOneConfig } from './swagger-doc';
import { ApiBodyOptions } from '@nestjs/swagger';
import { getTypeIsArrayTuple } from '@nestjs/swagger/dist/decorators/helpers';
import {
  addEnumArraySchema,
  addEnumSchema,
  isEnumArray,
  isEnumDefined,
} from '@nestjs/swagger/dist/utils/enum.utils';
import { omit, pickBy, negate, isUndefined } from 'lodash';


export class SwaggerHelper {


  static makeCrudDoc(
    options: CrudApiDocConfig,
    target: any,
  ) {
    const createOneOptions = options.createOne;
    if (createOneOptions) {
      this.buildApiBody(createOneOptions, 'createOne', target);
    }
  }

  private static buildApiBody(
    configObject: CreateUpdateOneConfig,
    methodName: string,
    target: any,
  ): void {
    const params = this.makeCustomApiBody(configObject.apiBody);
    const metadataValue = Reflect.getMetadata(
      DECORATORS.API_PARAMETERS,
      target.prototype[methodName],
    ) || [];
    Reflect.defineMetadata(
      DECORATORS.API_PARAMETERS,
      [
        ...metadataValue,
        {
          ...params,
          ...DEFAULT_BODY_METADATA,
          ...pickBy(params, negate(isUndefined)),
        },
      ],
      target.prototype[methodName],
    );
  }

  private static makeCustomApiBody(options: ApiBodyOptions) {
    const [type, isArray] = getTypeIsArrayTuple(
      (options as ApiBodyMetadata).type,
      (options as ApiBodyMetadata).isArray as boolean,
    );
    const param: ApiBodyMetadata & Record<string, any> = {
      in: 'body',
      ...omit(options, 'enum'),
      type,
      isArray,
    };

    if (isEnumArray(options)) {
      addEnumArraySchema(param, options);
    } else if (isEnumDefined(options)) {
      addEnumSchema(param, options);
    }
    return param;
  }


}
