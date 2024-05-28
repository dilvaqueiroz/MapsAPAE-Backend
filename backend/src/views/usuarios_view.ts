import Usuario from '../models/Usuario';
import imagesView from './imagesUsuario_view';

export default{
    render(usuario: Usuario){
        return{
            id:usuario.id,
            name:usuario.name,
            type_user: usuario.type_user,
            cep: usuario.cep,
            street: usuario.street,
            district: usuario.district,
            number: usuario.number,
	        latitude:usuario.latitude,
	        longitude:usuario.longitude,
	        about:usuario.about,
	        instructions:usuario.instructions,
	        opening_hours:usuario.opening_hours,
            open_on_weekends:usuario.open_on_weekends,
            images: imagesView.renderMany(usuario.images)
        };
    },

    renderMany(usuarios: Usuario[]){
        return usuarios.map(usuario=> this.render(usuario));
    }
};