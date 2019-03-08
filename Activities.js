class Activity{
  constructor(id, name, picture, description){
    this.id = id
    this.name = name
    this.picture = picture
    this.description = description
    Activity.all.push(this)
    // this.render()
  }

  render(){
    let ul = document.querySelector('ul')
    let div = document.createElement('div')
    div.id = `activity-${this.id}`

    let header = document.createElement('h2')
    header.innerText = this.name

    let img = document.createElement('img')
    img.src = this.picture

    let p = document.createElement('p')
    p.innerText = `Description: ${this.description}; `

    div.appendChild(header)
    div.appendChild(img)
    div.appendChild(p)
    ul.appendChild(div)

    // let categoriesUl = document.createElement('ul')
    // div.appendChild(hobbiesUl)
    // //render all hobbies for each cat instance
    // if(this.hobbies){
    //   this.hobbies.forEach((hobby) => {
    //     let li = document.createElement('li')
    //     li.innerText = `${hobby.name} for ${hobby.duration} minutes`
    //     hobbiesUl.appendChild(li)
    //   })
    }
  }

Activity.all = []
