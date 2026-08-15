// 1. Fungsi Input dengan Validasi Berlapis
function getHumanChoice() {
  let isValid = false;
  let choice = "";

  while (!isValid) {
    let input = prompt("Pilih senjatamu: rock, paper, atau scissors?");
    
    // Evaluasi 1: Cegah sistem crash jika pemain menekan 'Cancel'
    if (input === null) {
      console.warn("Game dihentikan paksa oleh pemain.");
      return null; 
    }

    // Normalisasi input (trim akan mengubah input yang isinya hanya spasi menjadi string kosong)
    choice = input.toLowerCase().trim();

    // Evaluasi 2 (BARU): Jika input kosong
    if (choice === "") {
      alert("Kosong, tolong masukkan inputnya yang sesuai!");
    }
    // Evaluasi 3: Jika input benar
    else if (choice === "rock" || choice === "paper" || choice === "scissors") {
      isValid = true; // Gembok terbuka, keluar dari loop
    } 
    // Evaluasi 4: Jika input selain dari ketiga kata tersebut
    else {
      alert(`Input "${choice}" ditolak! Kamu hanya boleh mengetik: rock, paper, atau scissors.`);
    }
  }
  
  return choice;
}

// 2. Fungsi Komputer dengan "Hard Mode" AI (Tingkat Kesulitan Dinaikkan)
function getComputerChoice(humanChoice) {
  // Komputer memiliki peluang 40% untuk curang dan mengunci kemenangan
  const isCheating = Math.random() < 0.40; 

  if (isCheating) {
    console.log("⚡ [SISTEM]: AI membaca pikiranmu...");
    if (humanChoice === "rock") return "paper";
    if (humanChoice === "paper") return "scissors";
    return "rock"; // jika human memilih scissors
  }

  // Sisa 60% probabilitas Komputer bermain normal (RNG)
  const random = Math.random();
  if (random < 0.33) return "rock";
  if (random < 0.66) return "paper";
  return "scissors";
}

// 3. Logika Utama Game
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log(`🤝 Seri! Keduanya memilih ${humanChoice}`);
    } else if (
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ) {
      humanScore++;
      console.log(`🔥 Kamu menang! ${humanChoice} menghancurkan ${computerChoice}`);
    } else {
      computerScore++;
      console.log(`💀 Kamu kalah! ${computerChoice} melibas ${humanChoice}`);
    }
  }

  console.log("=== MEMULAI ROCK PAPER SCISSORS (HARD MODE) ===");

  for (let i = 1; i <= 5; i++) {
    console.log(`\n--- Ronde ${i} ---`);
    
    const humanSelection = getHumanChoice();
    
    // Fitur Break: Jika prompt menghasilkan null (dibatalkan), hentikan siklus ronde
    if (humanSelection === null) {
      console.log("Pertandingan dibatalkan di tengah jalan.");
      break; 
    }

    // PENGECUALIAN LOGIKA: Komputer mengambil data pemain sebagai referensi (untuk fitur cheat)
    const computerSelection = getComputerChoice(humanSelection);
    
    playRound(humanSelection, computerSelection);
    console.log(`📊 Skor Sementara -> Kamu: ${humanScore} | Komputer: ${computerScore}`);
  }

  // Hasil Akhir
  console.log("\n=== HASIL AKHIR ===");
  if (humanScore > computerScore) {
    console.log("🏆 LUAR BIASA! Kamu berhasil mengalahkan AI Hard Mode!");
  } else if (computerScore > humanScore) {
    console.log("🤖 GAME OVER! AI terlalu kuat untukmu.");
  } else if (humanScore === computerScore && humanScore > 0) {
    console.log("⚖️ Pertarungan Sengit! Hasil seri mutlak.");
  } else {
    console.log("🚫 Game tidak diselesaikan.");
  }
}

// 4. Inisiasi Program
playGame();
