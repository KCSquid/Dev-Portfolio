function switchTab(tab) {
    document.getElementById('skills').classList.remove('activeTab');
    document.getElementById('experience').classList.remove('activeTab');
    document.getElementById(tab).classList.add('activeTab');
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
    })
}
