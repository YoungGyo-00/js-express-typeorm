import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        nullable: true,
    })
    firstName: string;

    @Column()
    lastName!: string;
}
