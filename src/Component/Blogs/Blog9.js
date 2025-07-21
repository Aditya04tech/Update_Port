import React from 'react';
import { Link } from 'react-router-dom';
import Hbtn from '../Hbtn';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Backbtn from '../BackBtn'
function Blog9() {
  const code1 = `
      node -v
      npm -v
  `;

  const code2=`
      mkdir my-desktop-app
      cd my-desktop-app
  `;

  const code3=`
      npm init -y
  `;

 

  const code4=`
      npm install electron --save-dev
  `;

  const code5=`
      const { app, BrowserWindow } = require('electron');

      function createWindow() {
      const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
      nodeIntegration: true,
      },
      });

      win.loadFile('index.html');
      }

      app.whenReady().then(createWindow);
  `;

  const code6=`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Electron App</title>
      <style>
        body { text-align: center; font-family: Arial, sans-serif; }
       </style>
       </head>
       <body>
      <h1>Welcome to My Electron App</h1>
      <button onclick="showAlert()">Click Me</button>
      <script>
        function showAlert() {
            alert('Hello from Electron!');
        }
      </script>
      </body>
      </html>
  `;

  const code7=`
      "start": "electron ."
  `;

  const code8=`
      npm start
   `;

  const code9=`
  const fs = require('fs');
fs.writeFileSync('example.txt', 'Hello from Electron!');
  `;

  const code10=`
  fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
  `;

  const code11=`
  new Notification('Hello!', { body: 'This is a notification from Electron' });
  `;

  const code12=`
  npm install --save-dev electron-builder
  `;
  
  const code13=`
  "build": {
  "appId": "com.myapp.desktop",
  "win": { "target": "nsis" },
  "mac": { "target": "dmg" },
  "linux": { "target": "AppImage" }
}
  `;

  const code14=`
  npm run build
  `;

  return (
    <>
      <Hbtn />
      <Backbtn/>
      <div className="main-wrapper">
        <article className="blog-post px-3 py-5 p-md-5">
          <div className="container single-col-max-width">
            <header className="blog-post-header">
              <h2 className="title mb-2">How to Build Desktop Apps with HTML, CSS, and JavaScript 🚀</h2>
              <div className="meta mb-3">
                <span className="date">Published By: Aditya.R.Sukhdeve</span>
              </div>
            </header>
            <div className="blog-post-body">
              <figure className="blog-banner">
                <Link to="/blog">
                  <img className="img-fluid" src="/images/blog/img09-2.png" alt="img09" />
                </Link>
              </figure>
              <p>
              Did you know you can build powerful desktop applications using the same web technologies—HTML, CSS, and JavaScript? You don’t need to learn a new programming language like C# or Java. Instead, you can leverage your existing web development skills to create cross-platform desktop apps that run on Windows, macOS, and Linux.

In this guide, we'll explore how to build desktop applications using Electron.js, a popular framework used by companies like Slack, Microsoft, and Discord. By the end, you’ll have the knowledge to turn your web apps into full-fledged desktop applications!
              </p>
              <h3 className="mt-5 mb-3">🏆 Why Build Desktop Apps with Web Technologies?</h3>
              <p>Before we dive into the how, let's talk about the why.</p>
              <p>✅ Cross-Platform Compatibility - Build once, run anywhere (Windows, Mac, Linux).</p>
              <p>✅ Access to Native Features - Use file system, notifications, and system APIs.</p>
              <p>✅ Fast Development - Faster than traditional desktop app development.</p>
              
              <h3 className="mt-5 mb-3">🔥 Step-by-Step Guide to Building a Desktop App</h3>
              
              <h4 className="mb-3">Step 1: Install Node.js and NPM</h4>
              <p>Electron runs on Node.js, so first, install it if you haven't already:</p>
              <p>🔹 JSX lets you write HTML inside JavaScript.</p>
              <p>🔗 Download & Install Node.js - https://nodejs.org/</p>
              <p>Once installed, check the versions-Open CMD or Terminal :</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code1}
              </SyntaxHighlighter>
             


              <h4 className="mb-3">Step 2: Initialize a New Electron Project</h4>
              <p>Create a new project folder and navigate to it:</p>
               <SyntaxHighlighter language="javascript" style={dracula}>
                {code2}
              </SyntaxHighlighter>

              <p className='mb-3'>Initialize the project with NPM:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code3}
              </SyntaxHighlighter>

              <h4 className="mb-3">Step 3: Install Electron</h4>
              <p>Now, install Electron as a development dependency:</p>
               <SyntaxHighlighter language="javascript" style={dracula}>
                {code4}
              </SyntaxHighlighter>

              
              <h4 className="mb-3">Step 4: Create the Main Entry File</h4>
              <p>Inside your project folder, create a new file called main.js and add the following code:</p>
               <SyntaxHighlighter language="javascript" style={dracula}>
                {code5}
              </SyntaxHighlighter>
              <p>This script creates a new Electron window and loads an index.html file.</p>


              <h4 className="mb-3">Step 5: Create Your UI with HTML, CSS, and JavaScript</h4>
              <p>Create an index.html file and design your user interface using regular HTML and CSS.</p>
               <SyntaxHighlighter language="javascript" style={dracula}>
                {code6}
              </SyntaxHighlighter>
              <p>This script creates a new Electron window and loads an index.html file.</p>

          
              <h4 className="mb-3">Step 6: Modify package.json to Run Electron</h4>
              <p>Open package.json and add this line inside the scripts section:</p>
               <SyntaxHighlighter language="javascript" style={dracula}>
                {code7}
              </SyntaxHighlighter>
              <p>Now, start your Electron app:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code8}
              </SyntaxHighlighter>
              <p>🚀 Congratulations! You just built your first desktop app using HTML, CSS, and JavaScript! 🎉</p>


              <h4 className="mb-3">🎯 Advanced Features & Enhancementsn</h4>
              <p>Now that you have a basic Electron app running, let's explore some advanced features:</p>
              <h4 className="mb-3">🔗 File System Access</h4>
              <p>You can read/write files using Node.js modules like fs:</p>
               <SyntaxHighlighter language="javascript" style={dracula}>
                {code9}
              </SyntaxHighlighter>
              <h4 className="mb-3">🌎 Load External APIs</h4>
              <p>Fetch API works inside Electron just like a browser:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code10}
              </SyntaxHighlighter>

              <h4 className="mb-3">🔔 Desktop Notifications</h4>
              <p>Send notifications to the user:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code11}
              </SyntaxHighlighter>
             
              <h4 className="mb-3">📦 Package Your App for Distribution</h4>
              <p>Once your app is ready, use Electron Builder to package it for different platforms</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code12}
              </SyntaxHighlighter>  

              <p>Modify package.json and add:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code13}
              </SyntaxHighlighter>

              <p>Run the build command:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code14}
              </SyntaxHighlighter>
              <p>This will generate an installable .exe, .dmg, or .AppImage file for your app!</p>


             












              <figure className="blog-banner">
                <Link to="/blog">
                  <img
                    className="img-fluid"
                    src="/images/blog/img09.png" alt="img09" 
                  />
                </Link>
              </figure>



              <h3 className="mt-5 mb-3">📌 Final Thoughts</h3>
              <p>Electron makes it super easy to build desktop apps using web technologies. If you already know HTML, CSS, and JavaScript, you’re just a few steps away from creating cross-platform apps!</p>
              <h4 className="mt-3">💡 Next Steps:</h4>
          <ul className="mb-5">
          <li className="mb-2">Explore Electron's official docs: https://www.electronjs.org/docs</li>
          <li className="mb-2">Add a database like SQLite or Firebase for data storage</li>
          <li className="mb-2">Integrate native OS features like clipboard access and drag & drop</li>
       </ul>
       <p>🔥 So what are you waiting for? Start building your own desktop apps today! 🚀</p>
        




              <br />
              <h3 className="my-3"># Quote Example:</h3>
              <blockquote className="blockquote m-lg-5 py-3 ps-4 px-lg-5">
                <p className="mb-2">
                  Software development goes beyond merely writing code; it’s about shaping the future. Every significant innovation begins with a single line—so why not take that first step today?
                </p>
              </blockquote>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}

export default Blog9;
