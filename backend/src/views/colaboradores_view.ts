import Colaborador from '../models/Colaborador';
import imagesView from './imagesColaborador_view';

export default{
    render(colaborador: Colaborador){
        return{
            id:colaborador.id,
            name:colaborador.name,
            cep: colaborador.cep,
            street: colaborador.street,
            district: colaborador.district,
            number: colaborador.number,
	        latitude:colaborador.latitude,
	        longitude:colaborador.longitude,
	        about:colaborador.about,
	        opening_hours:colaborador.opening_hours,
            open_on_weekends:colaborador.open_on_weekends,
            images: imagesView.renderMany(colaborador.images)
        };
    },

    renderMany(colaboradores: Colaborador[]){
        return colaboradores.map(colaborador=> this.render(colaborador));
    }
};