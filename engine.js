        
        function resultado(mensagem){
          document.querySelector("#output").value=mensagem
        }

        function iniciarCalculo(simbolo){
          
          var n1 = parseFloat($n1.value);

          var n2 = parseFloat($n2.value);

          try{
            var msg = calcular(simbolo, n1, n2);
          }catch(e){
            alert(e);
            return;
          }

          resultado(msg);
        }


        function calcular(simbolo, n1, n2){
          
          if( isNaN(n1) || isNaN(n2) ){
            throw new Error("Escolha apenas numeros") 
          }

          if(simbolo !== '+' && simbolo !=='-' && simbolo !== '/' && simbolo !== 'x'){
            throw new Error("Escolha apenas símbolo") 
          }

          var numeroCalculado = null; 
          
              
              switch(simbolo){
                case '+':
                    numeroCalculado = n1+n2;
                    break;
                case '-':
                    numeroCalculado = n1-n2;
                    break;
                case 'x': 
                    numeroCalculado = n1*n2;
                    break;
                case '/': 
                    numeroCalculado = n1/n2;
            }
            return numeroCalculado;
        }


        