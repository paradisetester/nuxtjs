console.log('service worker')
var tags='';
var posts='';
import axios from 'axios'
import {  API_KEY, HOST_URL } from '../config/constants'



 axios.get(HOST_URL+'/tags/?key='+API_KEY+'&limit=30&fields=slug')
			.then(response => {				
			  tags = response.data.tags			  
			  for(var i=0; i<tags.length; i++) {				 
				  workbox.routing.registerRoute(new RegExp('https://knowzone.netlify.com/tag/'+tags[i].slug), new workbox.strategies.NetworkFirst ({}), 'GET')				  
				}
			})
			.catch(error => {
			  console.log(error)
			})
			
			axios.get(HOST_URL+'/posts/?key='+API_KEY+'&limit=6&fields=slug')
			.then(response => {				
			 posts = response.data.posts
			  for(var i=0; i<posts.length; i++) {				 
				  workbox.routing.registerRoute(new RegExp('https://knowzone.netlify.com/tag/'+posts[i].slug), new workbox.strategies.NetworkFirst ({}), 'GET')				  
				}
			})
			.catch(error => {
			  console.log(error)
			})
			
	
