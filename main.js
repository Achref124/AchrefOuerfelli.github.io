var favs = Array.from(document.querySelectorAll('.fa-heart'));
var deletebt = Array.from(document.querySelectorAll('.fa-trash-can'))
var cards = Array.from(document.querySelectorAll('.card'))
var plus = Array.from(document.querySelectorAll('.fa-square-plus'))
var minus = Array.from(document.querySelectorAll('.fa-square-minus'))

for (let fav of favs) {

    fav.addEventListener("click", function(){
    
    if (fav.style.color!='red'){
        fav.style.color='red'}
    else {(fav.style.color='black')} })}


for (let i in deletebt)(
    deletebt[i].addEventListener("click", function(){
        cards[i].remove()
    })
)
 
for(let p of plus){
    p.addEventListener("click", function(){
        p.nextElementSibling.innerHTML++
        total()
    })
    
}
for(let m of minus){
    m.addEventListener("click", function(){
        if( m.previousElementSibling.innerHTML>0){
        m.previousElementSibling.innerHTML--}
        else{
            m.previousElementSibling.innerHTML=0
        }
        total()
    })
}
function total() {
    let qte = Array.from(document.querySelectorAll(".qt"))
    let price = Array.from(document.querySelectorAll(".prix-unitaire"))
    let t = 0 
    
     for(let i = 0; i < price.length; i++){
        t = t + price[i].innerHTML * qte[i].innerHTML;
    }
    document.getElementById("totpri").innerHTML = t ;
}

