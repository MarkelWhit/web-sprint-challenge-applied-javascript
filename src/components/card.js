
import axios from 'axios'


 const entryPoint = document.querySelector('.cards-container')
 const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
 const cards = document.createElement('div')
 const head = document.createElement('div')
 const auth = document.createElement('div')
 const imageCon = document.createElement('div')
 const image = document.createElement('img')
 const artist = document.createElement('span')
 
 cards.classList.add('card')
 head.classList.add('headline')
 auth.classList.add('author')
 imageCon.classList.add('img-container')
 
 head.textContent = 
 image.src = `${authorPhoto}`
 artist.textContent=`By ${author}`

 cards.appendChild(head)
 head.appendChild(auth)
 auth.appendChild(imageCon)
imageCon.appendChild(image) 
imageCon.appendChild(artist)

// <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
return cards
}
entryPoint.appendChild(Card())
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
  .then(res => {
    console.log(res.data)
  })
}

export { Card, cardAppender }
