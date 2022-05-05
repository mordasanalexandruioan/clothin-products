// function createProduct(data) {

//     let card = document.createElement('div');
//     card.className = "card";

//     let pName = document.createElement('span');
//     pName.className = "prodName";
//     pName.textContent += data.brand;
//     pName.textContent += " ";
//     pName.textContent += data.type;
//     card.append(pName);

//     let avatar = document.createElement('img');
//     avatar.src = data.picture;
//     card.append(avatar);

//     let rating = document.createElement('span');
//     rating.className = "rating";
//     rating.textContent += data.rating;
//     card.append(rating);

//     let description = document.createElement('span');
//     description.className = "description";
//     description.textContent = data.description;
//     card.append(description);

//     let price = document.createElement('span');
//     price.className = "price";
//     price.textContent = data.price;
//     card.append(price);

//     let buy = document.createElement('button');
//     buy.className = "buy";
//     buy.textContent += "Save to ";
//     let icon = document.createElement('img');
//     icon.src = "./img/favorite_cart_64px.png";
//     icon.className = "icons";
//     buy.textContent += icon.src;
//     buy.append(icon);
//     card.append(buy);

//     return card;
// }

// function displayCards(element) {
//     let products = document.querySelector('.products');
//     products.innerHTML = "";

//     for (let i = 0; i < element; i++) products.append(createProduct(element[i]));
// }