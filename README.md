# SHOP Game Store  - Curso React - Sergio Grittini - Comisión 34805

Este Proyecto es la entrega final del trabajo practico para la certificacion del curso de react.
Simula la venta de una tienda de consolas, juegos, accesorios.

## Componentes
### `NavBar`
    Este componete es la barra de navegacion de la aplicación.
    Esta implementado con **Boostrap** 
    Esta compuesto:
    1. Home
    2. Video Juegos (categoria)
    3. Consolas (categoria)
    4. Accesorios (categoria)
    5. PC (Categoria)
    6. Carrito de compra.

### `CartWidget`
### `ItemListContainer`
### `Item`
### `ItemCount`
### `ItemDetail`
### `ItemIMG`

### Funcionalidades implementadas
1. Inicio: Al momento de ingresar a la app en la ruta base ‘/’
2. Visualizar -como mínimo- un set de productos disponibles para la
compra.
3. Contar con algún acceso visible a la vista de carrito que debe alojarse
en el route /cart.
4. Acceder a un menú desplegable que contendrá las categorías. Al
clickear en una, debe navegar a la lista de productos de la misma
mediante un route /categories/:categoryId. Éste invocará la misma
vista que el home, pero visualizando sólamente productos de esa
categoría.
5. Flow: Al clickear un ítem del listado debe navegar a la ruta /item/:id, donde
id es el id del item (generado por firebase), y ver la descripción del producto (
foto, precio, selector de cantidad). Si se ingresa a /item/:id y el producto no
existe en firebase, debemos responder un mensaje adecuado que indique
algo relacionado a que el producto no existe.
6. Firebase:
 a. Implementar al menos dos colecciones:
7. items: catálogo completo
8. Link para foto (puede almacenarse de modo estático en
    la página en una subruta /images/:itemid )
9. Precio unitario
10. Descripción (sólo se ve en detalle)
11. Categoria (id a mano para versión estática, o id de
firebase para versión dinámica -opcional-)
12. orders: las órdenes generadas, que deben incluir los
productos, descripciones y los precios al momento de la
compra.
13. Las órdenes deben poder tener items surtidos, cada uno
con su cantidad. Por ejemplo: remeras x 2 y gorra x 1

14. El cart debe ser accesible durante toda la experiencia y tener una indicación
de la cantidad de items incluidos agregados (ej. si hay un ítem con dos
unidades y un ítem con una unidad, debe decir ‘tres’).
● Checkout mínimo:
● Items con sus cantidades
● Total de la orden
● Input para nombre, apellido y teléfono
● Input para email y lógica de repetir el email 2 veces (a excepción de
que realicen el desafío extra de auth, en ese caso no sería necesario)
15. Finalizada la orden, debo recibir mi order id con el id del objeto de firebase.
16. La navegabilidad debe ocurrir utilizando el router, y no href’s o location.
17. Por cada librería pública extra que utilices, deberás incluir en algún archivo el
link al proyecto, y una justificación de por qué agrega valor.
18. Readme.md: El archivo debe estar en el root del proyecto para dar una breve
introducción acerca de su proyecto y qué ideas o enfoque eligió para el
mismo. Si incluyó dependencias extra por npm (por fuera de las trabajadas en
clase), aparte debe hacer un resumen explicando sus decisiones.


El modelo de objetos es:
## Productos
```
    id: string
    name: string,
    stock: number,
    categoria: string,
    precio: number,
    img: string,
```

orders
{
    buyer: {
        email: string 
        name: string
        telefono: string   
    }
    fechaCreacion : date
    items[ {
                id: string
                name: string,
                stock: number,
                categoria: string,
                precio: number,
                img: string,
        }
        total: number
        ]

}


![gift pf-react](/demo%20funcionamiento.gif)
