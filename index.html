// Updated script.js using Unsplash Search API (With Sizing Fix + More Variety)

const accessKey = 'NxQlt49bm1UlMFxtqWQZkMjKDz1UlDz-G53spWKCMAA'; // Replace with your actual Unsplash API access key

var curGenre = 0;

var genres = [
  { id: "general", location: ["street", "nature", "cuba", "kitchen", "bath", "europe", "usa"], char: ["man", "child", "woman"], texts: ["sign", "text"] },
  { id: "kids", location: ["street", "nature", "kindergarten", "playground", "playroom"], char: ["man", "child", "woman", "mother", "father", "grandmother", "grandfather", "dog", "cat", "turtle", "elephant", "lion"], texts: ["kid sign", "kid text"] },
  { id: "mystery", location: ["night street", "night nature", "train station"], char: ["detective man", "mysterious woman"], texts: ["gun sign", "rifle text"] },
  { id: "romance", location: ["sunset", "kiss", "breakup", "wedding ring"], char: ["kiss", "breakup", "wedding ring", "sleep", "man", "woman"], texts: ["love letter", "greeting card"] },
  { id: "scifi", location: ["spaceship", "planet", "space", "futuristic"], char: ["robot", "strange", "alien"], texts: ["sign", "text"] }
];

var pics = [
  { id: "location1", key: [], h: 2 },
  { id: "location2", key: [], h: 1 },
  { id: "char1", key: [], h: 1 },
  { id: "char2", key: [], h: 1 },
  { id: "texts", key: [], h: 1 }
];

function loadPics(genreItem) {
  pics[0].key = shuffleArray(genreItem.location);
  pics[1].key = shuffleArray(genreItem.location);
  pics[2].key = shuffleArray(genreItem.char);
  pics[3].key = shuffleArray(genreItem.char);
  pics[4].key = shuffleArray(genreItem.texts);
}

function shuffleArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function toGenre(index) {
  curGenre = index;
  nextOne();
}

function getImg(keyArr, index) {
  return keyArr[index % keyArr.length];
}

function nextP(index) {
  nextPic(pics[index], index);
}

function nextPic(item, index) {
  const query = getImg(item.key, index + Math.floor(Math.random() * 10));
  const resy = Math.floor(window.innerHeight / 2 * item.h);
  const resx = Math.floor(window.innerWidth / 3);
  const url = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=30&client_id=${accessKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (!data.results || data.results.length === 0) {
        console.warn("No images found for query:", query);
        return;
      }

      const randomIndex = Math.floor(Math.random() * data.results.length);
      const imageUrl = `${data.results[randomIndex].urls.raw}&fit=crop&w=${resx}&h=${resy}`;
      const imgElement = document.getElementById(item.id);

      imgElement.src = imageUrl;
      imgElement.alt = query;
      imgElement.onclick = () => nextP(index);
      imgElement.ondblclick = () => keyWindow(index);
      imgElement.style.cursor = "pointer";
    })
    .catch(error => console.error("Image load failed:", error));
}

function nextOne() {
  document.getElementById("excol").style.display = "none";
  loadPics(genres[curGenre]);
  pics.forEach((_, index) => nextP(index));
}

// --- Restored success story logic ---

var sucs = [ 
  {id: "Hemingway", 
   urls: ["geQTycLR1Vg", "V-WK3awp5Mk", "SNQ21J28wO8", "2HxQw0_4xrs", "pdx1LH_TMJM"],
   author:"https://c1.wallpaperflare.com/preview/780/69/193/ernest-hemingway-author-journalist-fiction.jpg",
   book:"https://www.letstalknonprofit.blog/cms/img/LinkedIn-Dec2017-1.png"
  },
  {id: "Kafka", 
   urls: ["ffCgqkjBeo4", "crZXpPqwVQ4", "slbOcNlWNHA", "Gk3Ot2WwLQM", "mG28olYFgHI"],
   author: "https://www.ynetnews.com/PicServer5/2019/03/14/9120291/23214060993168640360no.jpg",
   book: "https://66.media.tumblr.com/tumblr_l6rsli89Tu1qad17po1_500.jpg"
  },
  {id: "God", 
   urls: ["X0ZVewKbl4g", "fDgdsLO1EU8", "gR_eBFetH38", "v7oWAumWyiA", "FH3nWjvia-U"],
   author: "https://img-9gag-fun.9cache.com/photo/a3dVAKv_700bwp.webp",
   book: "https://i.calameoassets.com/170728140144-60e51bf6e8f8e522731428c7d0551c1e/large.jpg"
  }
];

ids = ["location1", "char1", "location2", "char2", "texts"];

function sucStory(index) {
  for (let i = 0; i < ids.length; i++) {
    const id = ids[i];
    const resy = (id === 'location1') ? Math.floor(window.innerHeight + 48) : Math.floor(window.innerHeight / 2 + 18);
    const resx = Math.floor(window.innerWidth / 3);
    const photoId = sucs[index].urls[i];
    setStoryUrl(id, photoId, resx, resy);
  }
  document.getElementById("author").src = sucs[index].author;
  document.getElementById("book").src = sucs[index].book;
  document.getElementById("author").style.cursor = "auto";
  document.getElementById("book").style.cursor = "auto";
  document.getElementById("excol").style.display = "block";
}

function setStoryUrl(id, photoId, resx, resy) {
  const apiUrl = `https://api.unsplash.com/photos/${photoId}?client_id=${accessKey}`;
  const img = document.getElementById(id);

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.json();
    })
    .then(data => {
      img.src = `${data.urls.raw}&fit=crop&w=${resx}&h=${resy}`;
      img.alt = data.alt_description || photoId;
      img.onclick = null;
      img.style.cursor = "auto";
    })
    .catch(error => {
      console.warn("Failed to load via Unsplash API, photoId:", photoId);
      img.src = "https://source.unsplash.com/" + photoId;
      img.alt = photoId;
      img.onclick = null;
      img.style.cursor = "auto";
    });
}
