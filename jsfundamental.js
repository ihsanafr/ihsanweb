// lets first code

// Variable
// deklarasi sebuah variable di js ada 4 cara

// 1.automatic
// 2. var
// 3. list
// 4. const

//automatic variable
//  x = 1;
//  y = 2;

//  z = x+y;
//  console.log(z);

//  // variable var
//  var a = 20
//  var b = 30

//  var a = 50
//  console.log(a);

//  //variable late
//  let a = 30;
//  let b = 40;

//  a = 45
//  console.log(a)

//aritmatic
//perjumlahan(aditional) -> +
//pengurangan(substracton) -> -
//Perkalian(multimplication) -> *
//pembagian(division) -> /
//modulus(sisa hasil bagi) -> %

//increment(urutan dari kecil ke besar) -> ++
//Decrement(urutan dari besar ke kecil) -> --

//comparison Operator
//equal to(sama dengan) -> ==
// equal value and type(nilai dan tipe sama) -> ===
//not equal (tidak sama dengan)
//not equal value and type(tidak sama nilai dan tipe) -> !==
//greather than (lebih besar) -> >
//less than (lebih kecil) -> <
//greather than or equal (lebih besar atau sama dengan) -> >=
//less than or equal(lebih kecil atau sama dengan) -> <=
//ternary (percabangan dari if atau shorthand if) -> ?

//tipe data di javascript
// 1. string => tipe data yang memuat karakter contoh : '' atau "masukan huruf atau angka"

//var a = "tipe data string"

// 2. number => tipe data yang memuat angka 
//   var a = 30 + 20

// 3.  bigint => tipe data bilangan bulat

// 4. boolean => kebenaran
//  true or false

//  let c = true
//  let d = false

// //  tipe ata object
// // tipe data object merupakan kumpulan value yang memiliki property dan value(data)]
// var mobil = {nama:"supra", merk :"toyota", warna : "merah"}

// // tipe data array
// // tipe data array merupakan kumpulan data yang tidak memiliki property tapi diurutkan berdasarkan index
// var motor :{"mio R3", "beat","vario","Nmax"}
// console.log(motor)

// //function
// function saya() {
//     var me = "ihsan"
// }
// console.log("siapakah nama saya"+saya())

// function saya(a) {
//     var nama = a
//     return nama;
// }
// saya();
// console.log(saya('ihsan ahmad'));
// console.log(saya('ahmad'));

// function keliling(p,l) {
//     var kel =(p+l)*2 ;
//     return kel;
// }
// var hasil = keliling(30,40)
// var hasil = keliling(10,50)
// console.log(hasil)

// function luas(p) {
//     var ls =(p*p) ;
//     return ls;
// }
// var hsl =luas(5)
// var hs2 =luas(10)
// var hasil = (hsl+hs2)
// console.log(hasil)

// function nama() {
//     alert("namaku ihsan")
// }
// document.getElementById("btn-saya").addEventListener("click",nama,);

// function
// dibagi menjadi 2 jenis
// function bult in bawaan dari js
// 1. alert(), date (), confirm(), prompt(), 
// 2. user define function => fungsi yang kita buat sendiri

// contoh function :

// function mobil(warna,jenis) {
//     var a = warna;
//     var b = jenis;
//     return (a,b);
// }
// var ouput = mobil('merah','sport')
// console.log(ouput)

// function motor(jenis, cc) {
//     var a = prompt('masukan jenis kendaraan:');
//     var b = prompt('masukan jenis cc:');
//     return ['jenis :' +a, 'cc :' +b]
// }
// var hasil = motor()
// alert(hasil);

// percabangan (if, else, else if, switch, case, etc)

// vallian ingin mengikuti sebuah seminar, yang mana seminarnya tersebut memiliki aturan:
// jika umurnya kurang dari 13 tahun, maka harus masuk ke ruangan A
// jika umurnya lebih dari 13 tahun, dan kurang dari 17, maka harus masuk ke ruangan B
// jika umurnya lebih dari 17 tahun, maka harus masuk ke ruangan c

// var vallian = 97;

// if(vallian < 13 )(
//     console.log('masuk ruangan A')
// )
// else if(vallian > 13 && vallian < 17)(
//     console.log('masuk ruangan B')
// )
// else(
//     console.log("masuk ruang c")
// )

// // disebuah kursus ada jadwal materi, senin : pemrograman web, selasa : android, rabu : python, kamis - minggu : libur
// var hari = prompt('masukan nama hari');
// // kondisi

// if(hari == 'senin')(
//     alert('materi hari ini adalah pemrograman')
// )
// else if(hari == 'selasa')(
//     alert('materi hari ini adalah android')
// )
// else if(hari == 'rabu')(
//     alert('materi hari ini adalah python')
// )
// else if(hari == 'kamis'||hari == 'jumat'|| hari =='sabtu'||hari =='ahad')(
//     alert('course hari ini libur')
// )
// else(
//     alert('masukan input yang benar')
// )

