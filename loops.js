let krediler =["İhtiyaç","Taşıt","Konut"];

for(let i=0; i<krediler.length; i++)
{
    console.log(krediler[i]);
}


krediler.forEach(kredi =>{
    console.log("elemanlar", kredi);
})
console.log("");


let urunler =[
    {fiyat:100, ad:"Urun 1", discount :true, rate :15},
    {fiyat:150, ad:"Urun 2", discount :false, rate :0},
    {fiyat:200, ad:"Urun 3", discount :true, rate :2.5},
]

urunler.forEach(urun =>{
    console.log("elemanlar");
    urun.discount ? console.log(urun.fiyat-(urun.fiyat*urun.rate)/100): console.log(urun.fiyat);
})


urunler.forEach(urun =>{
    if(urun.fiyat>160) console.log(urun);
});//mapFilter