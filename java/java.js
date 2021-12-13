let contenido = document.getElementById("contenido");
let relleno= document.getElementById("relleno");
let figuras =[];

contenido.addEventListener("submit", (event)=> {
    event.preventDefault();
    let data = new FormData(contenido);
    figuras.push({
        nombre: data.get("nombre"),
        figura: data.get("figura"),
        color: data.get("color"),
    });
    pintar_figuras();
});
const pintar_figuras = () =>{
    relleno.innerHTML="";
    figuras.forEach((e) => {
        relleno.insertAdjacentHTML(
            "beforeend",
          `
          <div
          class="${e.figura}"
          style="background:${e.color};"
          >
          <center>${e.nombre}</center>
          </div>
        `
        );
    });
}