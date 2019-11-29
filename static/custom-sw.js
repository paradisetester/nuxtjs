console.log('service worker');
const API_KEY = '688d1a6cb10c9e8456723dd679';
const HOST_URL = 'https://knowzone.ghostzones.ml/ghost/api/v2/content/';
var tags='';
var posts='';

fetch(HOST_URL+'/tags/?key='+API_KEY+'&limit=50&fields=slug')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
	tags = response.data.tags			  
			  for(var i=0; i<tags.length; i++) {				 
				  workbox.routing.registerRoute(new RegExp('/tag/'+tags[i].slug), new workbox.strategies.NetworkFirst ({}), 'GET')				  
				}
  })
  .catch(err => {
    // Do something for an error here
  });
  
  fetch(HOST_URL+'/posts/?key='+API_KEY+'&limit=50&fields=slug')
  .then(response => {
    return response.json()
  })
  .then(data => {    
	posts = response.data.posts
			  for(var i=0; i<posts.length; i++) {				 
				  workbox.routing.registerRoute(new RegExp('/posts/'+posts[i].slug), new workbox.strategies.NetworkFirst ({}), 'GET')				  
				}
  })
  .catch(err => {
    // Do something for an error here
  })
  
  
	
