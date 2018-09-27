 function maior(a, b, c) {
            if(a>c && b>c){
                if(a>b)
                    return a;
                else if(a==b){
                    alert("Primeiro e segundo são iguais e maiores");
                return a;}
                else
                    return b;
                }
            if(a>b && c>b){
                if(a>c)
                    return a;
                else if(a==c){
                   alert("Primeiro e terceiro são iguais e maiores");
                return a;}
                else
                    return c;
            }
            if(b>a && c>a){
                if(b>c)
                    return b;
                else if(b==c){
                    alert("Segundo e terceiro são iguais e maiores");
                return b;}
                else
                    return c;
            }
 }
      
var a, b, c, d;

a= parseFloat(prompt("digite primeiro valor" ));
b= parseFloat(prompt("digite segundo valor" ));
c= parseFloat(prompt("digite terceiro valor" ));

        d = maior(a,b,c);
        alert("Maior é "+d);
     
        