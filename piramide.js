   var getData=function escalera() {
    var n=document.getElementById("n")

	var n = new Number();
	var a = new Number();
	var b = new Number();
	n = Number(prompt('DE CUANTOS NIVELES QUIERE SU PIRAMIDE?'));
	for (a=1;a<=n;a++) {
		for (b=1;b<=a;b++) {
			document.write(b);
		}
		document.write("",'<BR/>');
	}
}
