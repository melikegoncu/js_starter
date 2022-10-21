let products = [
    { unitPrice:100, productName:"Urun 1", discount:true, rate:15},
    { unitPrice:150, productName:"Urun 2", discount:false, rate:0},
    { unitPrice:200, productName:"Urun 2", discount:true, rate:2.5},
]
let searchText = "Urun"

let product = products.filter(p=>p.productName == searchText);

// console.log('Arama sounucu bulunan urun : ' ${product.length});

function getProductByName(productName){
    console.log(productName);
    let productsResult = products.filter(p=>p.productName.includes(productName));
    console.log(`arama sonucunda ${productsResult.length} adet ürün bulundu`)
}

//constant = değişken tanımlama ama değişken değeri değişmez
//ARROW FUNCTİON
const getProductByUnitPrice = (unitPrice) => {
    console.log("calıstı");
};

getProductByUnitPrice();