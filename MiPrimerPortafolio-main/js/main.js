
const nav = document.getElementById("nav")
const btnMenu = document.getElementById("btnMenu")
const btnHome = document.getElementById("btnHome")
const btnServicios = document.getElementById("btnServicios")
const btnAcerca = document.getElementById("btnAcerca")
const btnHabilidades = document.getElementById("btnHabilidades")
const btnPortfolio = document.getElementById("btnPortfolio")
const btnContacto = document.getElementById("btnContacto")


btnMenu.addEventListener("click", () => 
    nav.classList.add("show")
)
btnHome.addEventListener("click", () => 
    nav.classList.remove("show")
)
btnServicios.addEventListener("click", () => 
    nav.classList.remove("show")
)
btnAcerca.addEventListener("click", () => 
    nav.classList.remove("show")
)
btnHabilidades.addEventListener("click", () => 
    nav.classList.remove("show")
)
btnPortfolio.addEventListener("click", () => 
    nav.classList.remove("show")
)
btnContacto.addEventListener("click", () => 
    nav.classList.remove("show")
)

