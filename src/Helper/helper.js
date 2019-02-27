import serverUrl from "../Constants/config";

const Helper = {
  getData: redditName => {
    let url = serverUrl.url + redditName + serverUrl.formate;
    return fetch(url)
      .then(response => {
        return response.json();
      })
      .then(resData => {
        return resData;
      });
  }
};

export default Helper;
