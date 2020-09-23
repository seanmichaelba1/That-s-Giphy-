const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const API_KEY = 'S1sHTPi1WLsuzi3wmtKSLbU79vt6r2FY'


const getGifs = (
  url = `https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?api_key=S1sHTPi1WLsuzi3wmtKSLbU79vt6r2FY&q=phrase&limit=25&offset=0&rating=pg-13&lang=en`) => {
  const getURL=`${corsAnywhere}${url}`
  const headers = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      "Origin": "*"
  }
}
  const results = document.querySelector('.results')
  axios.get(url, headers).then((res) => {
    console.log(res)
    const giphsList = res.data.data;
    // console.log(response);
    giphsList.forEach((gif) => {
      let image = document.createElement('img')
      image.crossOrigin = 'anonymous'
      image.src = gif.url
      results.appendChild(image)
      console.log(gif.image)
      console.log(gif.title);
      const giphysDiv = document.querySelector(".giphys");
      const gifsDiv = document.createElement("div");

      const gifPic = document.createElement('p')
      const button = document.querySelector('button')
      button.addEventListener('click', async () => {
        let input = input.value
      })
      
    });
    


  });
};

getGifs();