"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaModule = void 0;
var common_1 = require("@nestjs/common");
var kafka_service_1 = require("./kafka.service");
var KafkaModule = /** @class */ (function () {
    function KafkaModule() {
    }
    KafkaModule_1 = KafkaModule;
    KafkaModule.register = function (options) {
        var clients = (options || []).map(function (item) { return ({
            provide: item.name,
            useValue: new kafka_service_1.KafkaService(item.options),
        }); });
        return {
            module: KafkaModule_1,
            providers: clients,
            exports: clients,
        };
    };
    var KafkaModule_1;
    KafkaModule = KafkaModule_1 = __decorate([
        (0, common_1.Global)(),
        (0, common_1.Module)({})
    ], KafkaModule);
    return KafkaModule;
}());
exports.KafkaModule = KafkaModule;
