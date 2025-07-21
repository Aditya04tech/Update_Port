import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './Component/AboutMe';
import Contact from './Component/Contact';
import Header from './Component/Header';
import MyBlog from './Component/MyBlog';
import Portfolio from './Component/Portfolio';
// import Services from './Component/Services';
import Resume from './Component/Resume';
import Project1 from './Component/Projects/Project1';
import Blog1 from './Component/Blogs/Blog1';
import Blog2 from './Component/Blogs/Blog2';

import Blog3 from './Component/Blogs/Blog3';
import Blog4 from './Component/Blogs/Blog4';
import Blog5 from './Component/Blogs/Blog5';
import Blog6 from './Component/Blogs/Blog6';
import Blog7 from './Component/Blogs/Blog7';
import Blog8 from './Component/Blogs/Blog8';

import Project2 from './Component/Projects/Project2';
import Project3 from './Component/Projects/Project3';
import Project4 from './Component/Projects/Project4';
import Projects5 from './Component/Projects/Projects5';
import Project6 from './Component/Projects/Project6';
import Project7 from './Component/Projects/Project7';
import Project8 from './Component/Projects/Project8';
import Project9 from './Component/Projects/Project9';
import Project10 from './Component/Projects/Project10';
import Project11 from './Component/Projects/Project11';
import Project12 from './Component/Projects/Project12';
import Project13 from './Component/Projects/Project13';
import Project14 from './Component/Projects/Projects14';
import ScrollToTop from './Component/ScrollToTop';
import Blog9 from './Component/Blogs/Blog9';



function App() {
  
  return (
    <Router>


    {/* -----Main Header Start------ */}

      <Header />
    {/* ------Main Header Stop------ */}



    {/* -----Scroll on top functionality start----- */}

      <ScrollToTop/>

    {/*------Scroll on top functionality stop----- */}



      <Routes>

{/* =========================================================== */}
      {/* Rendering Start*/}
        <Route path="/" element={<AboutMe/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/services" element={<Services />} /> */}
        <Route path='/resume' element={<Resume/>}/>
        <Route path="/blog" element={<MyBlog />} />
        <Route path="/contact" element={<Contact />} />
       {/* Rendering Stop*/}

{/* ============================================================ */}
       

{/* =========================================================== */}

       {/* Project Detals Pages Start */}
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
        <Route path="/project5" element={<Projects5 />} />
        <Route path="/project6" element={<Project6 />} />
        <Route path="/project7" element={<Project7 />} />
        <Route path="/project8" element={<Project8 />} />
        <Route path="/project9" element={<Project9 />} />
        <Route path="/project10" element={<Project10 />} />
        <Route path="/project11" element={<Project11 />} />
        <Route path="/project12" element={<Project12 />} />
        <Route path="/project13" element={<Project13 />} />
        <Route path="/project14" element={<Project14 />} />
        {/* Project Detals Pages Stop */}

{/* ================================================================ */}

{/* ---------------------------------------------------------------- */}

        {/* Blogs Section Start */}
        <Route path="/myblog"element={<MyBlog/>}/>
        <Route path="/blog1" element={<Blog1/>}/>
        <Route path="/blog2" element={<Blog2/>}/>
        <Route path="/blog3" element={<Blog3/>}/>
        <Route path="/blog4" element={<Blog4/>}/>
        <Route path="/blog5" element={<Blog5/>}/>
        <Route path="/blog6" element={<Blog6/>}/>
        <Route path="/blog7" element={<Blog7/>}/>
        <Route path="/blog8" element={<Blog8/>}/>
        <Route path="/blog9" element={<Blog9/>}/>
        {/* Blog Section Stop */}

{/* ---------------------------------------------------------------- */}      
        
      </Routes>
     
    </Router>
    
  );
}

export default App;
