//scroll
let scroll_up = document.querySelector(".scroll");
window.onscroll = () => {
   scroll_up.addEventListener("click", fun1);
   if (document.documentElement.scrollTop > 200) scroll_up.style.display = "block";
   else scroll_up.style.display = "none";
}
function fun1() {
   window.scroll({
      top: 0,
      behavior: 'smooth'
   })
}

//slider
let span = document.querySelectorAll(".slide");
let div = document.querySelectorAll(".div");
let counter = 0;
span[1].onclick = () => {
   counter++;
   for (let i = 0; i < div.length; i++) {
      if (counter == 0) { div[i].style.left = "0px" }
      if (counter == 1) { div[i].style.left = "-1005px" }
      if (counter == 2) { div[i].style.left = "-2008px" }
      if (counter > 2) {
         counter = 2;
      }
   }
}
span[0].onclick = () => {
   counter--;
   for (let i = 0; i < div.length; i++) {
      if (counter == 0) { div[i].style.left = "0px" }
      if (counter == 1) { div[i].style.left = "-1005px" }
      if (counter == 2) { div[i].style.left = "-2008px" }
      if (counter < 0) { counter = 0 }
   }
}



//tabs
let tab = document.querySelectorAll(".tab");
let btn = document.querySelectorAll("#btn");
for (let i = 0; i < btn.length; i++) {
   btn[i].addEventListener("click", () => {
      for (let i = 0; i < btn.length; i++) {
         btn[i].classList.remove("active");
         tab[i].classList.remove("active");
      }
      btn[i].classList.add("active");
      tab[i].classList.add("active");
   })
}



//filter
let ul = document.querySelector(".uls");
let all = document.querySelectorAll(".all1");
ul.addEventListener("click", (e) => {
   let tar = e.target.className;
   switch (tar) {
      case 'jacket':
         for (let i = 0; i < all.length; i++) {
            if (all[i].classList.contains("jacket")) { all[i].style.display = "block"; }
            else {
               all[i].style.display = "none"
            }
         }
         break;
      case 'Shorts':
         for (let i = 0; i < all.length; i++) {
            if (all[i].classList.contains("Shorts")) { all[i].style.display = "block" }
            else {
               all[i].style.display = "none"
            }
         }

         break;
      case 'all':
         for (let i = 0; i < all.length; i++) {

            { all[i].style.display = "block" }

         }

         break;
      case 'T-shirts':
         for (let i = 0; i < all.length; i++) {
            if (all[i].classList.contains("T-shirts")) { all[i].style.display = "block" }
            else {
               all[i].style.display = "none"
            }
         }
   }
});

//tabs
let lis = document.querySelectorAll(".uls>li");
for (let i = 0; i < lis.length; i++) {
   lis[i].addEventListener("click", () => {

      for (let i = 0; i < lis.length; i++) {
         lis[i].style.background = " #17696A";
      }
      lis[i].style.background = "black"

   })

}
//login
document.getElementById("login").onclick = () => {
   document.querySelector(".fixed").style.height = "100%";
}
document.querySelector(".closebtn").onclick = () => {
   document.querySelector(".fixed").style.height = "0%";
}


let basket_block = document.querySelector(".basket_block")
// sucseful buy
let buy = document.querySelectorAll(".buy");

for (let i = 0; i < buy.length; i++) {
   buy[i].addEventListener("click", () => {
      let ask = confirm("Are you ready?");
      let mess = document.querySelector(".message");
      basket_block.innerHTML+=<p>f</p>
      if (ask) {
         mess.innerHTML = "<p class='mess'> Покупка успешно выполнена</p>"
         setTimeout(() => { mess.innerHTML = "" }, 2000);
      }
   })
}


//form information
document.querySelector(".buttons").onclick = () => {
   let name = document.getElementById("name"),
      surname = document.getElementById("surname"),
      password = document.getElementById("password");
   console.log(name.value, surname.value, password.value);
}



//Кнопака-меню
var count = 0;
document.querySelector(".hide-buton").addEventListener("click",

   () => {
      let hide = document.querySelector(".hide-block");
      let button = document.querySelector(".hide-buton")
      count++;
      if (count % 2 == 0) {
         button.innerHTML = "≡";
         hide.style.display = "none"
      }
      else {
         hide.style.display = "block";
         button.innerHTML = "X";
      }
   }
)
document.getElementById("login1").onclick = () => {
   document.querySelector(".fixed").style.height = "100%";
}
document.querySelector(".closebtn").onclick = () => {
   document.querySelector(".fixed").style.height = "0%";
}


// function-constructor
function Info(name, surname, password) {
   this.name = name;
   this.surname = surname;
   this.password = password;
}
let info = new Info("Андрей", "Коренчук", 835435323);
console.log(info);



//spread
let array_first = ["JS", "HTML", "CSS"];
let array_second = ["React", "Node"];
let array_third = [...array_first, ...array_second];
console.log(array_third);



//rest
function rest(...arr_rest) {
   arr_rest.forEach((item) => {
      console.log(item);
   })
}
rest(3, 6, 8, 7);



//for of
let arrays = ["let", "Var", "const"];
for (item of arrays) {
   console.log(item);
}



//for in
var obj = {
   name: "Andrey",
   surname: "Korenchuck",
   years: 18
};

for (var prop in obj) {
   console.log(` ${obj[prop]}`);
}


//функция с параметрами
function miliatry(name, years) {
   if (years <= 18) {
      console.log(`${name} не идет в армию`);
   }
   else if (years > 30) {
      console.log(`${name} не идет в армию`);
   }
   else {
      console.log(`${name}  идет в армию`);
   }
}
miliatry("Андрей", 18);
miliatry("Дмитрий", 62);
miliatry("Павел", 20);

//замыкание
function counter_1() {
   let count = 0;
   return () => {
      count++;
      console.log(count)
   }
}
let count1 = counter_1();
count1();
count1();
   document.querySelector(".roti").addEventListener("click", () => {

     
      window.scroll({
         top: 1000,
         behavior: 'smooth'
      })
   
   })
let counters =0;
let basket = document.querySelector(".basket");

basket.onclick=()=>{
  
  
   counters++;
   if (counters % 2 == 0) {
      basket_block.style.height = "0px";
   }
   else {
      basket_block.style.height = "200px";
   }
}
  






