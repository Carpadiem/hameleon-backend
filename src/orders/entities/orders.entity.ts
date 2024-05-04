import { Entity, Column, PrimaryColumn } from 'typeorm'


@Entity()
export class Orders {
    @PrimaryColumn()
    id: number

    @Column()
    phone_number: string

    @Column()
    delivery_point: string
    
    @Column()
    order_from_cart: string
    
    @Column()
    status: string
}