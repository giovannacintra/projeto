function toggleMode() {
  const html = document.documentElement

  if(html.classList.contains('light')) {
    html.classList.remove('light')
  } else {
    html.classList.add('light')
  }

  //pegar a imagem
  const img= document.querySelector("#profile img")

  //substituir a img
  if (html.classList.contains('light')) {
    //se  tiver light mode, add a imagem light
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    // se tiver sem light mode, manter a img normal 
    img.setAttribute("src", "./assets/avatar.png")
  }
}