/* eslint-disable */

export const protobufPackage = "common";

export enum UserRole {
  CUSTOMER = 0,
  MERCHANT = 1,
  SHIPPER = 2,
  UNRECOGNIZED = -1,
}

export function userRoleFromJSON(object: any): UserRole {
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

export function userRoleToJSON(object: UserRole): string {
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

export enum OrderStatus {
  PLACED = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2,
  UNRECOGNIZED = -1,
}

export function orderStatusFromJSON(object: any): OrderStatus {
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

export function orderStatusToJSON(object: OrderStatus): string {
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

export enum DeliveryStatus {
  ASSIGNED = 0,
  PICKED_UP = 1,
  DELIVERED = 2,
  CANCELLED = 3,
  UNRECOGNIZED = -1,
}

export function deliveryStatusFromJSON(object: any): DeliveryStatus {
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

export function deliveryStatusToJSON(object: DeliveryStatus): string {
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
