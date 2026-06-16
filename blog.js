async function loadTwitterFeed(){

const rssURL = "https://nitter.poast.org/synthpapi/rss";

const apiURL =
"https://api.rss2json.com/v1/api.json?rss_url=" +
encodeURIComponent(rssURL);

const container = document.getElementById("twitter-feed");

try {

const response = await fetch(apiURL);
const data = await response.json();

container.innerHTML = "";

data.items.slice(0,5).forEach(post => {

container.innerHTML += `

<div class="tweet-card">

<p>${post.title}</p>

<a href="${post.link}" target="_blank">
View Post →
</a>

</div>

`;

});

} catch(error){

container.innerHTML =
"Unable to load X updates right now.";

}

}


loadTwitterFeed();


let loadedPosts = 0;

window.addEventListener("scroll", () => {

if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 400){

addPost();

}

});


function addPost(){

if(loadedPosts >= 3) return;

const posts=[

{
title:"SoundCloud Updates",
text:"Latest tracks and uploads.",
link:"https://soundcloud.com/lovesynthpapi"
},

{
title:"Bandcamp Archive",
text:"Explore previous releases.",
link:"https://synthpapi.bandcamp.com/"
},

{
title:"YouTube Updates",
text:"New videos and visuals.",
link:"https://www.youtube.com/@synthpapi"
}

];


const post=posts[loadedPosts];

document.getElementById("blog-feed").innerHTML += `

<article class="blog-post">

<div class="post-date">Social Update</div>

<h2>${post.title}</h2>

<p>${post.text}</p>

<a href="${post.link}" target="_blank">
View →
</a>

</article>

`;

loadedPosts++;

}
