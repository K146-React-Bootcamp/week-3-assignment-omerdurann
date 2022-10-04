const counterEl = document.querySelector("#counter");


counterEl.addEventListener("counter-change", (e) => {
  e.target.innerHTML = e.detail.count;
});

function counterChange(type) {
  switch (type) {
    case "increment":
      counterEl.dispatchEvent(
        new CustomEvent(
          "counter-change",
          {
            detail: {
              count: Number(counterEl.innerHTML) + 1,
            },
          },
          false
        )
      );
      break;
    case "decrement":
      counterEl.dispatchEvent(
        new CustomEvent(
          "counter-change",
          {
            detail: {
              count: Number(counterEl.innerHTML) - 1,
            },
          },
          false
        )
      );
    default:
      break;
  }
}
