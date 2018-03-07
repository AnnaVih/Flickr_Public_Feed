'use strict';

//Class for getting posts from API
class GetPosts {
    constructor() {
        this.url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=space&tagmode=all&format=json&nojsoncallback=1"
    }
    

     //Fetch posts from Api
     async get() {
        const response = await fetch(this.url);

        const responseData = await response.json();

        return responseData;
    }
}

//Export class
export { GetPosts }