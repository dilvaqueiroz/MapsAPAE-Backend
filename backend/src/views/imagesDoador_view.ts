import Image from '../models/ImageDoador';
export default{
    render(image: Image){
        return{
            id:image.id,
            url:`${process.env.APP_URL}/uploads/${image.path}`,
        };
    },

    renderMany(images: Image[]){
        return images.map(image=> this.render(image));
    }
};