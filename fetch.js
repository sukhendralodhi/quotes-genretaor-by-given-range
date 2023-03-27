const btn = document.getElementById("get-quotes");
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes";

const getQuotes = (e) => {
  e.preventDefault();
  if (number.value.length === 0) {
    alert("Please enter the number !");
  } else {
    fetch(URL)
      .then((response) => response.json())
      .then((quotes) => {
        shuffle(quotes);
        let output = "";

        for (let i = 0; i <= quotes.length; i++) {
          if (i == number.value) {
            break;
          }
          output += `
                        <li class="py-2"><strong>Quote:</strong> ${quotes[i].text}</li>
                        <li class="py-2"><strong>Author:</strong> ${quotes[i].author}</li>
                        <br/>
                        <hr class="w-full h-px my-2 bg-gray-200 border-0 rounded dark:bg-gray-700">
                    `;
        }
        document.querySelector(".quotes").innerHTML = output;
      });
  }
};

btn.addEventListener("click", getQuotes);

const shuffle = (quotes) => {
  let CI = quotes.length,
    tempValue,
    randomIndex;

  // while element exist in array
  while (CI > 0) {
    randomIndex = Math.floor(Math.random() * CI);
    // decrease value of CI
    CI--;
    // swap value
    tempValue = quotes[CI];
    quotes[CI] = quotes[randomIndex];
    quotes[randomIndex] = tempValue;
  }
  return quotes;
};
