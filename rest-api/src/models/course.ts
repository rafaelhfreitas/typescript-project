import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Lesson } from "./lesson";

@Entity({
    name: "COURSES"
})
export class Course {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    seqNo: Number;

    @Column()
    url: string;
    
    @Column()
    title: string;
    
    @Column()
    iconUrl: string;
    
    @Column()
    longDescription: string;
    
    @Column({nullable: true})
    category: string;

    @OneToMany(() => Lesson, lesson => lesson.course )
    lessons: Lesson[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    lastUpdatedAt: Date;

}