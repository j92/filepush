import { S3Client, S3ClientConfig } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';

@Injectable()
export class S3Factory {
  create(config: S3ClientConfig): S3Client {
    return new S3Client(config);
  }
}
