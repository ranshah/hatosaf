var curGenre = 0;

var genres = [
  {id: "general", 
   location: ["street", "nature", "cuba", "kitchen", "bath", "europe", "usa"],
   char: ["man", "child", "woman"],
   texts: ["sign", "text"] 
  },
  {id: "kids", 
   location: ["street", "nature", "kindergarten", "playground", "playroom"],
   char: ["man", "child", "woman", "mother", "father", "grandmother", "grandfather", "dog", "cat", "turtle", "elephant", "lion"],
   texts: ["kid%20sign", "kid%20text"]
  },
 {id: "mystery", 
   location: ["night%20street", "night%20nature", "train%20station"],
   char: ["detective&20man", "mysterious&woman"],
   texts: ["gun%20sign", "rifle%20text"]
  },
  {id: "romance", 
   location: ["sunset", "kiss", "breakup", "wedding%20ring"],
   char: ["kiss", "breakup", "wedding%20ring", "sleep", "man", "woman"],
   texts: ["love%20letter", "greeting%20card"]
  },
  {id: "scifi", 
   location: ["spaceship", "planet", "space", "futuristic"],
   char: ["robot",  "strange", "alien"],
   texts: ["sign", "text"]
  }  
]

var pics = [ 
  {id: "location1", key: [], h: 2},
  {id: "location2", key: [], h: 1},
  {id: "char1", key: [], h: 1},
  {id: "char2", key: [], h: 1},
  {id: "texts", key: [], h: 1}   
]

function loadPics(genreItem) {
  console.log(genreItem.Id);
  pics[0].key = genreItem.location;
  pics[1].key = genreItem.location;
  pics[2].key = genreItem.char;
  pics[3].key = genreItem.char;
  pics[4].key = genreItem.texts;
}

function toGenre(index) {
  curGenre=index;

  nextOne();
}
function getImg (keyArr, resx, resy) {
   key = keyArr[Math.floor(Math.random()*keyArr.length)];
newImg = "https://source.unsplash.com/" + resx + "x" + resy + "/?sig=" + getSig() + "&" + key;
  console.log(newImg);
  return newImg;
}

function getSig() {
  sig = Math.floor(Math.random()*1000);
  console.log(sig);
  return sig;
} 

function nextP(index) {
  nextPic(pics[index], index);
}

function nextPic(item, index){
  resy = Math.floor(window.innerHeight/2-26)*item.h;
  if (item.h == 2) {
    resy += 5;
  }
  resx = Math.floor(window.innerWidth/3);
  console.log(resx + "," + resy)
  alt = getImg(item.key,resx,resy);
  
  fetch(alt).then( data => {
	document.getElementById(item.id).src=data.url;    
});
  document.getElementById(item.id).alt=alt; 
  
  document.getElementById(item.id).onclick=function(){nextP(index)}; 
  document.getElementById(item.id).ondblclick=function(){keyWindow(index)};
  document.getElementById(item.id).style = "cursor:pointer";
}


function nextOne() {
  document.getElementById("excol").style = "display:none";
  loadPics(genres[curGenre]);
  pics.forEach(nextPic);
}

var sucs = [ 
  {id: "Hemingway", 
   urls: ["https://source.unsplash.com/geQTycLR1Vg", "https://source.unsplash.com/V-WK3awp5Mk", "https://source.unsplash.com/SNQ21J28wO8", "https://source.unsplash.com/2HxQw0_4xrs", "https://source.unsplash.com/pdx1LH_TMJM"],
 author:"https://c1.wallpaperflare.com/preview/780/69/193/ernest-hemingway-author-journalist-fiction.jpg",
  book:"https://www.letstalknonprofit.blog/cms/img/LinkedIn-Dec2017-1.png"},
  {id: "Kafka", 
   urls: ["https://source.unsplash.com/ffCgqkjBeo4", "https://source.unsplash.com/crZXpPqwVQ4", "https://source.unsplash.com/slbOcNlWNHA", "https://source.unsplash.com/Gk3Ot2WwLQM", "https://source.unsplash.com/mG28olYFgHI"],
  author: "https://www.ynetnews.com/PicServer5/2019/03/14/9120291/23214060993168640360no.jpg",
  book: "https://66.media.tumblr.com/tumblr_l6rsli89Tu1qad17po1_500.jpg"},
  {id: "God", 
   urls: ["https://source.unsplash.com/X0ZVewKbl4g", "https://source.unsplash.com/gR_eBFetH38", "https://source.unsplash.com/v7oWAumWyiA", "https://source.unsplash.com/fDgdsLO1EU8", "https://source.unsplash.com/FH3nWjvia-U"],
  author: "https://img-9gag-fun.9cache.com/photo/a3dVAKv_700bwp.webp",
  book: "https://p.calameoassets.com/170728140144-60e51bf6e8f8e522731428c7d0551c1e/p1.jpg"}

]

ids = ["location1", "char1", "location2", "char2", "texts"];

function sucStory(index) {
   for (i=0; i<ids.length; i++){
     id = ids[i];
     resy = Math.floor(window.innerHeight/2+18);
     if (i == 0) {
       resy = resy*2 + 5;
     }
     resx = Math.floor(window.innerWidth/3);

     url = sucs[index].urls[i] + "/" + resx + "x" + resy;
     setStoryUrl(id, url);
   }
  // add author and book
  id = "author";
  url = sucs[index].author;
  setStoryUrl(id, url);
    
  id = "book";
  url = sucs[index].book;
  setStoryUrl(id, url);
   
  // display it
  document.getElementById("excol").style = "display:block";
  
}

function setStoryUrl(id, url) {
  document.getElementById(id).alt = url;
  document.getElementById(id).src = url;
  document.getElementById(id).onclick = "javascript:void(0)";
  document.getElementById(id).style = "cursor:auto";
  
}