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
  brand,
  type,
  toko: { namaToko },
  ...dataLainnya
} = smartphone;
console.log(type, namaToko, dataLainnya);

//destructuring function
const dataImunisasi = {
  namaAnak: "Hana",
  namaOrtu: "Hendri",
  beratBadan: "7kg",
  alamat: {
    desa: "LB terantang",
    kec: "guntor",
  },
};

//sebelum desctructuring
// function printImunisasi(namaAnak, namaOrtu, beratBadan, alamat) {
//   console.log(namaAnak, namaOrtu, beratBadan, alamat);
// }
// printImunisasi(
//   dataImunisasi.namaOrtu,
//   dataImunisasi.namaAnak,
//   dataImunisasi.beratBadan,
//   dataImunisasi.alamat
// );

//sesudah destructuring
function printImunisasi({ namaAnak, namaOrtu, beratBadan, alamat }) {
  console.log(namaAnak, namaOrtu, beratBadan, alamat);
}
printImunisasi(dataImunisasi);

//alias dan default value
const dataMahasiswa = {
  nama: "Hendri Ramadhan,",
  prodi: "Teknik Informatika,",
  jenisKelamin: "Laki-laki,",
  umur: 25,
  alamat: {
    desa: "Lb Terentang,",
    kec: "Guntor",
    kab: "Kuansing",
  },
};

const {
  nama: namaLengkap, //alias
  prodi,
  fakultas = "Teknik,", //default value
  jenisKelamin,
  ...dst
} = dataMahasiswa;
console.log(namaLengkap, prodi, fakultas, jenisKelamin, dst);
