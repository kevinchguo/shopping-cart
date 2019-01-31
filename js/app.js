var data = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 799.99}];

// console.log(data[0].product)

function addItems(arr) {
    for (var i = 0; i < arr.length; i++){
        var product = document.createElement('div');
        product.className = 'products';
        product.innerHTML = arr[i].product;
        shoppingCart.appendChild(product);

        var description = document.createElement('p');
        description.className = 'description';
        description.innerHTML = arr[i].description;
        shoppingCart.appendChild(description);


        var price = document.createElement('div');
        price.className = 'price';
        price.innerHTML = '$' + arr[i].price;
        shoppingCart.appendChild(price);
    }
}
addItems(data);


var plusImg = document.getElementsByClassName('img')
for(var i = 0; i<description.length; i++){
    plusImg[i].addEventListener('click', displayDescription);
}

function displayDescription() {
    var showDescription = this.querySelectorAll('.description')[0];
    if(showDescription.style.display === 'block'){
        showDescription.style.display = 'none';
    }else{
        showDescription.style.display = 'none';
    } 
    

}

