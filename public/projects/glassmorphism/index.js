window.onload = () => {
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    const greet = document.getElementById("greet");
    const greetings = ["Hey", "Bonjour", "Hallo", "Привет", "¡Hola", "Ciao", "السلام عليكم", "Selam", "Olá", "Hej", "नमस्ते", "Dzień dobry"];
    let index = 0;
    const writeLoop = async () => {
        while (true) {
            for (let i = 0; i < greetings[index].length; i++) {
                greet.innerHTML = greetings[index].substring(0, greetings[index].length - i);
                await sleep(100);
            }

            await sleep(150)
            index++;
            if (index >= greetings.length) {
                index = 0;
            }

            for (let i = 0; i < greetings[index].length; i++) {
                greet.innerHTML = greetings[index].substring(0, i + i);
                await sleep(100);
            }

            await sleep(2500)
        }
    }

    writeLoop();
}