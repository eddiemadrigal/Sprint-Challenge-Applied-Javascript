// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function Cards(data) {
    // create elements
    const divCard = document.createElement('div');
    const divHeadline = document.createElement('div');
    const divAuthor = document.createElement('div');
    const divImageContainer = document.createElement('div');
    const img = document.createElement('img');
    const span = document.createElement('span');

    // create structure
    divCard.append(divHeadline, divAuthor);
    divAuthor.append(divImageContainer, span);
    divImageContainer.append(img)

    // add classes
    divCard.classList.add('card');
    divHeadline.classList.add('headline');
    divImageContainer.classList.add('img-container');

    // add data
    divHeadline.textContent = data.headline;
    img.src = data.authorPhoto;
    span.innerHTML = `By ${data.authorName}`;

    // add attributes
    img.setAttribute('style', 'width: 200px;');

    return divCard;
}

const entryPoint = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        response.data.articles.javascript.map(item => {
            entryPoint.append(Cards(item));
        })
        return response;
    })
    .then(response => {
        response.data.articles.bootstrap.map(item => {
            entryPoint.append(Cards(item));
        })
        return response;
    })
    .then(response => {
        response.data.articles.technology.map(item => {
            entryPoint.append(Cards(item));
        })
        return response;
    })
    .then(response => {
        response.data.articles.jquery.map(item => {
            entryPoint.append(Cards(item));
        })
        return response;
    })
    .then(response => {
        response.data.articles.node.map(item => {
            entryPoint.append(Cards(item));
        })
    })
    