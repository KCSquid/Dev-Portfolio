import logo from './logo.svg';
import './App.css';
import $ from 'jquery';

function App() {
  function switchTab(tab) {
    document.getElementById('skills').classList.remove('activeTab');
    document.getElementById('experience').classList.remove('activeTab');
    document.getElementById(tab).classList.add('activeTab');
  }

  function changeName() {
    const e = document.getElementById("name");
    if (e.innerHTML === "KCSquid!") {
      e.innerHTML = "Jahvon!";
    } else {
      e.innerHTML = "KCSquid!";
    }
  }

  window.onload = () => {
    window.location = "#header";
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwHjB9XnzTw_ySTtBBHz290rGK2kMdxmZKejA_B-LK_--ZzAVB0djYKnqgCyUrjkrdb/exec'
    const form = document.forms['submit-to-google-sheet']

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => document.getElementById('msg').innerHTML = "Success!")
        .catch(error => document.getElementById('msg').innerHTML = "Trouble Sending Message")

      setInterval(() => {
        document.getElementById('msg').innerHTML = "";
      }, 8500)
    });

    let btn = document.getElementById("gradient");

    onmousemove = function (e) {
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

  return (
    <>
      <div id="gradient" style={{ "--x": "1344px", "--y": "102px" }}></div>
      <a href="#aboutme" id="scroll1"><i class="fa-solid fa-chevron-down"></i></a>
      <div id="header">
        {/*<img src="background.png" id="kcs">*/}
        <div class="container">
          <div class="navbg"></div>
          <nav>
            <a href="" id="logoUrl"><h2 class="logo">KCS</h2></a>
            {/* <img class="logo" src="background.png" alt=""> */}
            <ul>
              <li><a href="#header"><i class="fa-solid fa-house"></i><br></br>Home</a></li>
              <li><a href="#aboutme"><i class="fa-solid fa-address-card"></i><br></br>About Me</a></li>
              <li><a href="#projects"><i class="fa-solid fa-code"></i><br></br>Projects</a></li>
              <li><a href="#contact"><i class="fa-solid fa-phone"></i><br></br>Contact</a></li>
            </ul>
          </nav>

          <div class="header-p">
            <p><i class="fa-solid fa-code"></i> Full Stack Developer</p>
            <h1><span id="greet">Привет</span>, I'm <span id="name" onMouseOver={() => { changeName() }}>Jahvon!</span></h1>
            <h3>Welcome ~ Dev Portfolio</h3>
          </div>
        </div>
      </div>

      <div id="about">
        <div class="container">
          <div class="row" id="aboutme">
            <div class="about1">
              <img src="https://images.unsplash.com/photo-1576836165612-8bc9b07e7778?w=500&amp;auto=format&amp;fit=crop&amp;q=60&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGV8ZW58MHx8MHx8fDA%3D"></img>
            </div>
            <div class="about2">
              <h1 class="subtitle">About Me</h1>
              Hey! I'm Jahvon Cockburn (Aka. KCSquid 🦑).<br></br>

              <strong>Proficient</strong> <li>Python 🐍,</li><li>Javascript/Node,</li><li>Java ☕,</li><li>Go 💙.</li><br></br>
              <strong>Decent</strong> with ~ <li>C++,</li><li>HTML/CSS.</li><br></br>
              <strong>Learning</strong> ~ <li>C,</li><li>C#,</li><li> Rust ⚙️.</li><br></br><br></br>

              I also do some engineering (Raspberry Pi 🥧 / Arduino)
              <div class="titles">
                <div class="links" onClick={() => { switchTab('skills') }}>Skill</div>
                <div class="links" onClick={() => { switchTab('experience') }}>Experience</div>
              </div>

              <div class="contents activeTab" id="skills">
                <ul>
                  <li><span>Front End</span><br></br>Website/Webapp Design &amp; Creation</li>
                  <li><span>Games/Apps</span><br></br>Experienced in Video Game Creation<br></br>(with partial Android Studio experience)</li>
                  <li><span>Backend</span><br></br>C/C++, Java, Go and many other languages for fullstack design</li>
                </ul>
              </div>

              <div class="contents" id="experience">
                <ul>
                  <li><span>2023 - Now</span><br></br>Active Volunteering and Team Leadership (<a href="https://www.mississaugachessclub.ca/committee/#youth-volunteers" target="_blank">MCC</a>)</li>
                  <li><span>2022-2024</span><br></br>Tutoring both children &amp; adults (Python)</li>
                  <li><span>Late 2021 - Mid 2023</span><br></br>Leading coding classes for over 5 different elementary/middle schools in my area</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="projects">
        <div class="container">
          <h1 class="subtite">Projects</h1>
          <div class="projectsList">
            <div class="project">
              <i class="fa-solid fa-language"></i>
              <h1 class="projectTitle">Z--</h1>
              <p>Z--, the Gen Z slang language. Coded in C++ and later compiled to assembly</p>
              <a href="https://github.com/KCSquid/Z--" target="_blank">Visit Repo</a>
            </div>

            <div class="project">
              <i class="fa-solid fa-staff-snake"></i>
              <h1 class="projectTitle">Snake Game</h1>
              <p>The very popularized, snake game (made in Python with Pygame)</p>
              <a href="https://github.com/KCSquid/Snake" target="_blank">Visit Repo</a>
            </div>

            <div class="project">
              <i class="fa-solid fa-hashtag"></i>
              <h1 class="projectTitle">Unbeatable TicTacToe</h1>
              <p>Unbeatable TicTacToe game using the minimax algorithm</p>
              <a href="https://github.com/KCSquid/tictactoe" target="_blank">Visit Repo</a>
            </div>

            <div class="project">
              <i class="fa-solid fa-list"></i>
              <h1 class="projectTitle">ToDo List</h1>
              <p>Simple todo list app using React JS & Tailwind</p>
              <a href="https://github.com/KCSquid/todo-list" target="_blank">Visit Repo</a>
            </div>

            <div class="project">
              <i class="fa-solid fa-face-dizzy"></i>
              <h1 class="projectTitle">Hangman</h1>
              <p>Normal Hangman, but you're actually learning new words. (Python, Terminal Based)</p>
              <a href="https://github.com/KCSquid/hangman" target="_blank">Visit Repo</a>
            </div>

            <div class="project">
              <i class="fa-solid fa-magnifying-glass"></i>
              <h1 class="projectTitle">Glassmorphism Portfolio</h1>
              <p>Check out a cool CSS spin on my portfolio! <a href="/projects/glassmorphism/index.html" target="_blank"><span className="pretty-light">Link</span></a></p>
              <a href="https://github.com/KCSquid/glassmorphism-portfolio" target="_blank">Visit Repo</a>
            </div>
          </div>
        </div>
      </div>

      <div id="contact">
        <div class="container">
          <div class="row">
            <div class="contactLeft">
              <h1 class="subtitle contactSub">Contact</h1>
              <div className="centerContact">
                <p><i class="fa-solid fa-paper-plane"></i> kcs@kcsquid.xyz</p>
                <p><i class="fa-solid fa-phone"></i> (289) 654 5080</p>
                <div class="socials">
                  <a href="https://github.com/KCSquid/" target="_blank"><i class="fa-brands fa-github"></i></a>
                  <a href="https://www.instagram.com/kcsquid/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                  <a href="https://x.com/KCSquid_" target="_blank"><i class="fa-brands fa-x-twitter"></i></a>
                  <a href="https://www.tiktok.com/@kcsquid.0" target="_blank"><i class="fa-brands fa-tiktok"></i></a>
                  <a href="https://stackoverflow.com/users/14709272/kingcodesquid" target="_blank"><i class="fa-brands fa-stack-overflow"></i></a>
                </div>
              </div>
            </div>

            <div class="contactRight">
              <form name="submit-to-google-sheet">
                <input type="text" name="Name" id="name" placeholder="Name for Contact" required=""></input>
                <input type="email" name="Email" id="email" placeholder="Where I should respond (Email)" required=""></input>
                <textarea name="Message" id="message" rows="6" placeholder="What's up? (Message)" required=""></textarea>
                <button type="submit">Send</button>
              </form>

              <span id="msg"></span>
            </div>
          </div>
        </div>

        <div class="copyright">
          <p>Copyright © KCSquid (2024-2025) &shy;  | &shy;  Thanks for visiting! &shy;  <i class="fa-solid fa-heart"></i></p>
        </div>
      </div>
    </>
  );
}

export default App;
