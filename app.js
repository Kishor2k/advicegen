window.onload = () => {
  fetchUrl();
};
const diceBtn = document.querySelector('.dice');
const adviceId = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
diceBtn.addEventListener('click', () => {
  fetchUrl();
});

function fetchUrl() {
  let url = 'https://api.adviceslip.com/advice';
  fetch(url)
    .then((response) => response.json())
    .then((advice) => showAdvice(advice))
    .catch((error) => {
      console.log(error);
    });
  function showAdvice(adviceSlip) {
    console.log(adviceSlip);
    adviceId.innerText = adviceSlip.slip.id;
    adviceText.innerText = `"${adviceSlip.slip.advice}"`;
  }
}
