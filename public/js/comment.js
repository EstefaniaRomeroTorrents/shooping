const maxStars = 5;
const options = { year: 'numeric', month: 'long' };
const list = document.getElementById('list');
let totalComments = 0;
let starsAverage = 0;

let comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [];
console.log("comments: ", comments);


function paintComment() {
  document.getElementById('list').innerHTML = "";

  starsAverage = 0;
  totalComments = 0;
  comments.forEach((item, x) => {

    starsAverage += item.stars
    document.getElementById('list').innerHTML +=
      `<li id="${x}" class="col-12">
      

            <div class="comment">
              <div class="d-flex gap-2">
              
                <img src="${item.photo}" class="img-profile">
                <div class="d-flex flex-column justify-content-center">
                  <b>${item.name}</b>
                  <span class="text-secondary">${new Date(item.date).toLocaleDateString('es-ES', options)}</span>
                </div>
                <div>
                <button class="myButton" onclick="editElement(${x})">
                              <svg class="svgTrash" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"fill="#000000">
                                  <path d="M0 0h24v24H0z" fill="none" />
                                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                              </svg>
                </button>
                <button class="myButton" onclick="deleteElement(${x})">
                              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                  <path d="M0 0h24v24H0V0z" fill="none" />
                                  <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4z" />
                              </svg>
                </button>
              </div>
              </div>
              <p class="mt-2">
                ${item.text}
              </p>
              
            </div>
    
       </li>`;

  });

  if (comments.length > 0) {
    starsAverage = starsAverage / comments.length;
    totalComments = comments.length;
  }
  paintStars(starsAverage);
  actualComment();
}


function deleteElement(id) {
  comments.splice(id, 1);
  localStorage.setItem('comments', JSON.stringify(comments));
  paintComment();
}


function editElement(id) {
  let commentEdit = comments[id].text;
  const newValue = prompt(`vas a modificar tu comentario '${commentEdit}' por tu comentario nuevo:`);
  if (newValue) {
    comments[id].text = newValue;
    localStorage.setItem('comments', JSON.stringify(comments));
    paintComment();
    editStars(id);
  } else if (newValue === null || newValue === "") {
    alert('Escriba un comentario');
    editElement(id);
  }
}


function editStars(id) {
  const question = prompt(`Quieres modificar también la puntuación?`);
  console.log(question);
  if (question === 'si' || question === 'SI') {
    let starEdit = comments[id].stars;
    const newStar = prompt(`Estas modificando tu puntuación actual: '${starEdit}'`);
    if (newStar) comments[id].stars = Number(newStar);
    localStorage.setItem('comments', JSON.stringify(comments));
    paintComment();
  } else if (question === 'no' || question === 'NO') {
      paintComment();
  } else if (question === null || question !== 'no' || question !== 'NO' || question !== 'si' || question !== 'SI') {
      alert('Introduce una respuesta válida: Si o No');
      prompt(`Quieres modificar también la puntuación?`);
      let starEdit = comments[id].stars;
      const newStar = prompt(`Estas modificando tu puntuación actual: '${starEdit}'`);
      if (newStar) comments[id].stars = Number(newStar);
      localStorage.setItem('comments', JSON.stringify(comments));
      paintComment();
    
    }
}


function actualComment() {
  if (totalComments) {
    document.getElementById('title').textContent =
      (totalComments === 1) ? '1 Comentario' : totalComments + ' Comentarios';
  } else {
    document.getElementById('title').textContent = ' 0 Comentarios';
  }
}



function paintStars(total) {
  const stars = document.getElementById('stars');
  stars.style.background = `linear-gradient(90deg, black ${total / maxStars * 100}%, #00000020 ${total / maxStars * 100}%)`;
}

function addComment(id) {

   let object = {
    name: document.getElementById('name').value,
    date: new Date(),
    photo: 'https://secure.gravatar.com/avatar/207d1e83227e41a5db23a6a2aa55145d?s=80&d=mm',
    text: document.getElementById('comment').value,
    stars: Number(document.getElementById('quantity').value),
    idProduct: id
  }
  comments.push(object);
  localStorage.setItem('comments', JSON.stringify(comments));
  paintComment();
}

paintComment();
actualComment();
paintStars(starsAverage);

function deleteComments() {

  let element = document.getElementById('list');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  localStorage.clear();
  comments = [];
  starsAverage = 0;
  document.getElementById('title').textContent = ' 0 Comentarios';
  paintStars(starsAverage);
}
