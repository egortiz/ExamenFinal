    var getData=function generarprimos() {
    var n=document.getElementById("n")
	var c, d, n, p;
	n = prompt('Ingrese Numero?');
	c = 1;
	p = 2;
	d = 2;
	while (c<=n) {
		if (p%d==0) {
			if (p==d) {
				document.write(p,'<BR/>');
				c = c+1;
			}
			d = 2;
			p = p+1;
		} else {
			d = d+1;
		}
	}
}

