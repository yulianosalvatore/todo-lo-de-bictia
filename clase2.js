// formas de istancear un string 

var str1 = 'Mi texto'
var str2 = "Mi texto"
var str3 = `Mi texto`
var str4 = new String("Mi texto")
// nos permite interpolar variables 
str3 = `Algo nuevo mas ${str2}`

var accion = 'comprar'
var script = "alert('saludar')"
var miclase = 'button '

var nuevoBoton = `<button class="${miclase}" onclick="${}" `

// forma para dividir un string en una array 
var str = 'prueva '
var strArray = str.split('')
// se usa para sabwer la cantidad de celdas de una array o arreglo 
var cuenta = str.length
var viejaposicion = 3
var nuevaposicion = str.charAt(5)
var nuevapalabra
for (var i = 0; i < cuenta; i++) {
    if (i == viejaposicion) {
        nuevapalabra += str.charAt(nuevaposicion)
        // es una forma corta de escribir ``
        // nuevapalabra=nuevapalabra+str.charAt(nuevaposicion) 
    } else if (i === nuevaposicion) {
        nuevapalabra += str.charAt(viejaposicion)
    } else {
        nuevapalabra += str.charAt(i)
    }
}
console.log(`Resultado ${nuevapalabra}`)

// mi funcion 

var nom = yULIANO
for (var i = 0; i < nom.length; i++) {
    if (i === 0) {
        tu = nom.charAt(0).toUppeCase()
        nom.substr(1, length - 1).toLocaleLowerCase
        alert(""+ tu + "" + nom +"")
    } else {
        alert("todo esta mal ")
    }
}
console.log(`Resultado ${tu} +${nom}`)
