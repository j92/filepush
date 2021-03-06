import { Module } from '@nestjs/common';
import { FilesystemService } from './filesystem.service';
import { AppConfigModule } from '../app-config/app-config.module';
import { AdapterFactory } from './adapter/adapter.factory';
import { LocalAdapter } from './adapter/local.adapter';
import { S3Adapter } from './adapter/s3.adapter';
import { InMemoryAdapter } from './adapter/in-memory.adapter';
import { AppConfigService } from '../app-config/app-config.service';
import { S3Service } from './adapter/s3/s3.service';
import { S3Factory } from './adapter/s3/s3-factory';

@Module({
  imports: [AppConfigModule],
  providers: [
    FilesystemService,
    LocalAdapter,
    S3Adapter,
    InMemoryAdapter,
    S3Service,
    S3Factory,
    {
      provide: AdapterFactory,
      useFactory: (...args) => {
        return new AdapterFactory(args[0], args.slice(1, args.length));
      },
      inject: [AppConfigService, LocalAdapter, S3Adapter, InMemoryAdapter],
    },
  ],
  exports: [FilesystemService],
})
export class FilesystemModule {}
