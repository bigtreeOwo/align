let count = 0;
const body = document.querySelector("body");

// reset
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

// submit
document.querySelector("#submit").addEventListener('click', () => {
  count++;
  const newDiv = document.createElement('div');
  newDiv.id = `content-${count}`;
  newDiv.classList.add("content");
  body.appendChild(newDiv);
  const order = document.createElement('div');
  order.classList.add("order");
  order.innerHTML = count;
  newDiv.appendChild(order);
});

// blastOnline
document.querySelector('#blast').addEventListener('click', (e) => {
  const inputSeq = document.querySelector("#inputSeq");
  const frame = document.createElement("iframe");
  const exitBtn = document.createElement("button");
  frame.src = "https://blast.ncbi.nlm.nih.gov/Blast.cgi?PROGRAM=blastp&PAGE_TYPE=BlastSearch&LINK_LOC=blasthome";
  frame.id = "blastOnline";
  exitBtn.id = "closeWindow"
  exitBtn.innerHTML = "Close Window";
  inputSeq.appendChild(exitBtn);
  inputSeq.appendChild(frame);
  e.target.disabled = true;
  e.target.style.color = "gray";
  document.querySelector("#closeWindow").addEventListener('click', (e) => {
    const blast = document.querySelector("#blast");
    inputSeq.removeChild(frame);
    blast.disabled = false;
    inputSeq.removeChild(e.target);
    blast.style.color = "white";
  })
})