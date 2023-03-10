export interface IProducer {
    connect(): Promise<void>
    disconnect(): Promise<void>
    produce(message: any): Promise<any>
}

// export interface IProducerService {
//     produce(topic: string, message: any): Promise<void>
// }

export interface IConsumer {
    connect(): Promise<void>
    disconnect(): Promise<void>
    consume(onMessage: (msg: any) => Promise<void>): Promise<void>
}

// export interface IConsumerService {
//     consume({ topic: string, message: any): Promise<void>
// }

export interface ISerializer {}

export interface IDeserializer {}