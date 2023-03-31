let mainarray = ["scissors", "paper", "rock", "lizard", "spock"];
let getallcricles = document.querySelectorAll(".maingame .circle");
let maingame = document.querySelector(".maingame");
let nextStep = document.querySelector(".next-step");
let circles = Array.from(getallcricles);
let scoretext=document.querySelector(".flied .score .score-text h1")
let score = 0;
scoretext.innerHTML = score;

let mychoose = null;
let Computerchoose = null;
let text = "";

document.querySelector("body > button").addEventListener("click", function () {
  document.querySelector(".RullesBook").classList.remove("end")
})


document.querySelector(".RullesBook .Rules-title img").addEventListener("click", function () {
  document.querySelector(".RullesBook").classList.add("end")
})

circles.forEach((one) => {
  one.addEventListener("click", function () {
    mychoose = one.dataset.state;
    let random=Math.floor(Math.random()*mainarray.length)
    Computerchoose = mainarray[random];
    maingame.classList.add("end");
    nextStep.classList.remove("end");
    decidewhowin(mychoose, Computerchoose);
    createfromstart(mychoose,Computerchoose)
  })
})

function createfromstart(mychoose,Computerchoose) {
  nextStep.innerHTML = "";

  let part1 = document.createElement("div");
  part1.classList.add("part")
  let firsth1 = document.createElement("h1");
  firsth1.innerText = "YOU PICKED";
  part1.appendChild(firsth1);
  let circle = document.createElement("div");
  circle.classList.add("circle");
  circle.classList.add(mychoose);
  let img1 = document.createElement("img");
  img1.src = `./images/icon-${mychoose}.svg`;
  circle.appendChild(img1);
  part1.appendChild(circle);
  nextStep.appendChild(part1);


  setTimeout(() => {
    circle2.classList.remove("end");
    stillchoosing.classList.add("end");
  }, 3000);

  let part2 = document.createElement("div");
  part2.classList.add("part");
  let firsth2 = document.createElement("h1");
  firsth2.innerText = "THE HOUSE PICKED";
  part2.appendChild(firsth2);
  let circle2 = document.createElement("div");
  circle2.classList.add("circle");
  circle2.classList.add(Computerchoose);
  circle2.classList.add("end");
  let img2 = document.createElement("img");
  img2.src = `./images/icon-${Computerchoose}.svg`;
  circle2.appendChild(img2);

  let stillchoosing = document.createElement("div");
  stillchoosing.classList.add("stillchoosing");

  part2.appendChild(stillchoosing);
  part2.appendChild(circle2);
  nextStep.appendChild(part2);

  setTimeout(() => {
    let reult = document.createElement("div");
    reult.classList.add("reult");
    let reulth1 = document.createElement("h1");
    reulth1.innerText = text;
    reult.appendChild(reulth1);
    let reultbutton = document.createElement("button");
    reultbutton.innerText = "PLAY AGAIN";
    reult.appendChild(reultbutton);
    nextStep.appendChild(reult);

    reultbutton.addEventListener("click", function () {
      maingame.classList.remove("end");
      nextStep.classList.add("end");
    })
    if (text == "YOU WIN") {
      circle.classList.add("win");
      circle2.classList.remove("win");
      score++;
      scoretext.innerHTML = score;
    } else if (text == "YOU LOSE") {
      circle.classList.remove("win");
      circle2.classList.add("win");
      score--;
      scoretext.innerHTML = score;
    } else {
      circle.classList.remove("win");
      circle2.classList.remove("win");
    }
  }, 4000);
}

function decidewhowin(mychoose,Computerchoose) {
  if (mychoose ==  Computerchoose) {
    text = "DRAW";
  } else if (mychoose == "scissors" && Computerchoose == "paper") {
    text = "YOU WIN";
  }else if (mychoose == "paper" && Computerchoose == "rock") {
    text = "YOU WIN";
  }else if (mychoose == "rock" && Computerchoose == "lizard") {
    text = "YOU WIN";
  }else if (mychoose == "lizard" && Computerchoose == "spock") {
    text = "YOU WIN";
  }else if (mychoose == "spock" && Computerchoose == "scissors") {
    text = "YOU WIN";
  }

   else if (mychoose == "scissors" && Computerchoose == "lizard") {
    text = "YOU WIN";
  }else if (mychoose == "lizard" && Computerchoose == "paper") {
    text = "YOU WIN";
  }else if (mychoose == "paper" && Computerchoose == "spock") {
    text = "YOU WIN";
  }else if (mychoose == "spock" && Computerchoose == "rock") {
    text = "YOU WIN";
  }else if (mychoose == "rock" && Computerchoose == "scissors") {
    text = "YOU WIN";
  } else {
    text = "YOU LOSE";
  }
}