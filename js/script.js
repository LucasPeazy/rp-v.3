
function deletedItem() {
    document.querySelector(".text-container").remove();
    document.querySelector(".footer").remove();
}


var popup = document.querySelector(".popup__overlay");
var btn = document.querySelector(".button");
var close = document.querySelector(".close");


btn.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove("hidden");
  bodyNode.classList.add("for_body")
});

popup.addEventListener("click", function(event) {
  e = event || window.event
  if (e.target == this) {
    popup.classList.add("hidden");
    bodyNode.classList.remove("for_body");
  }
});

close.addEventListener("click", function(event){
    event.preventDefault();
    popup.classList.add("hidden");
    bodyNode.classList.remove("for_body");
});


