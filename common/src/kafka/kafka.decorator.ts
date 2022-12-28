export const SUBSCRIBER_MAP = new Map();
export const SUBSCRIBER_OBJECT_MAP = new Map();
export const SCHEMAS = new Map();

export function SubscribeTo(topic: string) {
  return (target: any, propertyKey: any, descriptor: any) => {
    const originalMethod = target[propertyKey];
    SUBSCRIBER_MAP.set(topic, originalMethod);
    return descriptor;
  };
}
