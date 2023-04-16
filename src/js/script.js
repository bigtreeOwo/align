let count = 0;
const body = document.querySelector("body");



// gap opening
const S = -11;

// gap extension
const E = -1;

const MIN = -Infinity
const amino = ['A', 'R', 'N', 'D', 'C', 'Q', 'E', 'G', 'H', 'I', 'L',
  'K', 'M', 'F', 'P', 'S', 'T', 'W', 'Y', 'V', 'B', 'Z', 'X', '*'];

const blosum = [
  [4, -1, -2, -2, 0, -1, -1, 0, -2, -1, -1, -1, -1, -2, -1, 1, 0, -3, -2, 0, -2, -1, 0, -4],
  [-1, 5, 0, -2, -3, 1, 0, -2, 0, -3, -2, 2, -1, -3, -2, -1, -1, -3, -2, -3, -1, 0, -1, -4],
  [-2, 0, 6, 1, -3, 0, 0, 0, 1, -3, -3, 0, -2, -3, -2, 1, 0, -4, -2, -3, 3, 0, -1, -4],
  [-2, -2, 1, 6, -3, 0, 2, -1, -1, -3, -4, -1, -3, -3, -1, 0, -1, -4, -3, -3, 4, 1, -1, -4],
  [0, -3, -3, -3, 9, -3, -4, -3, -3, -1, -1, -3, -1, -2, -3, -1, -1, -2, -2, -1, -3, -3, -2, -4],
  [-1, 1, 0, 0, -3, 5, 2, -2, 0, -3, -2, 1, 0, -3, -1, 0, -1, -2, -1, -2, 0, 3, -1, -4],
  [-1, 0, 0, 2, -4, 2, 5, -2, 0, -3, -3, 1, -2, -3, -1, 0, -1, -3, -2, -2, 1, 4, -1, -4],
  [0, -2, 0, -1, -3, -2, -2, 6, -2, -4, -4, -2, -3, -3, -2, 0, -2, -2, -3, -3, -1, -2, -1, -4],
  [-2, 0, 1, -1, -3, 0, 0, -2, 8, -3, -3, -1, -2, -1, -2, -1, -2, -2, 2, -3, 0, 0, -1, -4],
  [-1, -3, -3, -3, -1, -3, -3, -4, -3, 4, 2, -3, 1, 0, -3, -2, -1, -3, -1, 3, -3, -3, -1, -4],
  [-1, -2, -3, -4, -1, -2, -3, -4, -3, 2, 4, -2, 2, 0, -3, -2, -1, -2, -1, 1, -4, -3, -1, -4],
  [-1, 2, 0, -1, -3, 1, 1, -2, -1, -3, -2, 5, -1, -3, -1, 0, -1, -3, -2, -2, 0, 1, -1, -4],
  [-1, -1, -2, -3, -1, 0, -2, -3, -2, 1, 2, -1, 5, 0, -2, -1, -1, -1, -1, 1, -3, -1, -1, -4],
  [-2, -3, -3, -3, -2, -3, -3, -3, -1, 0, 0, -3, 0, 6, -4, -2, -2, 1, 3, -1, -3, -3, -1, -4],
  [-1, -2, -2, -1, -3, -1, -1, -2, -2, -3, -3, -1, -2, -4, 7, -1, -1, -4, -3, -2, -2, -1, -2, -4],
  [1, -1, 1, 0, -1, 0, 0, 0, -1, -2, -2, 0, -1, -2, -1, 4, 1, -3, -2, -2, 0, 0, 0, -4],
  [0, -1, 0, -1, -1, -1, -1, -2, -2, -1, -1, -1, -1, -2, -1, 1, 5, -2, -2, 0, -1, -1, 0, -4],
  [-3, -3, -4, -4, -2, -2, -3, -2, -2, -3, -2, -3, -1, 1, -4, -3, -2, 11, 2, -3, -4, -3, -2, -4],
  [-2, -2, -2, -3, -2, -1, -2, -3, 2, -1, -1, -2, -1, 3, -3, -2, -2, 2, 7, -1, -3, -2, -1, -4],
  [0, -3, -3, -3, -1, -2, -2, -3, -3, 3, 1, -2, 1, -1, -2, -2, 0, -3, -1, 4, -3, -2, -1, -4],
  [-2, -1, 3, 4, -3, 0, 1, -1, 0, -3, -4, 0, -3, -3, -2, 0, -1, -4, -3, -3, 4, 1, -1, -4],
  [-1, 0, 0, 1, -3, 3, 4, -2, 0, -3, -3, 1, -1, -3, -1, 0, -1, -3, -2, -2, 1, 4, -1, -4],
  [0, -1, -1, -1, -2, -1, -1, -1, -1, -1, -1, -1, -1, -1, -2, 0, 0, -2, -1, -1, -1, -1, -1, -4],
  [-4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, -4, 1],
]

