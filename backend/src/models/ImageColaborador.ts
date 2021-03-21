import {Entity, Column, PrimaryGeneratedColumn , ManyToOne, JoinColumn} from 'typeorm';
import Colaborador from './Colaborador';

@Entity('imagesColaboradores')
export default class ImageColaborador{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    path:string;

    @ManyToOne(()=> Colaborador, colaborador => colaborador.images, {
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name:'colaborador_id'})
    colaborador: Colaborador;

}