const btnGirar = document.querySelector("#btnGirar")
const img = document.querySelector("#garrafa")
const root = document.querySelector(":root")
const txtAngle = document.querySelector("#garrafa + br + *")

btnGirar.addEventListener("click",() => {
    let aleatorio = Math.floor(Math.random() * 36000)+1000
    root.style.setProperty("--angle",`${aleatorio}deg`)
    img.style = ""
    txtAngle.innerHTML = `${aleatorio} graus`
    if (window.innerWidth >= 500) img.style.setProperty("animation"," opaque 2s ease-in-out 0s 1 normal both")
    setTimeout(() => {  img.style.setProperty("animation","")  }, 2 * 1000);
    img.style.setProperty("transform","rotate(var(--angle))")
    img.style.setProperty("transition","2s")
})