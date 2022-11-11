import productos from "./src/component/Item/productos";
const productos2 = [
    {
      id: 1,
      name:"consola 1",
      stock:10,
      precio:100,
    },
    {
      id: 2,
      name:"consola 2",
      stock:20,
      precio:100,
    }, {
      id: 3,
      name:"consola 3",
      stock:30,
      precio:100,
    },
  ];
/*
async function getPokemons() {
    const resp = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    const data = await resp.json();
    //console.log(data);
    return data;
}

getPokemons().then((res)=>{ 
    let listaPok = res.results;
    listaPok.forEach(element => {
        console.log(element.name);   
    });
    //console.log(res.results)
});
*/
async function getPokemons() {
    console.log(productos);
    /*
    const resp = await fetch('./Data/productos.json')
    const data = await resp.json();
    //console.log(data);
    return data.results;
    */
}

/*
getPokemons().then((res)=>{ 
    res.forEach(element => {
        console.log(element);   
    });
    //console.log(res.results)
});
*/
getPokemons();
