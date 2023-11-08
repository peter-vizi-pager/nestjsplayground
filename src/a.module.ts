import { Module } from '@nestjs/common';

import { BModule } from './b.module';

@Module({
  imports: [BModule]
})
export class AModule {}
