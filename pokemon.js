  const pokeBtn =document.querySelector('#pokeBtn')

pokeBtn.addEventListener('click',getName)

async function getName(){
     try{ 
        const getPokemanStats = await axios.get('https://pokeapi.co/api/v2/pokemon/')
              .then(res=> res.data.results)
              .then(data =>{    
                  console.log(data);
                  data.map(pokeStats =>{
                      getStats(pokeStats)
                    })
                    return data
                })
    } catch(error){
        console.error(error)
    }

}

const getMainContainer = document.querySelector('#mainContainer')
const getStats = async (charStats) => {
    try{
        const inStats =await axios.get(charStats.url)
              .then(res => res.data)
              .then(data => {
                  console.log()

                  //<div class="card" style="width: 18rem;">

                  const card = document.createElement('div')
                      card.className = 'card'

                 //<img src="..." class="card-img-top" alt="...">
                  const frontShiny = data.sprites.front_shiny
                  const img = document.createElement('img')
                       img.src = frontShiny
                       img.className = 'card-img-top'
                  card.append(img)
                  
                //<div class="card-body">
                  const carBody = document.createElement('div')
                         carBody.className = 'card-body'
                //<h5 class="card-title">Card title</h5>
                  const h5E1 = document.createElement('h5')
                  h5E1.className = 'card-title'
                  h5E1.textContent = charStats.name
                  carBody.append(h5E1)
                 // console.log(charStats.name)

                //p element.card-text

                  const pE1 = document.createElement('p')
                        pE1.className = 'card-text'
                     //console.log(data.types)
                     pE1.textContent = data.types.map(type =>{
                         console.log(type.type.name)
                         return ' '+ type.type.name
                     })   
                        carBody.append(pE1)


                        
                    card.append(carBody)

                  getMainContainer.append(card)         

              })
    } catch (error) {
        console.error(error)
    }
}


// https://pokeapi.co/api/v2/pokemon/

