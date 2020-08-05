## Set Up

```shell script
npm install
npm run start:dev
```

## Problem description
Hello, I have a controller that inherits 
all CRUD methods from a generic superclass, 
I want to implement swagger on the inherited methods. 
I have made a class decorator based on the swagger 
method decorators, but modifies the metadata of the superclass 
methods, causing all the controllers that use this decorator 
to have the same information in the swagger UI.

```typescript
@SwaggerDoc(
    {
        createOne: {
            apiBody: {
                type: UserCreateDTO,
            }
        },
    },
)
@ApiTags('user')
@Controller('user')
export class UserController extends ApiController<UsuarioEntity>{
}
```


## Problem Replication

1. On the browser go to: 

    `http://localhost:3000/api/product/#/product/ProductController_createOne`
   
   ![product](https://raw.githubusercontent.com/velascoandres/swagger-sample/master/screenshots/product-api-doc.png)   

2. On another browser tab go to:

    `http://localhost:3000/api/user/#/user/UserController_createOne`
        
        
   ![user](https://raw.githubusercontent.com/velascoandres/swagger-sample/master/screenshots/user-api-doc.png)   

You will notice that both the scheme for product and user is the same.


Product Scheme:

```typescript
export class ProductDto {
  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;
}
```


User Scheme:

```typescript
export class UserDto {
  @ApiProperty()
  name: string;
}

```

