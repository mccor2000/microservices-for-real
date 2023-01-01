import { ConsoleLogger, Injectable } from '@nestjs/common';

@Injectable()
export class PinoLogger extends ConsoleLogger {
  private readonly logger: any;

  constructor(context: string, logger: any) {
    super(context);
    this.logger = logger;
  }

  verbose(message: any, context?: string, ...args: any[]) {
    if (context) {
      // this.logger.trace({ [this.context]: context}, )
    }
  }
}
