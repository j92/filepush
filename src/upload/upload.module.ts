import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { AppConfigModule } from '../app-config/app-config.module';
import { UploadController } from './upload.controller';
import { StaticConfigService } from './static-config.service';
import { FilesystemModule } from '../filesystem/filesystem.module';

@Module({
  imports: [AppConfigModule, FilesystemModule],
  controllers: [UploadController],
  providers: [UploadService, StaticConfigService],
  exports: [UploadService, StaticConfigService],
})
export class UploadModule {}
