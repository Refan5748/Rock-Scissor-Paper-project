console.log("hello wak");

// Fungsi pilihan komputer (random)
function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);

  if (random === 0) return "rock";
  if (random === 1) return "paper";
  return "scissors";
}

// Fungsi input manusia
function getHumanChoice() {
  let choice = prompt("Masukkan pilihan: rock, paper, scissors");
  return choice.toLowerCase();
}

// Fungsi 1 ronde
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Seri! Pilihan sama:", humanChoice);
    return "tie";
  }

  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`Kamu menang! ${humanChoice} mengalahkan ${computerChoice}`);
    return "human";
  } else {
    console.log(`Kamu kalah! ${computerChoice} mengalahkan ${humanChoice}`);
    return "computer";
  }
}

// Fungsi game 5 ronde
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Ronde ${i} ---`);

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    const result = playRound(humanChoice, computerChoice);

    if (result === "human") humanScore++;
    else if (result === "computer") computerScore++;
  }

  console.log("\n=== HASIL AKHIR ===");
  console.log("Skor Kamu:", humanScore);
  console.log("Skor Komputer:", computerScore);

  if (humanScore > computerScore) {
    console.log("🎉 Kamu MENANG!");
  } else if (humanScore < computerScore) {
    console.log("💻 Komputer MENANG!");
  } else {
    console.log("🤝 Seri!");
  }
}

// Jalankan game
playGame();