const urlParams = new URLSearchParams(window.location.search);
const id = Number(urlParams.get('id'));
/*const products = [
    {
        title: 'Soporte para monitor',
        description: 'Altura ajustable hasta 12,4 cm (en incrementos de 2,5 cm). Soporta hasta 20 kg. Los pies antideslizantes ayudan a mantener el soporte en su lugar',
        price: 1999,
        currency: '€',
        photo: 'https://m.media-amazon.com/images/I/61x+X+FNU-S._AC_SX679_.jpg'
    },
    {
        title: 'Funda compacta portátil',
        description: 'Maletín compacto y poco voluminoso para tu portátil de hasta 17,3 pulgadas (43,94 cm). Con bolsillos para almacenar ratón, teléfono móvil y otros accesorios',
        price: 2549,
        currency: '€',
        photo: 'https://m.media-amazon.com/images/I/91I7CmeK6lL._AC_SX679_.jpg'
    },
    {
        title: 'Ratón inalámbrico',
        description: 'Ratón óptico inalámbrico con 3 botones y receptor USB-A nano para ordenador portátil, de sobremesa y netbook que permite un uso fluido y preciso a un bajo precio',
        price: 1399,
        currency: '€',
        photo: 'https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_CR0%2C0%2C0%2C0_SX704_SY660_.jpg'
    }
]*/

function paintProduct(id) {

    console.log("Index:", id);
    document.getElementById('product').innerHTML += `
    <div class="col-12 col-md-6">
        <img src="${products[id].photo}" class="image-product" alt="...">
    </div>
    <div class="col-12 col-md-6">
        <h3>${products[id].title}</h3>
        <p>${products[id].description}</p>
        <p>${products[id].price / 100} ${products[id].currency}</p>
        <div class="div-contador">
            <button class="button-shoopingCard" onclick="substractElement(${id})"><i class="bi bi-dash-lg"></i></button>
            <input class="input-elements" type="text" id="${id}" value="0" size="1"  onKeyUp="updateValue(${id})"></input>
            <button class="button-shoopingCard" onclick="addElement(${id})"><i class="bi bi-plus-lg"></i></button>
        </div>
        <div class="col-12">
            <h3 class="h3_comments" id="title">
                Comentarios
            </h3>
            <span id="stars">★★★★★</span>
        </div>
        <ul class="row" id="list">
        </ul>
        <p>Afegeix un comentari:</p>

        <label for="name">Name:</label><br>
        <input class="col-12" type="text" id="name" name="name"><br>
        <label for="comment">Comment:</label><br>
        <input class="col-12" type="text" id="comment" name="comment"><br>
        <label for="quantity">Stars:</label><br>
        <input class="col-12" type="number" id="quantity" name="quantity" min="1" max="5"><br><br>
        <button class="col-12" id="submit" value="Enviar" onclick="addComment(${id})">Enviar</button><br><br>
        <button class="col-12" id="reset" value="Borrar comentaris" onclick="deleteComments(${id})">Borrar comentarios</button>
    </div>
`;

}
paintProduct(id);