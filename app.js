const corsAnywhere = 'https://cors-anywhere.herokuapp.com/'
const API_KEY = 'a08MEcCriQFZgpyBORysdkIWKtQvGdwE'
const getGifs = (searchTerm="string") => {
const url=geturl(searchTerm) 
  const results = document.querySelector('.results')
  axios.get(url).then((res) => {
    // console.log(res)
    const giphsList = res.data.data;
  
    renderList(giphsList)
    
  
    
  });
  function renderList(giphyData) {
    const giphyImage = document.querySelector('.giphy-list')
    giphyImage.innerHTML
    for (let i = 0; i < giphyData.length; i++) {
      let giphyItem = giphyData[i]
      let giphyTag = document.createElement('img')
      giphyTag.src = giphyItem.images.original.url;
      giphyTag.class="gifImage"
      giphyImage.appendChild(giphyTag)
    }
  }
}
 

const form = document.querySelector('.spaces')
    form.addEventListener('submit', e => {
      e.preventDefault()
      let input = e.target.searchbar.value
      getGifs(input);
    })


function geturl(searchTerm) {
  return `https://cors-anywhere.herokuapp.com/https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}=&offset=0&rating=&lang=en`
    }