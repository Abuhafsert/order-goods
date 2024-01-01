let user = [ 
    "yeypqr690",
    "yeypqr691",
    "yeypqr692",
    "yeypqr694",
    "yeypqr695",
    "yeypqr696",
    "yeypqr697",
    "yeypqr698",
    "yeypqr699",
]


let balance = 50000
let price = 1300
document.querySelector(".price").innerHTML = price;
document.getElementById("listnair").innerHTML = balance;


let mainOrder = document.querySelector(".yayana")


let buy = document.querySelector('.orderContainer button')



let texts = ""

let links = document.querySelector('.yayana');


let amounts = document.querySelector(".amount");
let current = 0;

let containt = document.querySelector(".containt");



function buttonClick() {
    
}


console.log(amounts.value)

let change = () => {
    
        let prices = price
        if(amounts.value >= user.length){
            amounts.value = user.length;
    
        } 
        if(amounts.value == 1) {
            document.querySelector(".price").innerHTML = prices;
            console.log(document.querySelector(".price"))
            
        } else if(amounts.value.includes('.')){
            amounts.value = Math.floor(amounts.value)
            prices = prices * amounts.value
            console.log(prices)
            document.querySelector(".price").innerHTML = prices
        } else if(isNaN(amounts.value)){
            amounts.value = 1
            prices = prices * amounts.value;
            document.querySelector(".price").innerHTML = prices;
        }
         else {
            prices = prices * amounts.value;
            document.querySelector(".price").innerHTML = prices;
         }
    

 }




function purchase() {
    balances = balance
    console.log(balances )
    if(document.querySelector(".price").innerHTML >= balance){
        links.innerHTML = 'not enough fund in balance'
    } else if(current >= user.length){
        user.splice(0, user.length)
        buy.removeAttribute("onclick")
        
    } else if(amounts.value === ""){
        links.innerHTML = 'minimum order is 1'
    } else if(isNaN(amounts.value)){
        links.innerHTML = 'minimum order is 1'
    } else if(amounts.value < 1) {
        links.innerHTML = 'minimum order is 1'
    } else if(amounts.value.includes(".")){
        links.innerHTML = 'please enter a number without .'
    }
    else {
        balance = balance - document.querySelector(".price").innerHTML;
        document.getElementById("listnair").innerHTML = balance;
        let selectt = user.slice(current,amounts.value)
        links.innerHTML += selectt.join("<br>") + "<br>";
        user.splice(0, amounts.value)

    }
    amounts.value = 1
    console.log('clicked')
}


// let sum = () => {
//     buy.addEventListener('click', () => {
//         if(document.querySelector(".price").innerHTML >= balance){
//             links.innerHTML = 'not enough fund in balance'
//         } else if(current === user.length){
//             user.splice(0, user.length)
//             buy.removeAttribute("onclick")
//             links.innerHTML = 'empty'
            
//         } else if(amounts.value === ""){
//             links.innerHTML = 'minimum order is 1'
//         } else if(isNaN(amounts.value)){
//             links.innerHTML = 'minimum order is 1'
//         } else if(amounts.value < 1) {
//             links.innerHTML = 'minimum order is 1'
//         } else if(amounts.value.includes(".")){
//             links.innerHTML = 'please enter a number without .'
//         }
//         else {
//             balance = balance - document.querySelector(".price").innerHTML;
//             document.getElementById("listnair").innerHTML = balance;
//             let selectt = user.slice(current,amounts.value)
//             links.innerHTML += selectt.join("<br>") + "<br>";
//             user.splice(0, amounts.value)
    
//         }
//         amounts.value = 1
//         console.log('clicked')
//     })
// } 
