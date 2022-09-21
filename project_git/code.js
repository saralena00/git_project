const url = `https://zoo-animal-api.herokuapp.com`
const rand = `/animals/rand/`

$.getJSON(url + rand, (data) => {
  console.log(data)
  $('.gallery').html(`<img src="${data.image_link}">`)

})




