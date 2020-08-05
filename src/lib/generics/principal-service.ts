import { Repository } from 'typeorm';

export class PrincipalService<Entity> {
  constructor(private readonly _repository: Repository<Entity>) {}
}
