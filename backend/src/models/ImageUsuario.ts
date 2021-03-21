import {Entity, Column, PrimaryGeneratedColumn , ManyToOne, JoinColumn} from 'typeorm';
import Usuario from './Usuario';

@Entity('imagesUsuarios')
export default class ImageUsuario{
    @PrimaryGeneratedColumn('increment')
    id:number;

    @Column()
    path:string;

    @ManyToOne(()=> Usuario, usuario => usuario.images,{
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    })
    @JoinColumn({name:'usuario_id'})
    usuario: Usuario;

}