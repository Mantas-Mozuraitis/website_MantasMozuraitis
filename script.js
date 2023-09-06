var checkbox = document.getElementById("side-menu");
checkbox.addEventListener("change", function(){

    var header = document.getElementById("header");
    var navigation = document.getElementById("nav");
    var main = document.getElementById("main");
    var footer = document.getElementById("footer");

    if(this.checked){
        header.classList.add("header-mobile");
        navigation.classList.add("nav-mobile");
        main.style.display = "none";
        footer.style.display = "none";
    }
    else{
        header.classList.remove("header-mobile");
        navigation.classList.remove("nav-mobile");
        main.style.display = "grid";
        footer.style.display = "block";
    }
})




