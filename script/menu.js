console.log ("hola mundo")
const boton = document.getElementById ("menu-boton");
const menu = document.getElementById ("menu-mobile");
boton.addEventListener ("click", function(){
    if (menu.style.display === "none") {
        menu.style.display = "flex"
    }
    else {
    menu.style.display = "none"
    }
})