export default class Product {
    constructor(id, brand, type, pic, rating, descrp, price) {
        this.id = id;
        this.brand = brand;
        this.type = type;
        this.pic = pic;
        this.rating = rating;
        this.descrp = descrp;
        this.price = price;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    toString() {
        let text = "";
        text += `brand: ${this.brand}` + "\n";
        text += `type: ${this.type}` + "\n";
        text += `price: ${this.price}` + "\n";

        return text;
    }

    toCard() {
        return `<div class="card">
        <span class="prodName">Nike Shoes</span>
        <img src="${this.pic}">
        <span class="rating">${this.rating}</span>
        <span class="description">${this.descrp}</span>
        <span class="price">${this.price}</span>
        <button class="buy">Save to <img src="img/favorite_cart_64px.png" class="icons"></button>
        </div>`
    }
}