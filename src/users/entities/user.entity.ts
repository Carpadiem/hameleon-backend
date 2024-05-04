import { Entity, Column, PrimaryColumn } from 'typeorm'


@Entity()
export class User {
    @PrimaryColumn()
    id: number

    @Column()
    phone_number: string
    
    @Column()
    password: string

    @Column()
    firstname: string

    @Column()
    lastname: string

    @Column()
    delivery_address: string
}