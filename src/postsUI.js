'use strict';

export class PostsUI {
    constructor() {

        this.feedWrapper = document.querySelector('#feed-wrapper');
    }

    displayPosts(posts){
        //1. Create dynamic post variable
        let  dynamicPosts = '';

        //2. Get post items
        const postsItem = posts.items;

        //3. Loop over items and create html snippet
        postsItem.forEach( post => {
            dynamicPosts += `<div class="row mt-3 feed-post">
                                <div class="col-4 pl-0">
                                    <a href="${post}" target="_blank">
                                        <img class="post-image" src="${post.media.m}" />
                                    </a>
                                </div>
                                <div class="col-8">
                                    <div class="row">
                                        <div class="col-12 mt-3">
                                            <a href="">
                                                <h2>${post.title}</h2>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="row post-options">
                                        <div class="col-12 col-md-6 order-md-2 published-date">
                                            <p>Published: ${post.published}</p>
                                        </div>
                                        <div class="col-6 col-md-3 order-md-1">
                                            <p><a href="${post.link}" target="_blank" class="btn btn-outline-primary btn-sm">Post author</a></p>
                                        </div>
                                        <div class="col-6 col-md-3 order-3">
                                            <p><a href="${post.link}" class="btn btn-outline-primary btn-sm" target="_blank">View on Flickr</a></p>
                                        </div>
                                    </div>
                                </div>
                             </div>`;

        });

        //4. Add html code with content
        this.feedWrapper.innerHTML = dynamicPosts;
    }
}