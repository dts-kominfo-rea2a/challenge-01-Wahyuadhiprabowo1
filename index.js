// TODO: Buatlah data dari kedua user di sini
// Tentukan tipe data dan struktur data yang menurut kalian tepat
// Kalian bisa membuat variabel lain untuk dimasukkan ke dalam atribut user agar lebih mudah dibaca

/** todo Monica property */
const arrColorMonica = ["Yellow", "Pink", "White", "Purple"];
const arrRestoMonica = ["Bento", "Sushi", "Pancake", "Eggy", "Tempura", "Bento", "Eggy", "Padang", "Tteok", "Sushi", "Sushi"]; 

let setColorMonica = new Set(arrColorMonica);
let setRestoMonica = new Set(arrRestoMonica);

const educationMonica = [
    { name: "SD 01", city: "Jakarta", graduate: "2016" },
    { name: "SMP 02", city: "Jakarta", graduate: "2019" },
    { name: "SMA 03", city: "Tangerang" }
];

/** todo Wendy Property */
const arrColorWendy = ["Blue", "Black", "Grey"];
const arrRestoWendy = ["Tempura", "Bento", "Sushi", "Pancake", "Padang", "Katsu", "Geprek", "Pancake", "Eggy"]; 

let setColorWendy = new Set(arrColorWendy);
let setRestoWendy = new Set(arrRestoWendy);


const educationWendy = [
    { name: "SD 02", city: "Jakarta", graduate: "2010" },
    { name: "SMP 03", city: "Bogor", graduate: "2013" },
    { name: "SMA 01", city: "Surabaya", graduate: "2016" },
    { name: "Universitas Maju", city: "Tangerang" }
];

/** todo data input */

//monica
const firstUser = {
    name: "Monica",
    gender: "Female",
    age: 17,
    email: "monica@dingdong.com",
    favoriteColor: [...setColorMonica],
    isHavePet: "Yes",
    education: educationMonica,
    favoriteRestaurant: [...setRestoMonica]
};

const secondUser = {
    name: "Wendy",
    gender: "Male",
    age: 23,
    email: "wendy@dingdong.com",
    favoriteColor: [...setColorWendy],
    isHavePet: "No",
    education: educationWendy,
    favoriteRestaurant: [...setRestoWendy]
};

// TODO: Masukkan hasil akhir dari kedua user di sini
const users = [];
users.push(firstUser);
users.push(secondUser);

// ! JANGAN MODIFIKASI LINE DI BAWAH
function main() {
    console.log(users.length || users.size);
    console.log(users);
}

main();

module.exports = {
    users
};