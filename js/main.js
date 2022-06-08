window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
  
    if (scroll >100) {
      let nav = document.querySelector(".header");
      nav.classList.add("fixed");
    } else {
      let nav = document.querySelector(".header");
      nav.classList.remove("fixed");
    }
  });