document.addEventListener('DOMContentLoaded', function(){
  // getAllActivity()
  getAllCategories()
})



function getAllActivity(){
  fetch(`http://localhost:3000/activities`)
  .then(res => res.json())
  .then(activity => {

    let activityArray = activity.activities
    // debugger
    activityArray.map((activity) => {
      console.log(activity)
      let activityInstance = new Activity(
        activity.id, activity.name, activity.picture, activity.description)
    activityInstance.createCard()
    })
  }
)
}

function getAllCategories(){
  fetch(`http://localhost:3000/categories`)
    .then(res => res.json())
    .then(categories => {
        categories.forEach((category) => {
      // let categoryInstance = new Category(
      //   category.id, category.name, category.picture, category.activities)
        createCard(category)
    })
  }
)
}


function createCard(categoryObj){

  let mainTag = document.querySelector('main')

  let divTag = document.createElement('div')
  divTag.classList.add('card')
  divTag.id = `data-id ${categoryObj.id}`


  let pTag = document.createElement('p')
  pTag.innerText = `${categoryObj.category_name}`

  let image = document.createElement('img')
  image.src = `${categoryObj.category_picture}`
  image.height = 150;
  image.width = 200;
  image.addEventListener('click', ()=> {createActivity(categoryObj.id)})



  mainTag.appendChild(divTag)
  divTag.appendChild(pTag)
  divTag.appendChild(image)
}

  function createActivity(id){
    console.log(id)
    fetch(`http://localhost:3000/categories/${id}`)
    .then(res => res.json())
    .then(categoryObj => {
      let x = document.querySelector('.activities')
      x.innerHTML= ""
        categoryObj.activities.map(activity=>{
          renderActivities(activity)
      })

  function renderActivities(activity){
    let divTag = document.querySelector('.activities')


    let activityCard = document.createElement('div')
    activityCard.classList.add('card')
    activityCard.id = `${activity.id}`


    let pTag = document.createElement('p')
    pTag.innerText = `${activity.name}`

    let image = document.createElement('img')
    image.src = `${activity.picture}`
    image.height = 150;
    image.width = 200;

    let descriptionTag = document.createElement('p')
    descriptionTag.innerText = `${activity.description}`


    divTag.appendChild(activityCard)
    activityCard.appendChild(pTag)
    activityCard.appendChild(image)
    activityCard.appendChild(descriptionTag)

  }








      //what do we do with that data?
    //   let newActivity = new Activity(activity.id, activity.name, activity.picture, activity.description)
    //   newActivity.render()
    })
  }



//catToUpdate = {id: 1, name: "some name", fluffiness: 1, mean: boolean, picture: "http://"}
function updateCat(catToUpdate){
  fetch(`http://localhost:3000/cats/${catToUpdate.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type" : "application/json",
      "Accept" : "application/json"
    },
    body: JSON.stringify(catToUpdate)
  }).then(res => res.json())
  .then(updatedCat => {
    console.log(updatedCat)

  })
}

//id = 1
function deleteCat(id){
  fetch(`http://localhost:3000/cats/${id}`, {
    method: "DELETE"
  }).then(res => res.json())
  .then(cat => {
    document.querySelector(`#cat-${id}`).remove()
  })
}

// let buttonTag = document.createElement('button')
// buttonTag.dataset.trainerId = categoryObj.id
// buttonTag.innerText = "Add Activity"
// buttonTag.addEventListener('click',() => {createActivity(activityObj)})

// divTag.appendChild(buttonTag)


// let ulTag =  document.createElement('ul')
// divTag.appendChild(ulTag)
//
//   let liTag =  document.createElement('li')
//   liTag.Text = `${categoryObj.picture} (${categoryObj.desciption}) `

// ulTag.appendChild(liTag)
//
// let liButtonTag =  document.createElement('button')
// liButtonTag.classList.add('release')
// liButtonTag.id = `data-categoryObj-id-${categoryObj.id}`
// liButtonTag.innerText = "Release"
//
// liTag.appendChild(liButtonTag)
// }


// function render(activityObj){
  //   let mainTag = document.getElementsByTagName('main')[0]
  //
  //   let divTag = document.createElement('div')
  //   divTag.classList.add('card')
  //   divTag.id = `data-id ${categoryObj.id}`
  //
  //   let pTag = document.createElement('p')
  //   pTag.innerText = `${categoryObj.name}`
  //
  //   let buttonTag = document.createElement('button')
  //   buttonTag.dataset.trainerId = categoryObj.id
  //   buttonTag.innerText = "Add Activity"
  //   buttonTag.addEventListener('click',() => {addPokemonHandler(categoryObj)})
  //
  //
  // mainTag.appendChild(divTag)
  // divTag.appendChild(pTag)
  // divTag.appendChild(buttonTag)
//
//
//   let ulTag =  document.createElement('ul')
//   let liTag =  document.createElement('li')
//   divTag.appendChild(ulTag)
//   ulTag.appendChild(liTag)
//
//   liTag.innerText = `${activityObj.name} (${activityObj.desciption}) `
//
//
//
//   let liButtonTag =  document.createElement('button')
//   liButtonTag.classList.add('release')
//   liButtonTag.id = `data-activityObj-id-${activityObj.id}`
//   liButtonTag.innerText = "Delete"
//
//   liTag.appendChild(liButtonTag)
// }




// function addPokemonHandler(categoryObj){
  // debugger
  //
  //   fetch ('http://localhost:3000/pokemons', {
    //     method: "POST",
    //     headers: {
      //       'Content-Type': 'application/json',
      //       Accept: 'application/json'
      //     },
      //     body: JSON.stringify({trainer_id: categoryObj.id})})
      //     .then(response => response.json())
      //     .then(data => {
        //       debugger //function render pokemon
        //     })
        //
        // }
        //
        // function(){
          //
          // }
          //
          //
          //
          //
          //
          //
          // function getAddPokemonButton(trainerId){
            //   return document.querySelector(`[data-trainer-id='${trainerId}']`)}
            //  returns trainerButton Node
            // create a form and create
            // cat = {name: "some name", fluffiness: 1, mean: boolean, picture: "http://"}
            //
