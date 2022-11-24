//contoh destructuring array
const jenisParfum = ["Soft", "Paris Hilton", "Jo Malone", "Bacarat", "Silver"];
//sebelum destructuring
const parfum1 = jenisParfum[0];
const parfum2 = jenisParfum[1];
const parfum3 = jenisParfum[2];
console.log(parfum1, parfum2, parfum3);

//sesudah destructuring
const [pertama, kedua, ketiga, ...seterusnya] = jenisParfum;
console.log(pertama, kedua, ketiga, seterusnya);

//contoh destructuring object
const smartphone = {
  brand: "Huawei",
  type: "Nova 5t",
  processor: "Kirin 980",
  harga: 4000000,
  toko: {
    namaToko: "Hana Smartphone",
    lokasiToko: "Jakarta",
  },
};

//sebelum destructuring
const brandHp = smartphone.brand;
const typeHp = smartphone.type;
const tokoHp = smartphone.toko.namaToko;
console.log(brandHp, typeHp, tokoHp);

//sesudah destructuring
const {
  brand: brandAlias, //alias
  type = "type huwawei baru",
  toko: { namaToko },
  ...dataLainnya
} = smartphone;
console.log(brandAlias, type, namaToko, dataLainnya);
