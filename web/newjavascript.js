/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

function p(){
 var cadena =document.getElementById("tex").value;
 var array =new Array();
  array=cadena.split(" ");

    for(var i=0; i<array.length;i++){
       // alert("hola");
        alert(array[i]);
    }
  //var table=  document.createElement("table");
}
function borrar(){
    document.getElementById("texArea").value="";
}
