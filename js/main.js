const inputBtn = document.querySelectorAll(".btn");
const resetBtn = document.getElementById("resetBtn");

let flag = 1;

inputBtn.forEach((val) => {
  val.addEventListener("click", (e) => {
    if (flag == 1) {
      e.target.value = "O";
      e.target.style.color = "green";
      e.target.disabled = true;
      flag = 0;
      checkFunc();
    } else {
      e.target.value = "X";
      e.target.style.color = "red";
      e.target.disabled = true;
      flag = 1;
      checkFunc();
    }
  });
});

function checkFunc() {
  const btn1 = document.getElementById("btn1");
  const btn2 = document.getElementById("btn2");
  const btn3 = document.getElementById("btn3");
  const btn4 = document.getElementById("btn4");
  const btn5 = document.getElementById("btn5");
  const btn6 = document.getElementById("btn6");
  const btn7 = document.getElementById("btn7");
  const btn8 = document.getElementById("btn8");
  const btn9 = document.getElementById("btn9");

  if (btn1.value == "O" && btn2.value == "O" && btn3.value == "O") {
    alert("player 1 Win");
    document.querySelector(".result").innerHTML = "&check; Player 1 Win";
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
  } else if (btn1.value == "X" && btn2.value == "X" && btn3.value == "X") {
    alert("Player 2 win");
    document.querySelector(".result").innerHTML = "&check; Player 2 Win";
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
  } else if (btn4.value == "O" && btn5.value == "O" && btn6.value == "O") {
    alert("Player 1 win");
    document.querySelector(".result").innerHTML = "&check; Player 1 Win";
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
  } else if (btn4.value == "X" && btn5.value == "X" && btn6.value == "X") {
    alert("Player 2 Win");
    document.querySelector(".result").innerHTML = "&check; Player 2 Win";
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
  } else if (btn7.value == "O" && btn8.value == "O" && btn9.value == "O") {
    alert("Player 1 win");
    document.querySelector(".result").innerHTML = "&check; Player 1 Win";
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
  } else if (btn7.value == "X" && btn8.value == "X" && btn9.value == "X") {
    alert("Player 2 Win");
    document.querySelector(".result").innerHTML = "&check; Player 2 Win";
    btn4.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn1.disabled = true;
    btn2.disabled = true;
    btn3.disabled = true;
  } else if (btn1.value == "O" && btn4.value == "O" && btn7.value == "O") {
    alert("Player 1 win");
    document.querySelector(".result").innerHTML = "&check; Player 1 Win";
    btn2.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn3.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
  } else if (btn1.value == "X" && btn4.value == "X" && btn7.value == "X") {
    alert("Player 2 Win");
    document.querySelector(".result").innerHTML = "&check; Player 2 Win";
    btn2.disabled = true;
    btn5.disabled = true;
    btn6.disabled = true;
    btn3.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
  } else if (btn2.value == "O" && btn5.value == "O" && btn8.value == "O") {
    alert("Player 1 win");
    document.querySelector(".result").innerHTML = "&check; Player 1 Win";
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn9.disabled = true;
  } else if (btn2.value == "X" && btn5.value == "X" && btn8.value == "X") {
    alert("Player 2 Win");
    document.querySelector(".result").innerHTML = "&check; Player 2 Win";
    btn1.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn9.disabled = true;
  } else if (btn3.value == "O" && btn6.value == "O" && btn9.value == "O") {
    alert("Player 1 win");
    document.querySelector(".result").innerHTML = "&check; Player 1 Win";
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
  } else if (btn3.value == "X" && btn6.value == "X" && btn9.value == "X") {
    alert("Player 2 Win");
    document.querySelector(".result").innerHTML = "&check; Player 2 Win";
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn5.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
  } else if (btn1.value == "O" && btn5.value == "O" && btn9.value == "O") {
    alert("Player 1 win");
    document.querySelector(".result").innerHTML = "&check; Player 1 Win";
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
  } else if (btn1.value == "X" && btn5.value == "X" && btn9.value == "X") {
    alert("Player 2 Win");
    document.querySelector(".result").innerHTML = "&check; Player 2 Win";
    btn2.disabled = true;
    btn3.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn7.disabled = true;
    btn8.disabled = true;
  } else if (btn3.value == "O" && btn5.value == "O" && btn7.value == "O") {
    alert("Player 1 win");
    document.querySelector(".result").innerHTML = "&check; Player 1 Win";
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
  } else if (btn3.value == "X" && btn5.value == "X" && btn7.value == "X") {
    alert("Player 2 Win");
    document.querySelector(".result").innerHTML = "&check; Player 2 Win";
    btn1.disabled = true;
    btn2.disabled = true;
    btn4.disabled = true;
    btn6.disabled = true;
    btn8.disabled = true;
    btn9.disabled = true;
  } else if (
    (btn1.value == "X" || btn1.value == "O") &&
    (btn2.value == "X" || btn2.value == "O") &&
    (btn3.value == "X" || btn3.value == "O") &&
    (btn4.value == "X" || btn4.value == "O") &&
    (btn5.value == "X" || btn5.value == "O") &&
    (btn6.value == "X" || btn6.value == "O") &&
    (btn7.value == "X" || btn7.value == "O") &&
    (btn8.value == "X" || btn8.value == "O") &&
    (btn9.value == "X" || btn9.value == "O")
  ) {
    alert("Match Tied");
    document.querySelector(".result").innerHTML = "Match Tied";
  }
}

resetBtn.addEventListener("click", () => {
  inputBtn.forEach((res) => {
    res.value = "";
    res.disabled = false;
    document.querySelector(".result").innerHTML = "";
  });
});
