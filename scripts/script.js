console.log("up")

document
  .querySelector(".free-availability-on")
  .addEventListener("click", () => {
    document.querySelector(".time-table").classList.toggle("time-table-active")
  })
