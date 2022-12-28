"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var KafkaModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaModule = void 0;
const common_1 = require("@nestjs/common");
const kafka_service_1 = require("./kafka.service");
let KafkaModule = KafkaModule_1 = class KafkaModule {
    static register(options) {
        const clients = (options || []).map((item) => ({
            provide: item.name,
            useValue: new kafka_service_1.KafkaService(item.options),
        }));
        return {
            module: KafkaModule_1,
            providers: clients,
            exports: clients,
        };
    }
};
KafkaModule = KafkaModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], KafkaModule);
exports.KafkaModule = KafkaModule;
