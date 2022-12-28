"use strict";
/* eslint-disable */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deliveryStatusToJSON = exports.deliveryStatusFromJSON = exports.DeliveryStatus = exports.orderStatusToJSON = exports.orderStatusFromJSON = exports.OrderStatus = exports.userRoleToJSON = exports.userRoleFromJSON = exports.UserRole = exports.protobufPackage = void 0;
exports.protobufPackage = "common";
var UserRole;
(function (UserRole) {
    UserRole[UserRole["CUSTOMER"] = 0] = "CUSTOMER";
    UserRole[UserRole["MERCHANT"] = 1] = "MERCHANT";
    UserRole[UserRole["SHIPPER"] = 2] = "SHIPPER";
    UserRole[UserRole["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
function userRoleFromJSON(object) {
    switch (object) {
        case 0:
        case "CUSTOMER":
            return UserRole.CUSTOMER;
        case 1:
        case "MERCHANT":
            return UserRole.MERCHANT;
        case 2:
        case "SHIPPER":
            return UserRole.SHIPPER;
        case -1:
        case "UNRECOGNIZED":
        default:
            return UserRole.UNRECOGNIZED;
    }
}
exports.userRoleFromJSON = userRoleFromJSON;
function userRoleToJSON(object) {
    switch (object) {
        case UserRole.CUSTOMER:
            return "CUSTOMER";
        case UserRole.MERCHANT:
            return "MERCHANT";
        case UserRole.SHIPPER:
            return "SHIPPER";
        case UserRole.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.userRoleToJSON = userRoleToJSON;
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PLACED"] = 0] = "PLACED";
    OrderStatus[OrderStatus["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    OrderStatus[OrderStatus["COMPLETED"] = 2] = "COMPLETED";
    OrderStatus[OrderStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(OrderStatus = exports.OrderStatus || (exports.OrderStatus = {}));
function orderStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "PLACED":
            return OrderStatus.PLACED;
        case 1:
        case "IN_PROGRESS":
            return OrderStatus.IN_PROGRESS;
        case 2:
        case "COMPLETED":
            return OrderStatus.COMPLETED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return OrderStatus.UNRECOGNIZED;
    }
}
exports.orderStatusFromJSON = orderStatusFromJSON;
function orderStatusToJSON(object) {
    switch (object) {
        case OrderStatus.PLACED:
            return "PLACED";
        case OrderStatus.IN_PROGRESS:
            return "IN_PROGRESS";
        case OrderStatus.COMPLETED:
            return "COMPLETED";
        case OrderStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.orderStatusToJSON = orderStatusToJSON;
var DeliveryStatus;
(function (DeliveryStatus) {
    DeliveryStatus[DeliveryStatus["ASSIGNED"] = 0] = "ASSIGNED";
    DeliveryStatus[DeliveryStatus["PICKED_UP"] = 1] = "PICKED_UP";
    DeliveryStatus[DeliveryStatus["DELIVERED"] = 2] = "DELIVERED";
    DeliveryStatus[DeliveryStatus["CANCELLED"] = 3] = "CANCELLED";
    DeliveryStatus[DeliveryStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DeliveryStatus = exports.DeliveryStatus || (exports.DeliveryStatus = {}));
function deliveryStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "ASSIGNED":
            return DeliveryStatus.ASSIGNED;
        case 1:
        case "PICKED_UP":
            return DeliveryStatus.PICKED_UP;
        case 2:
        case "DELIVERED":
            return DeliveryStatus.DELIVERED;
        case 3:
        case "CANCELLED":
            return DeliveryStatus.CANCELLED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DeliveryStatus.UNRECOGNIZED;
    }
}
exports.deliveryStatusFromJSON = deliveryStatusFromJSON;
function deliveryStatusToJSON(object) {
    switch (object) {
        case DeliveryStatus.ASSIGNED:
            return "ASSIGNED";
        case DeliveryStatus.PICKED_UP:
            return "PICKED_UP";
        case DeliveryStatus.DELIVERED:
            return "DELIVERED";
        case DeliveryStatus.CANCELLED:
            return "CANCELLED";
        case DeliveryStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
exports.deliveryStatusToJSON = deliveryStatusToJSON;
