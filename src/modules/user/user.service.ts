import { Injectable } from '@nestjs/common';
import { PrincipalService } from '../../lib/generics/principal-service';
import { UserDto } from './user.dto';

@Injectable()
export class UserService extends PrincipalService<UserDto>{}