// // menentukan ganjil genap
// var angka = prompt('masukan angka')

// if(angka % 2 === 0)(
//     alert('genap')
// )
// else (
//     alert('ganjil')
// )


// challange jadwal pelajaran
// var hari = prompt('masukan nama hari');
// // kondisi

// if(hari == 'senin')(
//     alert('diniyah,it,english')
// )
// else if(hari == 'selasa')(
//     alert('diniyah,it,english,it')
// )
// else if(hari == 'rabu')(
//     alert('diniyah,it,english,it')
// )
// else if(hari == 'kamis')(
//     alert('it,diniyah,english')
// )
// else if(hari == 'jumat')(
//     alert('english,diniyah,it,wl,it')
// )
// else if(haribelajar == 'sabtu')(
//     alert('MTK,fisika,Bindo')
// )
// else if(haribelajar == 'ahad')(
//     alert('hari ini libur')
// )
// else(
//     alert('masukan input yang benar')
// )

// percabangan menggunakan switch dan case

// var hari = prompt('masukan hari yang akan anda tanyakan :');

// switch (hari) {
//     case 'senin':
//         alert("hari ini belajar web")
//     break;
//     case 'selasa':
//         alert("hari ini belajar androwet")
//     break;
//     default:
//         alert('salah soal')
// }

// study case
// buat sebuah algoritma penilaian dengan huruf dan angka

// nilai dibawah 60 perdeikat D
// nilai antara 60 sampai 75 = C
//  nilai 75 - 85 = B
// nilai 85++ = A 
// lebih dari 100 nilai yang anda masukan salah


// var nama = prompt('siapakah guru yang paling ganteng?');
// var jawaban = (nama.toLowerCase() == 'kak fahmi') ? 'benar': 'salah';
// alert() 

// nested branches
// var username = prompt('Masukan username anda :');
// var password = prompt('Masukan password anda :');

// if (username == 'ihsan24') {
//     if (password == '12345') {
//         alert('anda berhasil login');
//     } else(
//         alert('maaf password anda salah')
//     )
// } 
// else(
//     alert('maaf username tidak ditemukan')
// )



// var nilai = prompt('masukan nilai yang akan anda cek :');

// switch (true) {
//     case nilai <= 60:
//         alert("Nilai D")
//     break;
//     case nilai <= 75:
//         alert("Nilai C")
//     break;
//     case nilai <= 85:
//         alert("Nilai B")
//     break;
//     case nilai <= 100:
//         alert("Nilai A")
//     break;
//     default:
//         alert('Nilai yang anda masukan salah')
// }


// 1. ikan bernafas dengan : a.insang b.paru paru c.kulit d.trakea
// var question = prompt('Ikan bernafas dengan');
// if (question == 'john wilkes booth' || question == 'John Booth' || question == 'John Wilkes Booth') {
//     alert("That's Right!");
// } else {
//     alert('Sorry, that\'s not right.');
// }

// looping
// dibagi menjadi 2, countable, uncountable

// countable (for,foreach,repeat)

// for(let i = 1; i <= 20; i++){
//     document.write(` ${i}`);
// }

// foreach = untuk mengulang data

// var mobil = ["toyota","honda","ferrari","volvo","zhong tong","suzuki"];

// mobil.forEach((car) => {
//     console.log(`mobil ini mereknya adalah ${car}`)
// });

// var motor =["mio","beat","vixion","nmax"];

// motor.forEach((bike) => {
//     console.log(`motor ini mereknya ${bike}`);
// });

// var nama =[
//     "Abdurahman Ilyasa",
//     "Ammar Zahran Syafiq",
//     "Andy Taft",
//     "Arkan Naufal Ardhani",
//     "Azka Azkia Baiquni",
//     "Azka Savir Fauzie",
//     "Faris Dzu Khairil Muna",
//     "Firja Abiyu Alhilali",
//     "Haikal Al Fatih",
//     "Ihsan Ahmad Fakhriansyah",
//     "Mawaldy Adha Majid",
//     "Muhammad Al Fathi Ahyan",
//     "Muhammad Fahri Al Mauludy",
//     "Muhammad Imamussajidin",
//     "Muhammad Keenan Abigail",
//     "Naufal Azriel Al Azizy",
//     "Raihan Ksatria",
//     "Reveeno Dhirgham Putra",
//     "Rizqi Irkham Maulana",
// ];
// for(i = 1; i<= nama.length; )

// nama.forEach(rows => {
//     nomor = i++
//     document.write("<h3>" + nomor+ ',' + rows + "</h3>");
// });


// uncountable (while,do/while,)


var repeat = false;
var hitung = 0;

while (repeat) {
    hitung++
    repeat = confirm("apakah kamu akan mengulang ini");
}
alert(`anda sudah mengulang sebanyak ${hitung}`)
