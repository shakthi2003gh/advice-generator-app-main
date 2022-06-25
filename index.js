const fetchAdvice = async () => {
  const response = await fetch("https://api.adviceslip.com/advice");
  const data = await response.json();

  display(data.slip.id, data.slip.advice);
};

fetchAdvice();

let previousId = 0;

function display(id, advice) {
  if (id != previousId) {
    previousId = id;
    document.getElementById("id").innerText = `${id}`;
    document.querySelector(".advice").innerText = `${advice}`;
  } else fetchAdvice();
}
