import { Module, Injectable } from '@nestjs/common';

import { CModule, CService } from './c.module';

@Injectable()
export class BService {
  constructor(private cService: CService) {}
}

@Module({
  imports: [CModule],
  providers: [BService],
  exports: [BService]
})
export class BModule {}
