import { Injectable, Module } from '@nestjs/common';

import { BModule, BService } from './b.module';

@Injectable()
export class AService {
  constructor(private bService: BService) {}
}

@Module({
  imports: [BModule],
  providers: [AService]
})
export class AModule {}
