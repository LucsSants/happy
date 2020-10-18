//create map  
const map = L.map('mapid').setView([-10.915187,-37.6715043], 15);  

//Create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);  

//create icon
const icon = L.icon({
  iconUrl :"/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor:[29, 68],
})

let marker;

//create and add marker
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector('[name=lat]').value = lat;
  document.querySelector('[name=lng]').value = lng;

  //remove icon
  marker &&  map.removeLayer(marker)

  //ad icon layer
  marker = L.marker([lat,lng], {icon})
  .addTo(map)

})

//add o campo de photo 
function addPhotoField() {
  //pegar o container de fotos #images
  const container = document.querySelector('#images')
  //pegar o container para duplicar .new-upload
  const fieldsContainer = document.querySelectorAll('.new-upload')
  //realizar o clone  da ultima imagem adcionada 
  const newFieldContainer = fieldsContainer [fieldsContainer.length - 1].cloneNode(true)

  //verificar se o campo está vazio se SIM não adicionar ao container
  const input = newFieldContainer.children[0]
  
  if(input.value == "") {
    return
  }

  //limpar o campo antes de adicionar ao container de imagens
  input.value = ""

  //adicionar o clone ao container de #images 
  container.appendChild(newFieldContainer)
}

function deleteField(event) {
  const span = event.currentTarget 

  const fieldsContainer = document.querySelectorAll('.new-upload')
  if (fieldsContainer.length < 2) {
    //limpar o valor do campo
    span.parentNode.children[0].value = ""
    return
  }
  
  //deletar o campo 
  span.parentNode.remove()
}

//yes or no switch

function toggleSelect(event) {
  
  //take of the active class of all
  document.querySelectorAll('.button-select button')
  .forEach( (button) => {
    button.classList.remove('active')
  })

  // put the active class on the clicked button
  const button = event.currentTarget
  button.classList.add('active')

  //refresh the hidden input with the selected value 
  const inputa = document.querySelector('[name="open_on_weekends"]')
  inputa.value = button.dataset.value

   

}