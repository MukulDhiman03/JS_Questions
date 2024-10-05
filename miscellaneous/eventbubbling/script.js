// trickinling(true) (grand parent-> parent-> child)
// bubbling(false)- by default(child-> parent-> grand parent)
// we can use e.stopPropogation() to stop bubbling and capturing
const grand_child = document.querySelector(".grand_child");
grand_child.addEventListener("click", () => {
  alert("child");
});
const parent = document.querySelector(".parent");
parent.addEventListener("click", () => {
  alert("parent");
});
const grand_parent = document.querySelector(".grand_parent");
grand_parent.addEventListener(
  "click",
  () => {
    alert("grand_parent");
  },
  true
);
