const btn = document.getElementById('get-quotes');
const number = document.getElementById('number');
const getQuotes = (e) => {
    e.preventDefault();

    if (number.value.length === 0) {
        return alert('Please enter a number!');

    } else {
        const https = new XMLHttpRequest();

        https.open("GET", "https://type.fit/api/quotes", true);

        https.onload = function() {
            if (this.status === 200) {
                const quotesData = shuffle(JSON.parse(this.responseText));
                let output = '';

                for (let i = 0; i <= quotesData.length; i++) {
                    if (i == number.value) {
                        break;
                    }
                    output += `
                        <li class="py-2"><strong>Quote:</strong> ${quotesData[i].text}</li>
                        <li class="py-2"><strong>Author:</strong> ${quotesData[i].author}</li>
                        <br/>
                        <hr class="w-full h-px my-2 bg-gray-200 border-0 rounded dark:bg-gray-700">
                    `
                }
                document.querySelector('.quotes').innerHTML = output;
            }
        }
        https.send();
    }
}

btn.addEventListener('click', getQuotes);

const shuffle = (quotes) => {
    let CI = quotes.length, tempValue, randomIndex;

    // while element exist in array 
    while(CI > 0) {
        randomIndex = Math.floor(Math.random() * CI);
        // decrease value of CI 
        CI--;
        // swap value 
        tempValue = quotes[CI];
        quotes[CI] = quotes[randomIndex];
        quotes[randomIndex] = tempValue;
    }
    return quotes;
}