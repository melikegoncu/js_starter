let urunler =[
    {fiyat:100, ad:"Urun 1", discount :true, rate :15},
    {fiyat:150, ad:"Urun 2", discount :false, rate :0},
    {fiyat:200, ad:"Urun 3", discount :true, rate :2.5},
];

//filter 
//array.prototype.filter

let filtrelenmisUrunler = urunler.filter(urun=> {
    return urun.fiyat > 160;
}
);

console.log(filtrelenmisUrunler);

let filtremap =urunler.map((urun)=>{
    return{
        fiyat : 
        urun.discount===true 
            ? urun.fiyat - urun.fiyat*(urun.rate/100)
            : urun.fiyat,
        ad: urun.ad,
        indirimTutari: 
        urun.discount===true 
            ? urun.fiyat*(urun.rate/100)
            : urun.rate,
    }
})

console.log(filtremap);

let cart = [
    {id:1, productName:"product 1",quantity:3, unitPrice:3000},
    {id:2, productName:"product 2",quantity:2, unitPrice:1000},
    {id:3, productName:"product 3",quantity:1, unitPrice:500},
];

let totalPrice=0;
let Count=0;
let yeniCart= cart.forEach(urun =>{
    totalPrice+=(urun.quantity*urun.unitPrice)
    Count+=urun.quantity
});

console.log("totalPrice: ",totalPrice," , totalProductCount:",Count);