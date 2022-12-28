import { DynamicModule } from '@nestjs/common';
import { KafkaModuleOption } from './interfaces';
export declare class KafkaModule {
    static register(options: KafkaModuleOption[]): DynamicModule;
}
