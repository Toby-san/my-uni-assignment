function submitScore() {
  const score = parseInt(document.getElementById("scoreInput").value);
  const result = document.getElementById("result");

  if (isNaN(score)) {
    result.innerText = "Bro... enter a number first 😑";
    result.style.color = "#d32f2f";
    return;
  }

  let message = "";

  if (score >= 90) {
    message = 'Daaaamn! You got A! You’re the boss! 🔥';
  } else if (score >= 80) {
    message = 'Nice work, you got B 😎';
  } else if (score >= 70) {
    message = 'You got C, not bad bro.';
  } else if (score >= 60) {
    message = 'Eh... D grade. You alive at least 💀';
  } else {
    message = 'You are so stupid 💩 You got F grade, bro. 😂';
  }

  result.innerText = message;
  result.style.color = "#000";
}
