import { Controller } from '@nestjs/common';
import { ApiController } from '../../lib/generics/api-controller';
import { UserDto } from './user.dto';
import { SwaggerDoc } from '../../lib/decorators/swagger-doc';
import { UserService } from './user.service';
import { ApiTags } from '@nestjs/swagger';

@SwaggerDoc(
  {
    createOne: {
      apiBody: {
        type: UserDto,
      },
    }
  }
)
@ApiTags('user')
@Controller('user')
export class UserController extends ApiController<UserDto>{
  constructor(
    private readonly _userService: UserService,
  ) {
    super(
      _userService,
    );
  }
}
