const buttonScrollTop = document.getElementById("button-scroll-top-id")

buttonScrollTop.onclick = () => {
  document.body.scrollIntoView({
    behavior: "smooth"
  });
}