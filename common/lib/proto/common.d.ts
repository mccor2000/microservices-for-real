export declare const protobufPackage = "common";
export declare enum UserRole {
    CUSTOMER = 0,
    MERCHANT = 1,
    SHIPPER = 2,
    UNRECOGNIZED = -1
}
export declare function userRoleFromJSON(object: any): UserRole;
export declare function userRoleToJSON(object: UserRole): string;
export declare enum OrderStatus {
    PLACED = 0,
    IN_PROGRESS = 1,
    COMPLETED = 2,
    UNRECOGNIZED = -1
}
export declare function orderStatusFromJSON(object: any): OrderStatus;
export declare function orderStatusToJSON(object: OrderStatus): string;
export declare enum DeliveryStatus {
    ASSIGNED = 0,
    PICKED_UP = 1,
    DELIVERED = 2,
    CANCELLED = 3,
    UNRECOGNIZED = -1
}
export declare function deliveryStatusFromJSON(object: any): DeliveryStatus;
export declare function deliveryStatusToJSON(object: DeliveryStatus): string;
