alert("Bienvenido a Grenworld")




let nombre, marca, monto,modelo,cuota,recalcular


do {
    nombre = prompt("Ingrese su nombre:").toLowerCase()
}while(!isNaN(nombre || nombre.length <0))

do {
    correo = prompt("Ingrese su correo:").toLowerCase()
}while(!isNaN(correo || correo.length <0))

alert("Las marcas disponibles son: STIHL, ECHO, HUSQVARNA, MAKITA, SHIZEN")

do {
    marca = prompt("Ingrese la marca a elegir").toUpperCase()
}while(!isNaN(marca || marca.length <0))

switch(marca) {

    case "STIHL":
        alert(`Sr. ${nombre}, los modelos disponibles de la ${marca} en este momento son Motoguadagna FS 120,Cortacerco HS 45, Sopladora SH 86 C-ED.`)
        break

    case "ECHO":
        alert(`Sr. ${nombre}, los modelos disponibles de la ${marca} en este momento son Motoguadagna SRM-3605, Cortacerco HCA-266, Sopladora PB-252 .`)
        break

    case "MAKITA":
        alert(`Sr. ${nombre}, los modelos disponibles de la ${marca} en este momento son Motoguadagna RBC414U, Cortacerco DUP361Z, Sopladora BHX2500 .`)
        break

    case "SHIZEN":
        alert(`Sr. ${nombre}, los modelos disponibles de la ${marca} en este momento son Motoguadagna MU-52, Cortacerco MS-50, Sopladora MD-630 .`)
        break
}

do {
    modelo = prompt("Ingrese el modelo").toLowerCase().toString()
} 
while(!isNaN(modelo || modelo.length <0))

       
switch(modelo) {
    case "Motoguadagna FS 120":
        precio = 69600
        alert(`Su precio es de $69600, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break

    case "Cortacerco HS 45":
        precio = 79900
        alert(`Su precio es de $79900, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break

    case "Sopladora SH 86 C-ED":
        precio =88600
        alert(`Su precio es de $88600, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break

    case "Motoguadagna SRM-3605":
        precio = 91000
        alert(`Su precio es de $91000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break 
    case "Cortacerco HCA-266":
        precio = 102600
        alert(`Su precio es de $102600, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break  

    case "Sopladora PB-252":
        precio = 105300
        alert(`Su precio es de $105300, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break

    case "Motoguadagna RBC414U":
        precio = 67000
        alert(`Su precio es de $67000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break 

    case "Cortacerco DUP361Z":
        precio = 45400
        alert(`Su precio es de $45400, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break 

    case "Sopladora BHX2500":
        precio = 75200
        alert(`Su precio es de $75200, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break

    case "Motoguadagna MU-52":
        precio = 40000
        alert(`Su precio es de $40000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break 

    case "Cortacerco MS-50":
        precio = 48000
        alert(`Su precio es de $48000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break 

    case "Sopladora MD-630":
        precio = 58000
        alert(`Su precio es de $58000, el cual se puede abonar en una cuota de $${precioFinal(precio,1)}, en 3 cuotas de $${precioFinal(precio,3)} y 6 $${precioFinal(precio,6)} sin interes`)
        break 

}

    

// nueva consulta
do{
    recotizar = prompt(" Nueva consulta?").toLowerCase()
  
  }while(recotizar!="no")



class Producto {
    constructor(id, marca, modelo,precioDeListaDolares){
         this.id = id
         this.marca = marca.toUpperCase()
         this.modelo = modelo
         this.precioDeListaDolares = precioDeListaDolares
    }  
    enDolares() {
        this.precioDeListaDolares = this.precioDeListaDolares / 290
    }
}

 const productos = []
 let detalleDeProductos = function(id, mar, mod,preDo) {
    productos.push(new Producto (id, mar, mod,preDo)) 
}

detalleDeProductos(1, "Stihl", "Motoguadagna FS 120",69600)
detalleDeProductos(2, "Stihl", "Cortacerco HS 45",79900)
detalleDeProductos(3, "Stihl", "Sopladora SH 86 C-ED",88600)
detalleDeProductos(4, "Echo", "Motoguadagna SRM-3605",91000)
detalleDeProductos(5, "Echo", "Cortacerco HCA-266",102600)
detalleDeProductos(6, "Echo", "Sopladora PB-252",105300)
detalleDeProductos(7, "Makita", "Motoguadagna RBC414U",67000)
detalleDeProductos(8, "Makita", "Cortacerco DUP361Z",45400)
detalleDeProductos(9, "Makita", "Sopladora BHX2500",157000)
detalleDeProductos(10, "Shizen", "Motoguadagna MU-52",40000)
detalleDeProductos(11, "Shizen", "Cortacerco MS-50",48000)
detalleDeProductos(12, "Shizen", "Sopladora MD-630",58000)

//  valor a usd  

for(const dolares of productos) dolares.enDolares()
console.log(productos)

//  productos (usd )

console.log(productos.map(detalleDeProductos => detalleDeProductos.precioDeListaDolares))

//   productos mayores o iguales a 600 usd

console.log(productos.filter(detalleDeProductos => detalleDeProductos.precioDeListaDolares >= 600))

//  productos menores a 600 usd

console.log(productos.filter(detalleDeProductos => detalleDeProductos.precioDeListaDolares < 600))

let boton = document.getElementById("btnPrincipal")
let caja = document.getElementById("cajaMuestra")
let precioFinal = function (precio, cuota)  {
    return precio / cuota
  };



boton.addEventListener("click", e => {
    let nombre = prompt("Ingrese su nombre:")
    console.log(nombre) 
    caja.textContent = " Hola " + nombre  + " bienvenido "

})