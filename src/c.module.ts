import { Module, Injectable } from '@nestjs/common';

@Injectable()
export class CService {}

@Module({
  providers: [CService],
  exports: [CService]
})
export class CModule {}