// reset
document.querySelector("#reset").addEventListener('click', () => {
  let content = document.querySelectorAll(".content");
  let seq1 = document.querySelector("#longSeq");
  let seq2 = document.querySelector("#shortSeq");
  seq1.value = "";
  seq2.value = "";
  for (let i = 0; i < content.length; i++) {
    document.body.removeChild(content[i]);
  }
  count = 0;
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
  const hr = document.createElement("hr");
  newDiv.appendChild(hr)
  let seq1 = document.querySelector("#longSeq");
  let seq2 = document.querySelector("#shortSeq");
  if (seq1.value.length === 0 || seq2.value.length === 0) {
    const empty = document.createElement("span");
    empty.innerHTML = 'Empty sequence! Please retry.';
    newDiv.appendChild(empty);
  } else {
    let X;
    let Y;
    let M;
    [X, Y, M] = distance_matrix(seq1.value, seq2.value);
    [str1, str2] = backTrace(seq1.value, seq2.value, X, Y, M);
    let score = M[seq2.value.length][seq1.value.length];
    const result = document.createElement('span');
    // console.log("Alignment Score:" + score);
    // console.log(str1);
    // console.log(str2);
    result.innerHTML = `
    ${"Alignment Score:" + score}<br>
    ${str1}<br>
    ${str2}
  `;
    newDiv.appendChild(result);
  }
});

// JavaScript implements Python's range()
function range(start, end, step = 1) {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};


// reverse string
function reverse(str) {
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result;
}

// return match or mismatch score

function match(s, t, i, j) {
  const index1 = amino.indexOf(t[i - 1]);
  const index2 = amino.indexOf(s[j - 1]);
  return blosum[index1][index2]
}

// initializers for matrices

function init_x(i, j) {
  if (i > 0 && j === 0) {
    return MIN;
  } else {
    if (j > 0) {
      return S + E * j;
    } else {
      return 0;
    }
  }
}

function init_y(i, j) {
  if (j > 0 && i === 0) {
    return MIN;
  } else {
    if (i > 0) {
      return S + E * i;
    } else {
      return 0;
    }
  }
}

function init_m(i, j) {
  if (j === 0 && i === 0) {
    return 0;
  } else {
    if (j === 0 || i === 0) {
      return MIN;
    } else {
      return 0;
    }
  }
}

function distance_matrix(s, t) {
  let dim_i = t.length + 1;
  let dim_j = s.length + 1;
  X = new Array();
  Y = new Array();
  M = new Array();

  let rangeDimI = range(0, dim_i);
  let rangeDimJ = range(0, dim_j);

  let rangeDimI1 = range(1, dim_i);
  let rangeDimJ1 = range(1, dim_j);

  for (let i in rangeDimI) {
    X[rangeDimI[i]] = new Array();
    for (let j in rangeDimJ) {
      X[rangeDimI[i]][rangeDimJ[j]] = init_x(rangeDimI[i], rangeDimJ[j]);
    }
  }

  for (let i in rangeDimI) {
    Y[rangeDimI[i]] = new Array();
    for (let j in rangeDimJ) {
      Y[rangeDimI[i]][rangeDimJ[j]] = init_y(rangeDimI[i], rangeDimJ[j]);
    }
  }

  for (let i in rangeDimI) {
    M[rangeDimI[i]] = new Array();
    for (let j in rangeDimJ) {
      M[rangeDimI[i]][rangeDimJ[j]] = init_m(rangeDimI[i], rangeDimJ[j]);
    }
  }

  for (let j in rangeDimJ1) {
    for (let i in rangeDimI1) {
      X[rangeDimI1[i]][rangeDimJ1[j]] = Math.max(S + E + M[rangeDimI1[i]][rangeDimJ1[j] - 1], E + X[rangeDimI1[i]][rangeDimJ1[j] - 1])
      Y[rangeDimI1[i]][rangeDimJ1[j]] = Math.max(S + E + M[rangeDimI1[i] - 1][rangeDimJ1[j]], E + Y[rangeDimI1[i] - 1][rangeDimJ1[j]])
      M[rangeDimI1[i]][rangeDimJ1[j]] = Math.max(match(s, t, rangeDimI1[i], rangeDimJ1[j]) + M[rangeDimI1[i] - 1][rangeDimJ1[j] - 1], X[rangeDimI1[i]][rangeDimJ1[j]], Y[rangeDimI1[i]][rangeDimJ1[j]])
    }
  }
  return [X, Y, M];
}

function backTrace(s, t, X, Y, M) {
  let sequ1 = "";
  let sequ2 = "";
  let i = t.length;
  let j = s.length;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && M[i][j] === M[i - 1][j - 1] + match(s, t, i, j)) {
      sequ1 += s[j - 1];
      sequ2 += t[i - 1];
      i -= 1;
      j -= 1;
    } else if (i > 0 && M[i][j] === Y[i][j]) {
      sequ1 += "_";
      sequ2 += t[i - 1];
      i -= 1;
    } else if (j > 0 && M[i][j] === X[i][j]) {
      sequ1 += s[j - 1];
      sequ2 += "_";
      j -= 1;
    }
  }
  let sequ1r = reverse(sequ1).join(" ");
  let sequ2r = reverse(sequ2).join(" ");
  return [sequ1r, sequ2r]
}