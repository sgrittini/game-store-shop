let valor = 4;
const ages = [4, 12, 4, 20];
/*
function checkAge(age) {
    return age == valor
    
}
*/

function buscarForEach(valor){
    let resultado=new Array();
    ages.forEach(element => {
        if (element == valor){
            resultado.push(element);
        }
        
          
        }
        )
        return resultado;
    }

function buscar(valor){
    let resultado=new Array();
  
    for (let index = 0; index < ages.length; index++) {
        const element = ages[index];
        if (element == valor){
            resultado.push(element);
        }

        
    }
        return resultado;
    }


    function sum(x, y, z) {
        return x + y + z;
      }
      
      const numbers = [1, 2, 3];
      
      console.log(sum(...numbers));
      // expected output: 6
      
      console.log(sum.apply(null, numbers));
      // expected output: 6


      var numbers2 = [5, 6, 2, 3, 7];

/* using Math.min/Math.max apply */
//console.log("Max:"+Math.max.apply(null, numbers2)); /* This about equal to Math.max(numbers[0], ...) or Math.max(5, 6, ..) */
//console.log("Min:"+ Math.min.apply(null, numbers2));

//console.log("Min2:"+ Math.min(...numbers2));



console.log(`el valor encontrado por find es: ${ages.find((x)=>x==valor)}`);
console.log(`el valor encontrado en buscarForEach es: ${buscarForEach(valor)}`);
console.log(`el valor encontrado en buscar es: ${buscar(valor)}`);
