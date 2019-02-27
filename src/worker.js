//import { serverUrl } from "../src/Constants/config";

self.onmessage = function(e) {
  console.log("starts loading....");
  let promisesArr = [];
  for (let item of serverUrl.subreddits) {
    let url = serverUrl.url + item + serverUrl.formate;
    promisesArr.push(fetch(url));
  }
  Promise.all(promisesArr).then(function(values) {
    console.log(JSON.stringify(values));
    console.log("Loading finished....");
    self.postMessage("from worker hello");
  });
};
