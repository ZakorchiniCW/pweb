function maior(a, b, c) {
	if(a>b && a>c)
		return a;
	else if(b>a && b>c)
		return b;
	else if(c>b && c>a)
		return c;
	else if(a==b && a>c){
		alert("Primeiro e segundo são iguais e maiores");
                return a;}
	else if(a==c && a>b){
		alert("Primeiro e terceiro são iguais e maiores");
                return a;}
	else if(b==c && b>a){
		alert("Segundo e terceiro são iguais e maiores");
                return b;}
	else
		return a;
}
		
     
var a, b, c, d;

do{
a= parseFloat(prompt("digite primeiro valor" ));
b= parseFloat(prompt("digite segundo valor" ));
c= parseFloat(prompt("digite terceiro valor" ));

        if(a==b && a==c && b==c){
		alert("Os três são iguais! ");}
	else{
		d = maior(a,b,c);
        	alert("Maior é "+ d);}
	var escolha=confirm("Deseja jogar denovo?")
	if(escolha==0)
		alert("Até logo!");
}while(escolha);
     
        
