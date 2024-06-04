import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertUnitService {

  
  //Função para converter unidades de comprimento
  convertComp(entrada: String, inicial: any, conta: any, saida: String){
    if(saida == 'Nanômetros') { //Nanômetros
      const format = inicial * conta;


        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')   + ' nm';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' nm';
  
        }

      
    } else if (saida == 'Micrômetros') {
      if (entrada !== 'Nanômetros') { // Micrômetros multiplicação

        const format = inicial * conta;


        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')   + ' µm';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' µm';
  
        }

      } else {// Micrômetros divisão
        const format = inicial / conta;
        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')   + ' µm';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' µm';
  
        }

      }
      



    } else if (saida == 'Milímetros') {
      if (entrada !== 'Nanômetros' && entrada !== 'Micrômetros') {// Milímetros multiplicação
        const format = inicial * conta;


        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')   + ' mm';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' mm';
  
        }

      } else {//Milímetros divisão
        const format = inicial / conta;
        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')   + ' mm';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' mm';
  
        }

      }
      

    } else if (saida == 'Centímetros') {
      if (entrada !== 'Nanômetros' && entrada !== 'Micrômetros' && entrada !== 'Milímetros') {// cm multiplicação
        const format = inicial * conta;


        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')   + ' cm';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' cm';
  
        }

      } else {//cm divisão
        const format = inicial / conta;
        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')   + ' cm';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' cm';
  
        }

      }
      




    } else if (saida == 'Polegadas') {
      if (entrada !== 'Nanômetros' && entrada !== 'Micrômetros' && entrada !== 'Milímetros' && entrada !== 'Centímetros') {//Polegadas multiplicação
        const format = inicial * conta;


        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')   + ' in';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' in';
  
        }

      } else {//Polegadas divisão
        const format = inicial / conta;
        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')   + ' in';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' in';
  
        }

      }




    } else if (saida == 'Pés') {
      if (entrada !== 'Nanômetros' && entrada !== 'Micrômetros' && entrada !== 'Milímetros' && entrada !== 'Centímetros' && entrada !== 'Polegadas') {//pes multiplicação
        const format = inicial * conta;


        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')   + ' ft';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' ft';
  
        }

      } else {//pes divisão
        const format = inicial / conta;
        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')   + ' ft';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' ft';
  
        }

      }




      
    } else if (saida == 'Jardas') {
      if (entrada !== 'Nanômetros' && entrada !== 'Micrômetros' && entrada !== 'Milímetros' && entrada !== 'Centímetros' && entrada !== 'Polegadas' && entrada !== 'Pés') {//jardas multiplicação
        const format = inicial * conta;


        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')   + ' yd';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' yd';
  
        }

      } else {//jardas divisão
        const format = inicial / conta;
        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')   + ' yd';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' yd';
  
        }

      }



    } else if (saida == 'Metros') {//m multiplicação
      if (entrada !== 'Nanômetros' && entrada !== 'Micrômetros' && entrada !== 'Milímetros' && entrada !== 'Centímetros' && entrada !== 'Polegadas' && entrada !== 'Pés' && entrada !== 'Jardas') {
        const format = inicial * conta;


        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')   + ' m';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' m';
  
        }

      } else {//m divisão
        const format = inicial / conta;
        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')   + ' m';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' m';
  
        }

      }



    } else if (saida == 'Quilômetros') {
      if (entrada !== 'Nanômetros' && entrada !== 'Micrômetros' && entrada !== 'Milímetros' && entrada !== 'Centímetros' && entrada !== 'Polegadas' && entrada !== 'Pés' && entrada !== 'Jardas' && entrada !== 'Metros') {
        //km multiplicação
        const format = inicial * conta;


        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')   + ' km';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' km';
  
        }

      } else {//Km divisão
        const format = inicial / conta;

        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')   + ' km';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' km';
  
        }

      }
      

    } else {//Milhas

      const format = inicial / conta;
      if(format < 0.001) {
        return String(format.toExponential(2)).replace('.',',')  + ' mi';


      } else {
        return format.toLocaleString('pt-BR')  + ' mi';

      }

      


    }
    

  } //até aqui


  

  //Converção de velocidade
  converterVel(entrada: String, inicial: any, conta: any, saida: String){
    if(saida == 'm/s') {//m/s multiplicação
      if(entrada == 'km/s') {
        const format = inicial * conta;

        return format.toLocaleString('pt-BR')   + ' m/s';

      } else {//m/s divisão
        const format = inicial / conta;

        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')  + ' m/s';

        } else {
          return format.toLocaleString('pt-BR')  + ' m/s';

        }
      }
    } else if(saida == 'km/s'){//km/s
      const format = inicial / conta;
      if(format < 0.001) {
        return String(format.toExponential(2)).replace('.',',')  + ' km/s';

      } else {
        return format.toLocaleString('pt-BR')  + ' km/s';

      } 
      

    } else {//km/h
      const format = inicial * conta;

      return format.toLocaleString('pt-BR')   + ' km/h';
    }
  } // Até aqui


  //Converção de Volume
  converterVol(entrada: String, inicial: any, conta: any, saida: String){
    if(saida == 'Mililitro') {//Mililitro
      const format = inicial * conta;

      if(format > 10000000000) {
        return String(format.toExponential(2)).replace('.',',')  + ' ml';
      } else {
        return format.toLocaleString('pt-BR')   + ' ml';

      }


    } else if(saida == 'Litro'){
      //Litro multiplicação
      if (entrada !== 'Mililitro'){
        const format = inicial * conta;
        if(format > 10000000000){
          return String(format.toExponential(2)).replace('.',',')  + ' L';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' L';
  
        }   
      } else {
        //Litro divisão
        const format = inicial / conta;
        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')  + ' L';
  
  
        } else {
          return format.toLocaleString('pt-BR')  + ' L';
  
        }
      }


    } else if(saida == 'Metro cúbico'){
      //metros cubicos multiplicação
      if(entrada !== 'Mililitro' && entrada !== 'Litro'){
        const format = inicial * conta;
        if(format > 10000000000){
          return String(format.toExponential(2)).replace('.',',')  + ' m³';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' m³';

        }
      } else {
        //metros cubicos divisão
        const format = inicial / conta;
        if(format < 0.001) { //formatação caso os 3 decimais seja 0
          return String(format.toExponential(2)).replace('.',',')  + ' m³';
  
  
        } else {
          return format.toLocaleString('pt-BR')  + ' m³';
  
        }
      }

    } else {
      //Quilometros cubicos
      const format = inicial / conta;
      if(format < 0.001) {
        return String(format.toExponential(2)).replace('.',',')  + ' mk³';

      } else {
        return format.toLocaleString('pt-BR')  + ' mk³'
      }
      

    }

  } //Até aqui


  //Converção de Area
  converterArea(entrada: String, inicial: any, conta: any, saida: String){
    if(saida == 'Metro quadrado'){//m²
      const format = inicial * conta;

      if(format > 10000000000) {
        return String(format.toExponential(2)).replace('.',',')  + ' m²';
      } else {
        return format.toLocaleString('pt-BR')   + ' m²';

      }

    } else if(saida == 'Hectare'){//Hectare Multiplicação
      if (entrada !== 'Metro quadrado') {
        const format = inicial * conta;

        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')  + ' ha';
        } else {
          return format.toLocaleString('pt-BR')   + ' ha';
  
        }
      } else {//Hectare divisão
        const format = inicial / conta;

        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')   + ' ha';
  
        } else {
          return format.toLocaleString('pt-BR')   + ' ha';
  
        }
      }

    } else { //km²
      const format = inicial / conta;

      if(format < 0.001) {
        return String(format.toExponential(2)).replace('.',',')  + ' km²';


      } else {
        return format.toLocaleString('pt-BR')  + ' km²';

      }
      
    }

  }//até aqui

  //Conveter Massa
  converterMassa(entrada: String, inicial: any, conta: any, saida: String){

    if(saida == 'Miligrama') {
      const format = inicial * conta;

      if(format > 10000000000) {
        return String(format.toExponential(2)).replace('.',',')  + ' mg';
      } else {
        return format.toLocaleString('pt-BR')   + ' mg';

      }

    } else if(saida == 'Grama') {
      if(entrada !== 'Miligrama') {
        const format = inicial * conta;

        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')  + ' g';
        } else {
          return format.toLocaleString('pt-BR')   + ' g';
  
        }

      } else {//Divisão Grama
        const format = inicial / conta;

        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')  + ' g';
          
        } else {
          return format.toLocaleString('pt-BR')   + ' g';
          
        }

      }

    } else if(saida == 'Quilograma') {
      if(entrada !== 'Miligrama' && entrada !== 'Grama') {
        const format = inicial * conta;

        if(format > 10000000000) {
          return String(format.toExponential(2)).replace('.',',')  + ' kg';
        } else {
          return format.toLocaleString('pt-BR')   + ' kg';
  
        }    
      } else {
        const format = inicial / conta;

        if(format < 0.001) {
          return String(format.toExponential(2)).replace('.',',')  + ' kg';
          
        } else {
          return format.toLocaleString('pt-BR')   + ' kg';
          
        }
      }

    } else {
      const format = inicial / conta;

      if(format < 0.001) {
        return String(format.toExponential(2)).replace('.',',')  + ' T';
        
      } else {
        return format.toLocaleString('pt-BR')   + ' T';
        
      }
    }

  }
  
  

  

  constructor() { }

  

  

  localizarPrimeiroNaoZero(num: number){
    // Converte o número para string
    const numStr = num.toString();
    
    // Verifica se há um ponto decimal na string
    const decimalIndex = numStr.indexOf('.');
  
    // Se não houver ponto decimal, não há casas decimais para verificar
    if (decimalIndex === -1) {
      return 0;
    }
  
    // Obtém a parte decimal da string
    const parteDecimal = numStr.slice(decimalIndex + 1);
  
    // Itera sobre a parte decimal para encontrar o primeiro número não-zero
    for (let i = 0; i < parteDecimal.length; i++) {
      if (parteDecimal[i] !== '0') {
        // Retorna o dígito encontrado e sua posição (1-based)
        return i + 1;
      }
    }
  
    // Se não encontrar nenhum número não-zero, retorna null
    return 0;
  }

  



  
  
  
}
