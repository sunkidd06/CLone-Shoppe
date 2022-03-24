const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
// CHi do
var element = $$(".category-item");

element.forEach(function(item){
    item.onclick = function(){
        $(".category-item.category-item--active").classList.remove("category-item--active");
        this.classList.add("category-item--active");
        console.log(this);
    }
})
// Tiep theo chi do
var list_home_filters = $$(".home-filter__btn");
console.log(list_home_filters);
list_home_filters.forEach(function(btn,index){
    btn.onclick = function(){
        $(".home-filter__btn.btn__active").classList.remove("btn__active");
        this.classList.add("btn__active");
    }
})
// Action like
 let likeElement = $$(".home-product-item__like");
 console.log(likeElement);
 likeElement.forEach(function(like){
    like.onclick = function(){
        if(!this.classList.contains("home-product-item__like--liked")){
           this.classList.add("home-product-item__like--liked") 
        }
        else{
            this.classList.remove("home-product-item__like--liked") 
         }
        // console.log(this);
     }
    
    
 })
 


















