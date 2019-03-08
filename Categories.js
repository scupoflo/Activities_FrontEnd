class Category{
  constructor(id, name, picture){
    this.id = id
    this.name = name
    this.picture = picture
    Category.all.push(this)
    this.createCard()
  }
//
//   createCard(){
//   let mainTag = document.getElementsByTagName('main')[0]
//
//   let divTag = document.createElement('div')
//   divTag.classList.add('card')
//   divTag.id = `data-id ${this.id}`
//
//   let pTag = document.createElement('p')
//   pTag.innerText = `${this.name}`
//
//   let img = document.createElement('img')
//   img.src = `${this.picture}`
//
//   // let buttonTag = document.createElement('button')
//   // buttonTag.dataset.acivities = this.id
//   // buttonTag.innerText = "Add Pokemon"
//   // buttonTag.addEventListener('click',() => {addPokemonHandler(this)})
//
//
// mainTag.appendChild(divTag)
// divTag.appendChild(pTag)
// // divTag.appendChild(buttonTag)
//
//
//   let ulTag =  document.createElement('ul')
//   divTag.appendChild(ulTag)
//
//
//     let liTag =  document.createElement('li')
//     liTag.innerText = `${this.picture} (${this.desciption}) `
//
//     ulTag.appendChild(liTag)
//
//     let liButtonTag =  document.createElement('button')
//     liButtonTag.classList.add('release')
//     liButtonTag.id = `data-this-id-${this.id}`
//     liButtonTag.innerText = "Release"
//
//     liTag.appendChild(liButtonTag)
//
// }
//   // render(){
//   //   // let ul = document.querySelector('ul')
//   //   let container = document.createElement('div')
//   //   container.id = `category-${this.id}`
//   //
//   //   let overlay = document.createElement('div')
//   //   overlay.classListadd ='overlay'
//   //
//   //   let categoryName = document.createElement('div')
//   //   categoryName.classListadd= "text"
//   //   categoryName.innerText = this.name
//   //
//   //   let img = document.createElement('img')
//   //   img.src = this.picture
//   //   img.alt="Avatar"
//   //   img.classListadd="image"
//   //
//   //   overlay.appendChild(categoryName)
//   //   container.appendChild(overlay)
//   //   container.appendChild(img)
//     // ul.appendChild(div)
//
//     // let categoriesUl = document.createElement('ul')
//     // div.appendChild(hobbiesUl)
//     // //render all hobbies for each cat instance
//     // if(this.hobbies){
//     //   this.hobbies.forEach((hobby) => {
//     //     let li = document.createElement('li')
//     //     li.innerText = `${hobby.name} for ${hobby.duration} minutes`
//     //     hobbiesUl.appendChild(li)
//     //   })
//     }
//
//
// Category.all = []
