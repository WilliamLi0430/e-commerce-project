function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
      </div> `,
  );
}

//mass adding event listeners
const buttons = document.querySelectorAll("button");
buttons.forEach((buttons) => 
  buttons.addEventListener("click", function (event) {
    console.log(event.target.closest(".card").getAttribute("data-item"));
  })
)

//make 1 html card, comment it out
//select the container
//forEach on items to inject to screen
//select add cart buttons
