let count = 0;

document.querySelector("#reset").addEventListener('click', () => {
  let input = document.querySelector("#inputSeq");
  let pyError = document.querySelectorAll(".py-error");
  let content = document.querySelectorAll(".content")
  for (let i = 0; i < pyError.length; i++) {
    input.removeChild(pyError[i]);
  }

  for (let i = 0; i < content.length; i++) {
    document.body.removeChild(content[i]);
  }
  count = 0;
});

document.querySelector("#submit").addEventListener('click', () => {
  count++;
  const newDiv = document.createElement('div');
  newDiv.id = `content-${count}`;
  newDiv.classList.add("content");
  document.querySelector("body").appendChild(newDiv);
  const order = document.createElement('div');
  order.classList.add("order");
  order.innerHTML = count;
  newDiv.appendChild(order);
});