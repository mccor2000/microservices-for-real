
export interface CreateOrderProps {
    items: string[]
    customerId: string
    merchantId: string
}

export class Order {
    id: string
    items: string[]

    customerId: string
    merchantId: string

    static Create(props: CreateOrderProps): Order {
        return {
            id: '1',
            ...props
        }
    }
    static Confirm(order: Order): Order {
        return new Order()

    }
    static Complete(order: Order): Order {
        return new Order()
    }
    static Cancel(order: Order): Order {
        return new Order()
    }
}