export class House{
    constructor(data) {
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.levels = data.levels
        this.img = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.info = data.description
        this.id = data.id || null
        this.seller = data.seller || null
    }
}