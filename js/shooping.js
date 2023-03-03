
const products = [
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
]
let totalCounter = 0;
products.forEach((item, i) => {
    paintProduct(item,i);
});

function paintProduct(item,i) {
    
    console.log("Index:",i);
    if(!document.getElementById('list')) return true;

        document.getElementById('list').innerHTML += `
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 d-flex">
            <div class="card">
                <div class="parent-img">
                    <img src="${item.photo}" class="image" alt="...">
                </div>
                <div class="card-body">
                    <a href="products.html?id=${i}" target="_blank"><h5 class="card-title">${item.title}</h5></a>
                    <a href="products.html?id=${i}" target="_blank"><p class="card-text block-ellipsis">${item.description}</p></a>
                    <span class="price">${item.price / 100} ${item.currency}</span>
                    
                    <div class="div-contador">
                        <button class="button-shoopingCard" onclick="substractElement(${i})"><i class="bi bi-dash-lg"></i></button>
                        <input class="input-elements" type="text" id="${i}" value="0" size="1" onKeyUp="updateValue(${i})"></input>
                        <button class="button-shoopingCard" onclick="addElement(${i})"><i class="bi bi-plus-lg"></i></button>
                    </div>
                    
                </div>
            </div>
        </div>`;

}
function addElement(i){
    
    
    let total = 0;  
        
    total = parseInt(document.getElementById(i).value);
    total = total + 1;
    document.getElementById(i).value = total;
    updateTotal()
}
function substractElement(i){
    
    let total = 0;  
    total = parseInt(document.getElementById(i).value);
    total = total - 1;
    if(total >= 0)document.getElementById(i).value = total;
    updateTotal()
}
function paintTotal() {
    document.getElementById("elements").value = totalCounter;
}

function updateValue(i) {
    console.log("valor:",i);

    let current = document.getElementById(i).value;
    console.log("current:",current);
    if (current < 0) {
      document.getElementById(i).value = 0;
    }
    updateTotal();
}

function updateTotal() {
    let inputValues = 0;

    products.map((product, index) => {
        console.log(index);
       if(document.getElementById(index)) 
       inputValues += Number(document.getElementById(index).value);
    });
    totalCounter = inputValues;
    paintTotal();
}

// updateTotal()