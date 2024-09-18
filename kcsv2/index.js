function switchTab(tab) {
    document.getElementById('skills').classList.remove('activeTab');
    document.getElementById('experience').classList.remove('activeTab');
    document.getElementById(tab).classList.add('activeTab');
}

function changeName(e) {
    if (e.innerHTML == "KCSquid!") {
        e.innerHTML = "Jahvon!";
    } else {
        e.innerHTML = "KCSquid!";
    }
}

window.onload = () => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwHjB9XnzTw_ySTtBBHz290rGK2kMdxmZKejA_B-LK_--ZzAVB0djYKnqgCyUrjkrdb/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => document.getElementById('msg').innerHTML = "Success!")
          .catch(error => document.getElementById('msg').innerHTML = "Trouble Sending Message")

        setInterval(() => {
            document.getElementById('msg').innerHTML = "";
        }, 8500)
    });

    let btn = document.getElementById("gradient");

    onmousemove = function(e) {
        btn.style.setProperty("--x", e.clientX + "px");
        btn.style.setProperty("--y", e.clientY + "px");
    }

    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const greet = document.getElementById("greet");
    const greetings = ["Hey", "Bonjour", "Hallo", "Привет", "Hola", "Ciao", "السلام عليكم", "Selam", "Olá", "Hej", "नमस्ते", "Dzień dobry"];
    let index = 0;
    const writeLoop = async () => {
        while (true) {
            for (let i = 0; i < greetings[index].length; i++) {
                greet.innerHTML = greetings[index].substring(0, greetings[index].length - i);
                await sleep(125);
            }

            await sleep(150)
            index++;
            if (index >= greetings.length) {
                index = 0;
            }

            for (let i = 0; i < greetings[index].length; i++) {
                greet.innerHTML = greetings[index].substring(0, i + i);
                await sleep(125);
            }

            await sleep(2500)
        }
    }

    writeLoop();
}
