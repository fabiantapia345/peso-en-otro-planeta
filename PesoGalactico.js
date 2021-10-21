function CalcularPeso(){
	//declarar variables
	var M, G, P;
	//Recuperar los valores de las cajas de texto y asignarlo
	M=Number(document.getElementById("Mas").value);
	G=Number(document.getElementById("Gra").value);
	P=
	//Realizar operaciones
	P=M+G/9.8
	//Mostrar el resultado en la caja de texto
	document.getElementById("Res").value=P;

}
function Limpiar(){
	document.getElementById("Mas").value="";
	document.getElementById("Gra").value="";
	document.getElementById("Res").value="";
	

}