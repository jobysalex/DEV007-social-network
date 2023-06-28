import {
  getDocs,
  collection,
  doc,
  getDoc,
  updateDoc as updateDocument,
} from 'firebase/firestore';
// import { container } from 'webpack';
import {
  crearPost,
  ShowPost,
  borrarDoc,
  editarPost,
  actualizarPost,
  db,
  obtenerCorreoUsuario,
} from '../Firebase.js';

export const Posting = (onNavigate) => {
  const HomeDiv = document.createElement('div');

  const viewPosting = `
  <div>   
    <div><img src = "./img/Cocinar.jpg" class = "imgMain" alt = "Imagen Cocinando - Cocinemos Juntos "></div>     
  </div>
    <section class = "container" id = "container" >
      <img class = "logo3" src = "./img/Logo3.png">
      <p>¡Inspirarás a otros con tu receta!</p>
      <h4>Nombre de la Receta:</h4>
      <textarea id = "textTitle" class = "textTitle"  placeholder = "Nombre de la Receta" >  </textarea>
      <h4>Descripción:</h4>
      <textarea id = "textPost" class = "textPost" placeholder = "Comparte tu obra maestra culinaria:ingredientes, pasos, tips." >  </textarea>
      <button type ="submit" class = "buttonsPrincipals" id = "buttonPost"> Publicar </button>
      <p class = "disfruta" >¡Descubre deliciosas recetas!<p>
   </section>
   <section class = "containerShowPost" id = "containerShowPost" >
   </section>
  `;

  HomeDiv.innerHTML = viewPosting;

  // creamos la seccion 2
  const section2 = document.createElement('section');
  section2.classList.add('section2');

  // Boton Home
  const buttonHome = document.createElement('button');
  buttonHome.classList.add('buttonsPrincipals');
  buttonHome.textContent = 'Cerrar Sesión';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  // Constante para atrapar el texto.
  const containerPost = HomeDiv.querySelector('#container');
  const textPost = HomeDiv.querySelector('#textPost');
  const textTitle = HomeDiv.querySelector('#textTitle');
  const buttonPost = HomeDiv.querySelector('#buttonPost');
  const textUser = HomeDiv.querySelector('#buttonUser');
  textPost.addEventListener('keyup', () => {
    buttonPost.removeAttribute('disabled');
  });
  // variables para guardar los post editados y el id de cada post
  let editPost = false;
  let guardarId = '';

  // Mostrar Post
  const containerShowPost = HomeDiv.querySelector('#containerShowPost');
  containerShowPost.innerHTML = '';
  // eslint-disable-next-line no-shadow
  ShowPost.forEach((doc) => {
    // console.log(doc.data());
    const postDiv = document.createElement('div');
    postDiv.className = 'clasePost';
    postDiv.innerHTML = `
    <div class=verpost >
    <h3>${doc.data().title}</h3>
    <p>${doc.data().post}</p>
    <p>${doc.data().user}</p>
    
    <div class = Botones>
      <button class="btnDelete" data-id='${doc.id}'>
      🗑 Borrar
      </button>
      <button class="btnEdit" data-id='${doc.id}'>
        🖉 Editar
      </button>
      <button class="btnLikes btnLikesCount" data-id='${doc.id}'>
      <span class="likesCount">${doc.data().like.length}</span>
      &#128151 
      Likes 
      </button>
    </div>
    </div>
  `;
    containerShowPost.appendChild(postDiv);
  });

  // Borrar Post
  const btnsDelete = containerShowPost.querySelectorAll('.btnDelete');
  btnsDelete.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      // console.log(e.target.dataset.id);
      // colocar la ventana modal para confirmacion de borrar
      borrarDoc(e.target.dataset.id);
    });
  });

  // Editar Post

  const btnsEdit = containerShowPost.querySelectorAll('.btnEdit');
  btnsEdit.forEach((btn) => {
    btn.addEventListener('click', async (e) => {
      try {
        // eslint-disable-next-line no-shadow
        const doc = await editarPost(e.target.dataset.id);
        const receta = doc.data();
        console.log(receta);
        textTitle.value = receta.title; // aqui no hacia falta llamar conteiner porque ya en
        textPost.value = receta.post; // las lineas 36 y 37 hacemos el queryselector
        // ojo el if y el else se hace en el boton de publicar porque es el momento
        // hay la escucha para publicar el texto ya editado
        // comente el try y el chat ya que se usará mas adelante
        // continuar en el minuto 1:05:36 en el video. Chao jajajaja
        editPost = true;
        guardarId = doc.id;

        containerPost.buttonPost.innertext = 'Update';
        // console.log(error);
      } catch (error) {
        // console.log(error);
      }
    });
  });

  // Boton Publicar
  buttonPost.addEventListener('click', async (e) => {
    e.preventDefault();
    // console.log(textTitle.value, textPost.value);
    try {
      if (!editPost) {
        crearPost(textTitle.value, textPost.value);
        // console.log('updating');
        // aqui toca seguir por ahora ya tenemos atradao el texto para editar
      } else {
        actualizarPost(guardarId, {
          title: textTitle.value,
          post: textPost.value,
          user: textUser.value,
        }).then(() => {
          // console.log('POST ACTUALIZADO!');
          containerShowPost.innerHTML = '';
          getDocs(collection(db, 'post')).then((docs) => {
            // eslint-disable-next-line no-shadow
            docs.forEach((doc) => {
              // console.log(doc.data());
              const postDiv = document.createElement('div');
              postDiv.className = 'clasePost';
              postDiv.innerHTML = `
    <div class=verpost >
    <h3>${doc.data().title}</h3>
    <p>${doc.data().post}</p>
    <p>${doc.data().user}</p>
    <div class = Botones>
      <button class="btnDelete" data-id='${doc.id}'>
      🗑 Borrar
      </button>
      <button class="btnEdit" data-id='${doc.id}'>
        🖉 Editar
      </button>
      <button class="btnLikes btnLikesCount" data-id='${doc.id}'>
       &#128151 Likes 
      <span class="likesCount"></span>
     </button>
    </div>
    </div>
  `;
              containerShowPost.appendChild(postDiv);
            });
          });
        });
        // console.log(guardarId);
        // Mostrar Post
      }
      editPost = false;
      guardarId = '';
      //containerPost.innerText = 'Publicado';

      textTitle.value = '';
      textPost.value = '';
    } catch (error) {
      console.log(error);
    }
  });

  // Funcion Likes
  // Funcion Likes
  const btnslikes = containerShowPost.querySelectorAll('.btnLikesCount');
  btnslikes.forEach((btn) => {
    const likesCount = btn.querySelector('.likesCount');
    btn.addEventListener('click', async (e) => {
      const likedPostId = e.target.dataset.id;
      const userLikesPost = obtenerCorreoUsuario();

      if (userLikesPost) {
        const postDocRef = doc(db, 'post', likedPostId);
        const postSnapshot = await getDoc(postDocRef);

        if (postSnapshot.exists()) {
          const postLikes = postSnapshot.data().likes || [];
          const userIndex = postLikes.indexOf(userLikesPost);

          if (userIndex > -1) {
            postLikes.splice(userIndex, 1); // Eliminar el nombre de usuario del arreglo de likes
          } else {
            postLikes.push(userLikesPost); // Agregar el nombre de usuario al arreglo de likes
          }

          await updateDocument(postDocRef, { likes: postLikes });
          console.log('Likes Count:', postLikes.length);
          const numDeLikes = postLikes.length;
          likesCount.innerText = numDeLikes.toString();
        } else {
          console.log('El post no existe.');
        }
      } else {
        console.log('No se puede obtener el correo electrónico del usuario.');
      }
    });
  });

  HomeDiv.appendChild(section2);
  // section2.appendChild(buttonReadRecipe);
  section2.appendChild(buttonHome);

  return HomeDiv;
};
