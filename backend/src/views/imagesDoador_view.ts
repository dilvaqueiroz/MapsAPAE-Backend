import Image from '../models/ImageDoador';
const porta = process.env.PORT || 'http://localhost:3333'
export default{
    render(image: Image){
        return{
            id:image.id,
            url:`${porta}/uploads/${image.path}`,
        };
    },

    renderMany(images: Image[]){
        return images.map(image=> this.render(image));
    }
};