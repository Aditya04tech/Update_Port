// src/components/Head.js

import { Helmet } from "react-helmet";

export default function Head() {
  return (
    <Helmet>
      <title>Aditya Ravindra Sukhdeve — Executive-IT Support & Admin </title>
      <meta
        name="description"
        content="Official portfolio of Aditya Ravindra Sukhdeve — Executive-IT Support & Admin, React Developer. Explore my portfolio, skills, and contact information."
      />
      <link rel="canonical" href="https://adityasukhdeve.vercel.app/" />

      {/* Open Graph */}
      <meta property="og:title" content="Aditya Ravindra Sukhdeve — Portfolio" />
      <meta
        property="og:description"
        content="Portfolio of Aditya Ravindra Sukhdeve — System Engineer & Web Developer."
      />
      <meta property="og:url" content="https://adityasukhdeve.vercel.app/" />
      <meta property="og:image" content="%PUBLIC_URL%/preview.png" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Aditya Ravindra Sukhdeve — Portfolio" />
      <meta
        name="twitter:description"
        content="Portfolio of Aditya Ravindra Sukhdeve — Executive-IT Support & Admin."
      />
      <meta name="twitter:image" content="%PUBLIC_URL%/preview.png" />
    </Helmet>
  );
}
