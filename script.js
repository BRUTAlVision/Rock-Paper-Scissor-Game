const totalScore = {
  PlayerScore: 0,
  ComputerScore: 0,
};

function GetComputerChoice() {
  const randomChoices = ["Rock", "Paper", "Scissors"];
  const RandomNumber = Math.floor(Math.random() * 3);
  return randomChoices[RandomNumber];
}

function GetResult(PlayerChoice, ComputerChoice) {
  let score;
  if (PlayerChoice == ComputerChoice) {
    score = 0;
  } else if (PlayerChoice == "Rock" && ComputerChoice == "Scissors") {
    score = 1;
  } else if (PlayerChoice == "Paper" && ComputerChoice == "Rock") {
    score = 1;
  } else if (PlayerChoice == "Scissors" && ComputerChoice == "Paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
}

function showResult(score, PlayerChoice, ComputerChoice) {
  const resultDiv = document.getElementById("result");
  const handDiv = document.getElementById("hands");
  const PlayerScoreDiv = document.getElementById("player-score");
  const ComputerScoreDiv = document.getElementById("Computer-Score");

  if (score == -1) {
    resultDiv.innerText = " You Lose ! ";
  } else if (score == 0) {
    resultDiv.innerText = "It's a Tie ! ";
  } else {
    resultDiv.innerText = " You Won ! ";
  }

  handDiv.innerText = ` ${PlayerChoice} :  ${ComputerChoice} `;
  PlayerScoreDiv.innerText = totalScore["PlayerScore"];
  ComputerScoreDiv.innerText = "  " + totalScore["ComputerScore"];
}

function onClickRps(PlayerChoice) {
  const ComputerChoice = GetComputerChoice();

  const score = GetResult(PlayerChoice, ComputerChoice);

  totalScore["PlayerScore"] += score;

  if (score == -1) {
    totalScore["ComputerScore"] += 1;
  }
  showResult(score, PlayerChoice, ComputerChoice);
}

function PlayGame() {
  const rpsButtons = document.querySelectorAll(".rpsButton");

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRps(rpsButton.value);
  });

  const endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}

function endGame() {
  totalScore["PlayerScore"] = 0;
  totalScore["ComputerScore"] = 0;
  const resultDiv = document.getElementById("result");
  const handDiv = document.getElementById("hands");
  const PlayerScoreDiv = document.getElementById("player-score");
  const ComputerScoreDiv = document.getElementById("Computer-Score");
  resultDiv.innerText = "";
  handDiv.innerText = "";
  PlayerScoreDiv.innerText = "0";
  ComputerScoreDiv.innerText = "0";
}
PlayGame();
