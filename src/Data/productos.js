import {collection,doc,getDoc,getDocs,query,where,getFirestore,addDoc,updateDoc} from 'firebase/firestore';
import Cart from '../component/CartWidget/Cart';
import moment from 'moment';

export const getAll=(setListaProducto)=>{
  const db = getFirestore();
  const productoCollections = collection(db,"productos");
  getDocs(productoCollections).then((snapshop)=>{
    setListaProducto(snapshop.docs.map((doc)=>({id: doc.id,...doc.data()})));
  });

}

export const getAllByCategory=(setListaProducto,categoria)=>{
  const db = getFirestore();
  const q = query(collection(db,"productos"),where("categoria","==",categoria));
  getDocs(q).then((snapshop)=>{
    setListaProducto(snapshop.docs.map((doc)=>({id: doc.id,...doc.data()})));
  });

}

export const getById=(setItem,id)=>{
  const db = getFirestore();
  const byId = doc(db,"productos",id);
  getDoc(byId).then((snapshop)=>{
    if(snapshop.exists()){
      setItem({id:snapshop.id,...snapshop.data()});
    }
  });

}


export const createOrder=(cart,importeTotal,formulario)=>{
  const db = getFirestore();
  const col = collection(db,'orders');
  const newOrder={
    buyer:{
      name:formulario.name,
      email:formulario.email,
      telefono:formulario.telefono
    },
    items: cart,
    fechaCreacion: moment().format('YYYY/MM/DD'),
    total: importeTotal

  };
  addDoc(col,newOrder)
  //.then(({id})=>alert(`Se genero la Orden con el id ${id}`))
  .then((response)=>{
    alert(`Se genero la Orden con el id ${response.id}`)
    return response;
  })
  .then((response2)=>{
    cart.forEach((item)=>{
      const registro = doc(db,'productos',item.id);
      updateDoc(registro,{stock: item.stock-item.cantidad})
    })
  })
  .catch((error)=>console.log(error));

}

/*
export const productos = [
  {
    id: 1,
    name: "PS4 1TB",
    stock: 10,
    categoria: "consolas",
    precio: 180000,
    img: "/assets/1.png",
  },

  {
    id: 2,
    name: "Nintendo Switch",
    stock: 20,
    categoria: "consolas",
    precio: 130000,
    img: "/assets/2.png",
  },
  {
    id: 3,
    name: "PS4 Slim 500gb",
    stock: 20,
    categoria: "consolas",
    precio: 156000,
    img: "/assets/3.png",
  },
  {
    id: 4,
    name: "Xbox 360",
    stock: 0,
    categoria: "consolas",
    precio: 156000,
    img: "/assets/4.png",
  },
  {
    id: 5,
    name: "PS5",
    stock: 5,
    categoria: "consolas",
    precio: 280000,
    img: "/assets/5.png",
  },
  {
    id: 6,
    name: "Xbox Series X ",
    stock: 10,
    categoria: "consolas",
    precio: 280000,
    img: "/assets/6.png",
  },
  {
    id: 7,
    name: "Xbox One",
    stock: 10,
    categoria: "consolas",
    precio: 180000,
    img: "/assets/7.png",
  },
  {
    id: 8,
    name: "Juego Spiderman",
    stock: 10,
    categoria: "videos juegos",
    precio: 4500,
    img: "/assets/8.png",
  },
  {
    id: 9,
    name: "juego GHOST",
    stock: 10,
    categoria: "videos juegos",
    precio: 4500,
    img: "/assets/9.png",
  },
  {
    id: 10,
    name: "Pc Gamer",
    stock: 10,
    categoria: "pc",
    precio: 350000,
    img: "/assets/10.png",
  },
  {
    id: 11,
    name: "Auriculares Sony",
    stock: 10,
    categoria: "accesorios",
    precio: 7000,
    img: "/assets/11.png",
  },
];
*/