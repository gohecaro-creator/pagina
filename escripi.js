const exercises = [
    
  "Comunicación  asertiva:  Es expresar lo que se piensa y se siente de manera clara, cuidando el respeto y la empatía.",
  "Comunicación pasiva: Involucra evitar el conflicto, no expresar necesidades y ceder ante los demás. ",
  " Comunicación agresiva: poner los intereses propios por encima de otras personas.",
  " Comunicación pasiva-agresiva :cuando se expresa en enojo o desacuerdo con indirectas.",
];

const quotes = [
  "Hablar con respeto abre puertas que el enojo cierra.",
  "Una buena comunicación puede evitar muchos malentendidos.",
  "Escuchar con atención también es una forma de demostrar cariño.",
  "Decir lo que sentimos con calma fortalece nuestras relaciones.",
  "La comunicación asertiva ayuda a expresar sin herir.",
  "No solo importa lo que dices, sino cómo lo dices.",
  "Hablar con sinceridad y empatía mejora cualquier relación.",
  "Una conversación tranquila puede resolver grandes conflictos.",
  "Saber escuchar es tan importante como saber hablar.",
  "La comunicación clara construye confianza entre las personas."
];

function newExercise() {
  const text = document.getElementById("exerciseText");
  const random = Math.floor(Math.random() * exercises.length);
  text.textContent = exercises[random];
}

function newQuote() {
  const quote = document.getElementById("quoteText");
  const random = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[random];
}


function setMood(title, message) {
  const moodResult = document.getElementById("moodResult");
  moodResult.innerHTML = `
    <strong>${title}</strong>
    <p>${message}</p>
  `;
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

  let timeLeft = 60;
  let timerInterval;
  let gameStarted = false;

  const requiredWords = ["moco", "tapa", "estaca", "nudo", "esperanza"];

  function startGame() {
    if (gameStarted) return;

    gameStarted = true;
    timeLeft = 60;
    document.getElementById("timer").textContent = timeLeft;
    document.getElementById("storyInput").disabled = false;
    document.getElementById("storyInput").value = "";
    document.getElementById("storyInput").focus();

    const resultBox = document.getElementById("resultBox");
    resultBox.style.display = "none";
    resultBox.classList.remove("success", "warning");

    timerInterval = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = timeLeft;

      if (timeLeft <= 0) {
        finishGame();
      }
    }, 1000);
  }

  function finishGame() {
    if (!gameStarted) return;

    clearInterval(timerInterval);
    gameStarted = false;

    const storyText = document.getElementById("storyInput").value.toLowerCase();
    document.getElementById("storyInput").disabled = true;

    let missingWords = requiredWords.filter(word => !storyText.includes(word));

    const resultBox = document.getElementById("resultBox");
    const wordCheck = document.getElementById("wordCheck");

    resultBox.style.display = "block";

    if (missingWords.length === 0) {
      resultBox.classList.add("success");
      wordCheck.innerHTML = "🎉 ¡Muy bien! Usaste todas las palabras obligatorias: <strong>moco, tapa, estaca, nudo y esperanza</strong>.";
    } else {
      resultBox.classList.add("warning");
      wordCheck.innerHTML = "⚠️ Te faltaron estas palabras: <strong>" + missingWords.join(", ") + "</strong>.";
    }
  }
