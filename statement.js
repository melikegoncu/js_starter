console.log("Statements Start");

console.log(1==1);
console.log(1==="1");// tip ve değer kontrolü
console.log(1!=1);
console.log(1>=1);

if(1!=1)
{
    console.log("if içerisi");
}
else if (1==1) {
    console.log("else if içerisi");
}
else{
    console.log("else içerisi");
}

let dolarKurDun = 18.74;
let dolarKurBugun = 18.8;

if (dolarKurDun<dolarKurBugun) {
    console.log("Dolar arttı");
}
else if(dolarKurDun==dolarKurBugun)
{
    console.log("Dolar sabit");
}
else{
    console.log("Dolar azaldı");
}

//one line if statement

dolarKurBugun>= dolarKurDun ? console.log("Dolar yükseldi.") : console.log("Dolar azaldı");

let toplamBakiye=100;
let secilenKur="aBD";

switch (secilenKur) {
    case "USD":
        toplamBakiye*=17;
        break;

    case "EUR":
        toplamBakiye*=20;
        break;

    case "GBP":
        toplamBakiye*=12;
        break;
    default:
        console.log("Bilinmiyor.");
        break;
}

console.log(toplamBakiye);

//let krediler =["İhtiyaç","Taşıt","Konut"];

let secilenKredi="İhtiyaç";
let KrediTutari=45000;
switch (secilenKredi) {
    case "İhtiyaç":
        KrediTutari*=1.5;
        break;

    case "Taşıt":
        KrediTutari*=2;
        break;

    case "Konut":
        KrediTutari*=2.5;
        break;
    default:
        console.error("Bilinmiyor.");
        break;
}
console.log(KrediTutari);

let sayi=10;
if (sayi%2==0) {
    console.log("Çift.");
} else {
    console.log("Tek.");
}

