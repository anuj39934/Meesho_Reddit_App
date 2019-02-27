const serverUrl = {
  url: "https://www.reddit.com/r/",
  formate: ".json",
  subreddits: [
    "alternativeart",
    "pics",
    "gifs",
    "adviceanimals",
    "cats",
    "images",
    "photoshopbattles",
    "hmmm",
    "all",
    "aww"
  ]
};

function fetchReddits(){
    let promisesArr = [];
    for (let item of serverUrl.subreddits) {
      let url = serverUrl.url + item + serverUrl.formate;
      promisesArr.push(fetch(url));
    }
    //Promise.all(promisesArr)
    fetch("https://www.reddit.com/r/cats.json ")
    .then(response => response.json())
      .then(function(response) {
        if (response) {
            postMessage({
              page: Object.assign({}, {
                ok: true,
                data : response
              })
            });
          }
      });
}

onmessage = function(e) {
  fetchReddits();
};
