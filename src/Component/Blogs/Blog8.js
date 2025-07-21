import React from 'react';
import { Link } from 'react-router-dom';
import Hbtn from '../Hbtn';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import Backbtn from '../BackBtn'
function Blog8() {
  const codeString = `
  function greet() {
    console.log("Hello, Aditya!");
  }
  greet();
  `;

  const code2=`
  function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
  `;

  const code3=`
  function Form() {
  const [input, setInput] = useState("");
  return (
    <input value={input} onChange={(e) => setInput(e.target.value)} />
  );

}
  `;

  const code4=`
 useEffect(() => {
  console.log("Component mounted!");
}, []);
  `;

  const code5=`
 <BrowserRouter>, <Routes>, and <Link>

 import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
  `;

  const code6=`
  useEffect(() => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => setPosts(data));
}, []);
  `;

  return (
    <>
      <Hbtn />
      <Backbtn/>
      <div className="main-wrapper">
        <article className="blog-post px-3 py-5 p-md-5">
          <div className="container single-col-max-width">
            <header className="blog-post-header">
              <h2 className="title mb-2">Learn React in 24 Hours: A Fast-Track Guide for Beginners 🚀</h2>
              <div className="meta mb-3">
                <span className="date">Published By: Aditya.R.Sukhdeve</span>
              </div>
            </header>
            <div className="blog-post-body">
              <figure className="blog-banner">
                <Link to="/blog">
                  <img className="img-fluid" src="/images/blog/img08.png" alt="img08"  />
                </Link>
              </figure>
              <p>
                React is one of the most popular JavaScript libraries for building modern web applications. If you want to master the basics in just 24 hours, this guide is for you! Let's break it down into easy, digestible steps.
              </p>
              <h3 className="mt-5 mb-3">🔥 Hour 1-2: Setting Up Your Environment</h3>
              <p>Before diving into React, set up everything you need:</p>
              <p>✅ Install Node.js and npm (Package Manager)</p>
              <p>✅ Use npx create-react-app my-app to create a React project</p>
              <p>✅ Run cd my-app && npm start to launch your first React app 🎉</p>
              
              <h3 className="mt-5 mb-3">🚀 Hour 3-5: Understanding JSX & Components</h3>
              <p>React uses JSX (JavaScript XML) to create UI elements. Learn how it works:</p>
              <p>🔹 JSX lets you write HTML inside JavaScript.</p>
              <p>🔹 Components are reusable UI building blocks (functional & class components).</p>
              <p>🔹 Example:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {codeString}
              </SyntaxHighlighter>
              <p>Try creating your own components! 💡</p>


              <h3 className="mt-5 mb-3">⚡ Hour 6-8: Props & State - The Heart of React</h3>
              <p>React apps are dynamic because of props and state:</p>
              <p>🔹 Props (short for Properties) allow components to communicate. </p>
              <p>🔹 State stores data that changes within a component. </p>
              <p>🔹 Example:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code2}
              </SyntaxHighlighter>
              <p>✅ Experiment with props and state in your project.</p>


              <h3 className="mt-5 mb-3">🎨 Hour 9-11: Styling in React</h3>
              <p>Make your app beautiful using:</p>
              <p>🔹 CSS Modules</p>
              <p>🔹 Styled Components </p>
              <p>🔹 Tailwind CSS (for utility-based styling)
              Experiment with different styles to see what works best! 🎨</p>

             
              <h3 className="mt-5 mb-3">🔄 Hour 12-14: Handling Events & Forms</h3>
              <p>React simplifies event handling and form inputs:</p>
              <p>🔹 Handle onClick, onChange, onSubmit events. </p>
              <p>🔹 Use useState() to manage form data. </p>
              <p>🔹 Example:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code3}
              </SyntaxHighlighter>
              <p>Build a simple form and handle user input! ✨</p>


              <h3 className="mt-5 mb-3">🔄 Hour 15-17: React Hooks - Supercharge Your App</h3>
              <p>React Hooks let you use state and lifecycle methods in functional components.</p>
              <p>🔹 useState() - Manage state. </p>
              <p>🔹 useEffect() - Perform side effects like API calls. </p>
              <p>🔹 Example:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code4}
              </SyntaxHighlighter>
              <p>Mastering hooks will make you a React pro!</p>

              <h3 className="mt-5 mb-3">🔗 Hour 18-20: Routing with React Router</h3>
              <p>React Router allows navigation between pages.</p>
              <p>✅ Install: npm install react-router-dom </p>
              <p>✅ Create routes with </p>
              <p>🔹 Example:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code5}
              </SyntaxHighlighter>
              <p>Mastering hooks will make you a React pro!</p>

          
              <h3 className="mt-5 mb-3">🔥 Hour 21-22: Fetching API Data</h3>
              <p>Most apps require data fetching. Use:</p>
              <p>✅ Fetch API: fetch('https://api.example.com')</p>
              <p>✅ Axios: axios.get('https://api.example.com')</p>
              <p>🔹 Example:</p>
              <SyntaxHighlighter language="javascript" style={dracula}>
                {code6}
              </SyntaxHighlighter>
              <p>Try fetching data from a real API! 🌍</p>


              <h3 className="mt-5 mb-3">📌 Hour 23-24: Deploying Your React App</h3>
              <p>Time to make your project live!</p>
              <p>✅ Build your project: npm run build</p>
              <p>✅ Deploy on Vercel, Netlify, or GitHub Pages</p>
              <p>✅ Share your awesome React project with the world! 🚀</p>
            

              <figure className="blog-banner">
                <Link to="/blog">
                  <img
                    className="img-fluid"
                    src="/images/blog/img08-2.png" alt="img08" 
                  />
                </Link>
              </figure>



              <h3 className="mt-5 mb-3">🎯 Conclusion: You Did It!</h3>
              <p>Congratulations! 🎉 In just 24 hours, you've learned:</p>
              <p>✅ JSXC& Components</p>
              <p>✅ Props & State</p>
              <p>✅ Hooks & Routing</p>
              <p>✅ API Calls & Deployment</p>
              <h4 className="mt-3">💡 Next Steps:</h4>
          <ul className="mb-5">
          <li className="mb-2">Build real-world projects 🏗️</li>
          <li className="mb-2">Learn Redux for state management ⚡</li>
          <li className="mb-2">Explore Next.js for server-side rendering 🌍</li>
       </ul>
       <p>🚀 Keep learning and happy coding!

</p>
        




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

export default Blog8;
