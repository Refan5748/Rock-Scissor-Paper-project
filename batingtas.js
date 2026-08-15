function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) {
    return "rock";
  } else if (random < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Pilih senjatamu: rock, paper, atau scissors?");
  return choice.toLowerCase();
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`Seri! Keduanya memilih ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`Kamu menang! ${humanChoice} mengalahkan ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`Kamu kalah! ${computerChoice} mengalahkan ${humanChoice}`);
    }
  }

  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Ronde ${i} ---`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);
    console.log(`Skor Sementara - Kamu: ${humanScore} | Komputer: ${computerScore}`);
  }

  console.log("\n=== HASIL AKHIR ===");
  if (humanScore > computerScore) {
    console.log("🎉 Selamat, kamu memenangkan permainan!");
  } else if (computerScore > humanScore) {
    console.log("💻 Sayang sekali, komputer memenangkan permainan!");
  } else {
    console.log("🤝 Permainan berakhir mutlak seri!");
  }
}

playGame();
