const url = `https://zoo-animal-api.herokuapp.com`
const rand = `/animals/rand/`

$.getJSON(url + rand, (data) => {
  console.log(data)
 $('')
})





$('.gallery img').click( function () {
  const img_src = $(this).attr('src')

  // console.log(img_src)
  $(`
  <div class="lightbox">
    <img src="${img_src}">
    <div class="close">x</div>
  </div>`)
  .appendTo('body')
} )
