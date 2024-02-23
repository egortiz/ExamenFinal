    var getData=function capicua() {
    var n =document.getElementById("n")
	
	var a, c, d, m, n, s, x;
	n = prompt('Introduzca un número?');
	m = 0;
	c = 10;
	while (n>=c) {
		m = m+1;
		c = c*10;
	}
	x = n;
	d = 0;
	s = 0;
	while ((x!=0)) {
		a = x/(Math.pow(10,m));
		x = x%(Math.pow(10,m));
		s = a*Math.pow(10,(d+s));
		m = m-1;
		d = d+1;
	}
	if (n==0) {
		
		document.write(" E S   C A P I C U A ",'<BR/>');
	} else {
		document.write(" N O   E S   C A P I C U A ",'<BR/>');
	}
}

