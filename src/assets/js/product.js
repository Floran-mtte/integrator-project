//gallery
const galleryItems = document.getElementsByClassName("gallery__item");
const galleryProduct = document.getElementsByClassName("gallery__product");

//colors
const colorItems = document.getElementsByClassName("color__item");
const galleryPalette = document.getElementsByClassName("gallery__tabs");

for (let item of galleryItems) {
  item.addEventListener('click', function(elem) {
    //update current image
    let current = document.getElementsByClassName("current-image");
    current[0].classList.remove("current-image");
    elem.path[0].classList.add("current-image");

    //update product photos
    for(let product of galleryProduct) {
      product.src = elem.path[0].src;
    }
  })
}

for (let color of colorItems) {
  color.addEventListener('click', function(elem) {
    //update current color
    let current = document.getElementsByClassName("color--current");
    current[0].classList.remove("color--current");
    elem.path[0].classList.add("color--current");

    let currentPalette = document.getElementsByClassName("current-palette");
    for(let palette of galleryPalette) {
      for(let className of palette.classList) {
        if(className === elem.path[0].dataset.color) {

          //reset color
          let current = document.getElementsByClassName("current-image");
          current[0].classList.remove("current-image");
          palette.childNodes[1].childNodes[1].childNodes[1].classList.add("current-image");

          //change the palette
          currentPalette[0].classList.remove("current-palette");
          palette.classList.add("current-palette");

          //update titles
          let colorTitle = document.getElementsByClassName("current-color");
          for (let title of colorTitle) {
            title.textContent = className.charAt(0).toUpperCase() + className.slice(1);
          }

          //update product photos
          let src = palette.childNodes[1].childNodes[1].childNodes[1].src;
          for(let product of galleryProduct) {
            product.src = src;
          }
        }
      }
    }
  })
}
