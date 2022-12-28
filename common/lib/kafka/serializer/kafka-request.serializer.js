"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaRequestSerializer = void 0;
var shared_utils_1 = require("@nestjs/common/utils/shared.utils");
var KafkaRequestSerializer = /** @class */ (function () {
    function KafkaRequestSerializer() {
    }
    KafkaRequestSerializer.prototype.serialize = function (value) {
        return value;
    };
    KafkaRequestSerializer.prototype.encode = function (value) {
        var isObjectOrArray = !(0, shared_utils_1.isNil)(value) && !(0, shared_utils_1.isString)(value) && !Buffer.isBuffer(value);
        if (isObjectOrArray) {
            return (0, shared_utils_1.isPlainObject)(value) || Array.isArray(value)
                ? JSON.stringify(value)
                : value.toString();
        }
        else if ((0, shared_utils_1.isUndefined)(value)) {
            return null;
        }
        return value;
    };
    return KafkaRequestSerializer;
}());
exports.KafkaRequestSerializer = KafkaRequestSerializer;
