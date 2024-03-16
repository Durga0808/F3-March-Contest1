let count = 0;
let middiv = document.getElementById("middiv");
let counter = document.getElementById("counter");
let clear=document.getElementById("clear");
let errorFlag = false;
function Increment() {
  errorFlag = true;
  const error = document.getElementById("error");
  clear.style.display="inline-block";
  if (error) {
    error.remove();
  }
  count += 1;
  counter.innerHTML = count;
}

function Decrement() {
  if (count === 0) {
    errorFlag = false;
    clear.style.display="none";
    const msg = "Error : Cannot go below 0";
    const pr = document.createElement("p");
    pr.innerHTML = msg;
    pr.style.color = "red";
    pr.id = "error";


    const error = document.getElementById("error");
    if (!error) {
      middiv.appendChild(pr);
    }
  } else {
    count -= 1;
    counter.innerHTML = count;
  }
}

function Clear(){
    count =0;
    counter.innerHTML = count;
    clear.style.display="none";
}


