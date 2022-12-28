export interface IProducer {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    produce(message: any): Promise<any>;
}
export interface IConsumer {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    consume(onMessage: (msg: any) => Promise<void>): Promise<void>;
}
export interface ISerializer {
}
export interface IDeserializer {
}
