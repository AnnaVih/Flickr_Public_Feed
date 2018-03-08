
require('bootstrap');

require('./scss/style.scss');

//Importing classes
import { GetPosts } from './fetchData';

import { PostsUI } from './postsUI';


const postsUI = new PostsUI();

/***************  GETTING POSTS  ************************
 *************************************************************/

function getPhotoPosts() {
    console.log('hi');
    //1. Make instance of GetPosts
    const photoPosts = new GetPosts();

    //2.Getting data from promises
    photoPosts.get()
              .then((postsResult) => {
                postsUI.displayPosts(postsResult);
              })
              //4.1 Catch error in case if no weather data recieved
              .catch((err) => {
                console.log(err);
            });
}


/******************  EVENT LISTENERS  ***********************
 ***********************************************************/

//On load Event listeners
document.addEventListener("DOMContentLoaded", getPhotoPosts);