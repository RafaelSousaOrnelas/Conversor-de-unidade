import { Component, input } from '@angular/core';
import { formatNumber } from '@angular/common';
import { ConvertUnitService } from '../services/convert-unit.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tiposUnidades: string[] = ['Comprimento', 'Velocidade', 'Volume', 'Area', 'Massa'];
  unidades: any = [
    {Comprimento: ['Nanômetros', 'Micrômetros', 'Milímetros', 'Centímetros', 'Polegadas', 'Pés', 'Jardas', 'Metros', 'Quilômetros', 'Milhas']},
    {Velocidade: ['m/s', 'km/s','km/h']},
    {Volume: ['Mililitro', 'Litro', 'Metro cúbico', 'Quilômetro cúbico']},
    {Area: ['Metro quadrado', 'Quilômetro quadrado', 'Hectare']},
    {Massa: ['Miligrama', 'Grama', 'Quilograma', 'Tonelada']},
  ]
  
  //define um array de unidades de distancia
  //unidades: string[] = ['Nanômetros', 'Micrômetros', 'Milímetros', 'Centímetros', 'Polegadas', 'Pés', 'Jardas', 'Metros', 'Quilômetros', 'Milhas'];
  //valor padrão de entarda
  tipoSelecionado: string = 'Comprimento';
  daUnidade: string = 'Polegadas';
  //valor padrão de saida
  paraUnidade: string = 'Nanômetros';

  //Velocidade
  daUnidadeV: string = 'km/s';

  paraUnidadeV: string = 'm/s';

  //Volume
  daUnidadeVol: string = 'Mililitro';
  paraUnidadeVol: string = 'Litro';

  //Area
  daUnidadeA: string = 'Metro quadrado';
  paraUnidadeA: string = 'Quilômetro quadrado';

  //Massa
  daUnidadeM: string = 'Grama';
  paraUnidadeM: string = 'Quilograma';



  inputValue: number = 0;

  resultado: any | null = null;
  


  converter() {

    type ConversionKey = 'Tonelada-Quilograma' | 'Tonelada-Grama' | 'Tonelada-Miligrama' | 'Quilograma-Tonelada' | 'Quilograma-Grama' | 'Quilograma-Miligrama' | 'Grama-Tonelada' | 'Grama-Quilograma' | 'Grama-Miligrama' | 'Miligrama-Tonelada' | 'Miligrama-Quilograma' | 'Miligrama-Grama' |
                         'Hectare-Quilômetro quadrado' | 'Hectare-Metro quadrado' | 'Quilômetro quadrado-Hectare' | 'Quilômetro quadrado-Metro quadrado' | 'Metro quadrado-Hectare' | 'Metro quadrado-Quilômetro quadrado' |
                         'Quilômetro cúbico-Metro cúbico' | 'Quilômetro cúbico-Litro' | 'Quilômetro cúbico-Mililitro' | 'Metro cúbico-Quilômetro cúbico' | 'Metro cúbico-Litro' | 'Metro cúbico-Mililitro' | 'Litro-Quilômetro cúbico' | 'Litro-Metro cúbico' | 'Litro-Mililitro' | 'Mililitro-Quilômetro cúbico' | 'Mililitro-Metro cúbico' | 'Mililitro-Litro' |
                         'km/h-km/s' | 'km/h-m/s'| 'km/s-km/h' | 'km/s-m/s' | 'm/s-km/h' | 'm/s-km/s' |
                         'Milhas-Micrômetros' | 'Milhas-Milímetros' | 'Milhas-Centímetros' | 'Milhas-Polegadas' | 'Milhas-Jardas' | 'Quilômetros-Micrômetros' | 'Quilômetros-Milímetros' | 'Quilômetros-Centímetros' | 'Quilômetros-Polegadas' | 'Quilômetros-Jardas' | 'Metros-Micrômetros' | 'Metros-Milímetros' | 'Metros-Centímetros' | 'Metros-Polegadas' | 'Metros-Jardas' | 'Jardas-Micrômetros' | 'Jardas-Milímetros' | 'Jardas-Centímetros' | 'Jardas-Polegadas' | 'Jardas-Pés' | 'Jardas-Metros' | 'Jardas-Quilômetros' | 'Jardas-Milhas' | 'Pés-Micrômetros' | 'Pés-Milímetros' | 'Pés-Centímetros' | 'Pés-Polegadas' | 'Pés-Jardas' | 'Polegadas-Micrômetros' | 'Polegadas-Milímetros' | 'Polegadas-Centímetros' | 'Polegadas-Pés' | 'Polegadas-Jardas' | 'Polegadas-Metros' | 'Polegadas-Quilômetros' | 'Polegadas-Milhas' | 'Centímetros-Micrômetros' | 'Centímetros-Polegadas' | 'Centímetros-Pés' | 'Centímetros-Jardas' | 'Centímetros-Metros' | 'Centímetros-Quilômetros' | 'Centímetros-Milhas' | 'Milímetros-Nanômetros' | 'Milímetros-Micrômetros' | 'Milímetros-Polegadas' | 'Milímetros-Pés' | 'Milímetros-Jardas' | 'Milímetros-Metros' | 'Milímetros-Quilômetros' | 'Milímetros-Milhas' |'Micrômetros-Milímetros' | 'Micrômetros-Centímetros' | 'Micrômetros-Polegadas' | 'Micrômetros-Pés' | 'Micrômetros-Jardas' | 'Micrômetros-Metros' | 'Micrômetros-Quilômetros' | 'Micrômetros-Milhas' |'Nanômetros-Micrômetros' | 'Micrômetros-Nanômetros' | 'Nanômetros-Milímetros' | 'Milímetros-Nanômetros' | 'Nanômetros-Centímetros' | 'Centímetros-Nanômetros' | 'Nanômetros-Polegadas' | 'Polegadas-Nanômetros' | 'Nanômetros-Pés' | 'Pés-Nanômetros' | 'Nanômetros-Jardas' | 'Jardas-Nanômetros' | 'Nanômetros-Metros' | 'Metros-Nanômetros' | 'Nanômetros-Quilômetros' | 'Quilômetros-Nanômetros' | 'Nanômetros-Milhas' | 'Milhas-Nanômetros' | 'Milímetros-Centímetros' | 'Centímetros-Milímetros' |'Metros-Quilômetros' | 'Quilômetros-Metros' | 'Metros-Milhas' | 'Milhas-Metros' |'Metros-Pés' | 'Pés-Metros' | 'Quilômetros-Milhas' | 'Milhas-Quilômetros' |'Quilômetros-Pés' | 'Pés-Quilômetros' | 'Milhas-Pés' | 'Pés-Milhas';

    const conversionRates: Record<ConversionKey, number> = {
      'Nanômetros-Micrômetros': 1000, //divisão
      'Nanômetros-Milímetros': 1 * 10 ** 6, //divisão
      'Nanômetros-Centímetros': 1 * 10 ** 7, //divisão
      'Nanômetros-Polegadas': 2.54 * 10 ** 7, //divisão
      'Nanômetros-Pés': 3.048 * 10 ** 8, //divisão
      'Nanômetros-Jardas': 9.144 * 10 ** 8, //divisão
      'Nanômetros-Metros': 1 * 10 ** 9, //divisão
      'Nanômetros-Quilômetros': 1 * 10 ** 12, //divisão
      'Nanômetros-Milhas': 1.609344 * 10 ** 12, //divisão
      
      'Micrômetros-Nanômetros': 1000,
      'Micrômetros-Milímetros': 1000, //divisão
      'Micrômetros-Centímetros': 10000, // divisão
      'Micrômetros-Polegadas': 25400, //divisão
      'Micrômetros-Pés': 304800, //divisão
      'Micrômetros-Jardas': 914400, //divisão
      'Micrômetros-Metros': 1 * 10 ** 6, //divisão
      'Micrômetros-Quilômetros': 1 * 10 ** 9, //divisão
      'Micrômetros-Milhas': 1609344000, //divisão

      'Milímetros-Nanômetros': 1 * 10 ** 6,
      'Milímetros-Micrômetros': 1000,
      'Milímetros-Centímetros': 10, //divisão
      'Milímetros-Polegadas': 25.4, //divisão
      'Milímetros-Pés': 304.8, //divisão
      'Milímetros-Jardas': 914.4,//divisão
      'Milímetros-Metros': 1000,
      'Milímetros-Quilômetros': 1 * 10 ** 6,
      'Milímetros-Milhas': 1609344,

      'Centímetros-Nanômetros': 1 * 10 ** 7,
      'Centímetros-Micrômetros': 10000,
      'Centímetros-Milímetros': 10,
      'Centímetros-Polegadas': 2.54, //divisão
      'Centímetros-Pés': 30.48,
      'Centímetros-Jardas': 91.44,
      'Centímetros-Metros': 100,
      'Centímetros-Quilômetros': 100000,
      'Centímetros-Milhas': 160934.4,

      'Polegadas-Nanômetros': 2.54 * 10 ** 7,
      'Polegadas-Micrômetros': 25400,
      'Polegadas-Milímetros': 25.4,
      'Polegadas-Centímetros': 2.54,
      'Polegadas-Pés': 12, //divisão
      'Polegadas-Jardas': 36,
      'Polegadas-Metros': 39.37,
      'Polegadas-Quilômetros': 39370,
      'Polegadas-Milhas': 63360,

      'Pés-Nanômetros': 3.048 * 10 ** 8,
      'Pés-Micrômetros': 304800,
      'Pés-Milímetros': 304.8,
      'Pés-Centímetros': 30.48,
      'Pés-Polegadas': 12,
      'Pés-Jardas': 3, //divisão
      'Pés-Metros': 3.281, 
      'Pés-Quilômetros': 3280.84,
      'Pés-Milhas': 5280,

      'Jardas-Nanômetros': 9.144 * 10 ** 8,
      'Jardas-Micrômetros': 914400,
      'Jardas-Milímetros': 914.4,
      'Jardas-Centímetros': 91.44,
      'Jardas-Polegadas': 36,
      'Jardas-Pés': 3,
      'Jardas-Metros': 1.094, //divisão
      'Jardas-Quilômetros': 1093.61,
      'Jardas-Milhas': 1760,

      'Metros-Nanômetros': 1 * 10 ** 9,
      'Metros-Micrômetros': 1 * 10 ** 6,
      'Metros-Milímetros': 1000,
      'Metros-Centímetros': 100,
      'Metros-Polegadas': 39.37,
      'Metros-Pés': 3.281,
      'Metros-Jardas': 1.094,
      'Metros-Quilômetros': 1000, //divisão
      'Metros-Milhas': 1609.344,

      'Quilômetros-Nanômetros': 1 * 10 ** 12,
      'Quilômetros-Micrômetros': 1 * 10 ** 9,
      'Quilômetros-Milímetros': 1 * 10 ** 6,
      'Quilômetros-Centímetros': 100000,
      'Quilômetros-Polegadas': 39370,
      'Quilômetros-Pés': 3280.84,
      'Quilômetros-Jardas': 1093.61,
      'Quilômetros-Metros': 1000,
      'Quilômetros-Milhas': 1.609344, //divisão

      'Milhas-Nanômetros': 1.609344 * 10 ** 12,
      'Milhas-Micrômetros': 1609344000,
      'Milhas-Milímetros': 1609344,
      'Milhas-Centímetros': 160934.4,
      'Milhas-Polegadas': 63360,
      'Milhas-Pés': 5280,
      'Milhas-Jardas': 1760,
      'Milhas-Metros': 1609.344,
      'Milhas-Quilômetros': 1.609344,
      //comprimento fim

      'm/s-km/s': 1000, //divisão
      'm/s-km/h': 3.6,

      'km/s-m/s': 1000,
      'km/s-km/h': 3600,

      'km/h-m/s': 3.6, //divisão
      'km/h-km/s': 3600,
      //Velociadade fim

      'Mililitro-Litro': 1000, //divisão
      'Mililitro-Metro cúbico': 1 * 10 ** 6,
      'Mililitro-Quilômetro cúbico': 1 * 10 ** 15,

      'Litro-Mililitro': 1000,
      'Litro-Metro cúbico': 1000, //divisão
      'Litro-Quilômetro cúbico': 1 * 10 ** 12,

      'Metro cúbico-Mililitro': 1 * 10 ** 6,
      'Metro cúbico-Litro': 1000,
      'Metro cúbico-Quilômetro cúbico': 1 * 10 ** 9, //divisão

      'Quilômetro cúbico-Mililitro': 1 * 10 ** 15,
      'Quilômetro cúbico-Litro': 1 * 10 ** 12,
      'Quilômetro cúbico-Metro cúbico': 1 * 10 ** 9,
      //Volume fim

      'Metro quadrado-Hectare': 10000,//divisão
      'Metro quadrado-Quilômetro quadrado': 1 * 10 ** 6,

      'Hectare-Metro quadrado': 10000,
      'Hectare-Quilômetro quadrado': 100,//divisão

      'Quilômetro quadrado-Metro quadrado': 1 * 10 ** 6,
      'Quilômetro quadrado-Hectare': 100,
      //Area fim

      'Miligrama-Grama': 1000,//divisão
      'Miligrama-Quilograma': 1 * 10 ** 6,
      'Miligrama-Tonelada': 1 * 10 ** 9,

      'Grama-Miligrama': 1000,
      'Grama-Quilograma': 1000,//divisão
      'Grama-Tonelada': 1 * 10 ** 6,

      'Quilograma-Miligrama': 1 * 10 ** 6,
      'Quilograma-Grama': 1000,
      'Quilograma-Tonelada': 1000,//divisão

      'Tonelada-Miligrama': 1 * 10 ** 9,
      'Tonelada-Grama': 1 * 10 ** 6,
      'Tonelada-Quilograma': 1000,
      //Massa fim

    };
    

    //verifica o tipo selecionado e chama uma função de conversão
    if(this.tipoSelecionado == 'Comprimento') {
      //Cria uma chave de converção conacatenando duas variaveis
      const chaveConvercao = `${this.daUnidade}-${this.paraUnidade}` as ConversionKey;

      //obten a taxa de cenverção
      const rate = conversionRates[chaveConvercao] || 1 ;
      this.resultado = this.convertUnit.convertComp(this.daUnidade, this.inputValue, rate, this.paraUnidade);


    } else if (this.tipoSelecionado == 'Velocidade') {
      //Cria uma chave de converção conacatenando duas variaveis
      const chaveConvercao = `${this.daUnidadeV}-${this.paraUnidadeV}` as ConversionKey;

      //obten a taxa de cenverção
      const rate = conversionRates[chaveConvercao] || 1 ;
      
      this.resultado = this.convertUnit.converterVel(this.daUnidadeV, this.inputValue, rate, this.paraUnidadeV);
      
    } else if (this.tipoSelecionado == 'Volume') {
      //Cria uma chave de converção conacatenando duas variaveis
      const chaveConvercao = `${this.daUnidadeVol}-${this.paraUnidadeVol}` as ConversionKey;

      //obten a taxa de cenverção
      const rate = conversionRates[chaveConvercao] || 1 ;

      this.resultado = this.convertUnit.converterVol(this.daUnidadeVol, this.inputValue, rate, this.paraUnidadeVol);
      
    } else if (this.tipoSelecionado == 'Area') {
      //Cria uma chave de converção conacatenando duas variaveis
      const chaveConvercao = `${this.daUnidadeA}-${this.paraUnidadeA}` as ConversionKey;

      //obten a taxa de cenverção
      const rate = conversionRates[chaveConvercao] || 1 ;

      this.resultado = this.convertUnit.converterArea(this.daUnidadeA, this.inputValue, rate, this.paraUnidadeA);

    } else {
      //Cria uma chave de converção conacatenando duas variaveis
      const chaveConvercao = `${this.daUnidadeM}-${this.paraUnidadeM}` as ConversionKey;

      //obten a taxa de cenverção
      const rate = conversionRates[chaveConvercao] || 1 ;

      this.resultado = this.convertUnit.converterMassa(this.daUnidadeM, this.inputValue, rate, this.paraUnidadeM);

      

    }


    /*if(this.paraUnidade == 'Nanômetros') {
      const format = this.inputValue * rate;


        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' nm';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' nm';
  
        }

      
    } else if (this.paraUnidade == 'Micrômetros') {
      if (this.daUnidade !== 'Nanômetros') {

        const format = this.inputValue * rate;


        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' µm';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' µm';
  
        }

      } else {
        const format = this.inputValue / rate;
        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' µm';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' µm';
  
        }

      }
      



    } else if (this.paraUnidade == 'Milímetros') {
      if (this.daUnidade !== 'Nanômetros' && this.daUnidade !== 'Micrômetros') {
        const format = this.inputValue * rate;


        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' mm';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' mm';
  
        }

      } else {
        const format = this.inputValue / rate;
        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' mm';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' mm';
  
        }

      }
      

    } else if (this.paraUnidade == 'Centímetros') {
      if (this.daUnidade !== 'Nanômetros' && this.daUnidade !== 'Micrômetros' && this.daUnidade !== 'Milímetros') {
        const format = this.inputValue * rate;


        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' cm';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' cm';
  
        }

      } else {
        const format = this.inputValue / rate;
        if(this.daUnidade == 'Nanômetros') {
          this.resultado = String(format.toExponential(2)).replace('.',',')  + ' cm';
  
        } else if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' cm';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' cm';
  
        }

      }
      




    } else if (this.paraUnidade == 'Polegadas') {
      if (this.daUnidade !== 'Nanômetros' && this.daUnidade !== 'Micrômetros' && this.daUnidade !== 'Milímetros' && this.daUnidade !== 'Centímetros') {
        const format = this.inputValue * rate;


        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' in';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' in';
  
        }

      } else {
        const format = this.inputValue / rate;
        if(this.daUnidade == 'Nanômetros') {
          this.resultado = String(format.toExponential(2)).replace('.',',')  + ' in';
  
        } else if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' in';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' in';
  
        }

      }




    } else if (this.paraUnidade == 'Pés') {
      if (this.daUnidade !== 'Nanômetros' && this.daUnidade !== 'Micrômetros' && this.daUnidade !== 'Milímetros' && this.daUnidade !== 'Centímetros' && this.daUnidade !== 'Polegadas') {
        const format = this.inputValue * rate;


        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' ft';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' ft';
  
        }

      } else {
        const format = this.inputValue / rate;
        if(this.daUnidade == 'Nanômetros') {
          this.resultado = String(format.toExponential(2)).replace('.',',')  + ' ft';
  
        } else if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' ft';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' ft';
  
        }

      }




      
    } else if (this.paraUnidade == 'Jardas') {
      if (this.daUnidade !== 'Nanômetros' && this.daUnidade !== 'Micrômetros' && this.daUnidade !== 'Milímetros' && this.daUnidade !== 'Centímetros' && this.daUnidade !== 'Polegadas' && this.daUnidade !== 'Pés') {
        const format = this.inputValue * rate;


        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' yd';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' yd';
  
        }

      } else {
        const format = this.inputValue / rate;
        if(this.daUnidade == 'Nanômetros') {
          this.resultado = String(format.toExponential(2)).replace('.',',')  + ' yd';
  
        } else if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' yd';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' yd';
  
        }

      }



    } else if (this.paraUnidade == 'Metros') {
      if (this.daUnidade !== 'Nanômetros' && this.daUnidade !== 'Micrômetros' && this.daUnidade !== 'Milímetros' && this.daUnidade !== 'Centímetros' && this.daUnidade !== 'Polegadas' && this.daUnidade !== 'Pés' && this.daUnidade !== 'Jardas') {
        const format = this.inputValue * rate;


        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' m';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' m';
  
        }

      } else {
        const format = this.inputValue / rate;
        if(this.daUnidade == 'Nanômetros') {
          this.resultado = String(format.toExponential(2)).replace('.',',')  + ' m';
  
        } else if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' m';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' m';
  
        }

      }



    } else if (this.paraUnidade == 'Quilômetros') {
      if (this.daUnidade !== 'Nanômetros' && this.daUnidade !== 'Micrômetros' && this.daUnidade !== 'Milímetros' && this.daUnidade !== 'Centímetros' && this.daUnidade !== 'Polegadas' && this.daUnidade !== 'Pés' && this.daUnidade !== 'Jardas' && this.daUnidade !== 'Metros') {
        
        const format = this.inputValue * rate;


        if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' km';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' km';
  
        }

      } else {
        const format = this.inputValue / rate;

        if(this.daUnidade == 'Nanômetros' || this.daUnidade == 'Micrômetros') {
          this.resultado = String(format.toExponential(2)).replace('.',',')  + ' km';
  
        } else if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
          this.resultado = String(format.toExponential(2)).replace('.',',')   + ' km';
  
        } else {
          this.resultado = format.toLocaleString('pt-BR')   + ' km';
  
        }

      }
      

    } else {

      const format = this.inputValue / rate;
      if(this.daUnidade == 'Nanômetros' || this.daUnidade == 'Micrômetros' || this.daUnidade == 'Milímetros') {
        this.resultado = String(format.toExponential(2)).replace('.',',')  + ' mi';

      } else if(this.convertUnit.localizarPrimeiroNaoZero(format) > 3) {
        this.resultado = String(format.toExponential(2)).replace('.',',')  + ' mi';

        if(this.daUnidade == 'Nanômetros' || this.daUnidade == 'Micrômetros' || this.daUnidade == 'Milímetros'){
          this.resultado = String(format.toExponential(2)).replace('.',',')  + ' mi';

        }

      } else {
        this.resultado = format.toLocaleString('pt-BR')  + ' mi';

      }

      


    }*/
    
    
  }

  


  constructor(private convertUnit: ConvertUnitService) {}
  


}
