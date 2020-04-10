// Con esto indicamos que cuando todo el dom este cargado se hara lo demas
// https://developer.mozilla.org/es/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', ()=>{

let resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

// Ahora creamos un arreglo de las cartas
const cardArray = [
    {
        name:'dog',
        img: 'images/dog.jpg'
    },
    {
        name:'dog',
        img: 'images/dog.jpg'
    },
    {
        name:'tech',
        img: 'images/tech.jpeg'
    },
    {
        name:'tech',
        img: 'images/tech.jpeg'
    },
    {
        name:'flower',
        img: 'images/flower.jpg'
    },
    {
        name:'flower',
        img: 'images/flower.jpg'
    },
    {
        name:'cat',
        img: 'images/cat.jpg'
    },
    {
        name:'cat',
        img: 'images/cat.jpg'
    },
    {
        name:'people',
        img: 'images/people.jpeg'
    },
    {
        name:'people',
        img: 'images/people.jpeg'
    },
    {
        name:'tower',
        img: 'images/tower.jpg'
    },
    {
        name:'tower',
        img: 'images/tower.jpg'
    }
]

// El querySelector(), devuelve el primer elemento del documento, que coincida con el grupo especificado
// https://developer.mozilla.org/es/docs/Web/API/Document/querySelector
const grid = document.querySelector('.grid')

function createBoard(){
    for(let i = 0; i < cardArray.length; i++){
        let card = document.createElement('img')
        card.setAttribute('src', 'images/grey.jpg')
        card.setAttribute('data-id',i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const cardOne = cardsChosenId[0]
    const cardTwo = cardsChosenId[1]
    if(cardsChosen[0] === cardsChosen[1]){
        cards[cardOne].setAttribute('src','images/blank.jpg')
        cards[cardTwo].setAttribute('src','images/blank.jpg')
        cardsWon.push(cardsChosen)
        console.log(cardsWon)
    }else{
        cards[cardOne].setAttribute('src','images/grey.jpg')
        cards[cardTwo].setAttribute('src','images/grey.jpg')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = 'Ganaste!'
    }
}

function flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)

    if(cardsChosenId.length == 2){
        setTimeout(checkForMatch,500)
    }
}

createBoard()


})