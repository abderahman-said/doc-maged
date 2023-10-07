"use client";
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { lazy } from 'react';



import "react-image-gallery/styles/css/image-gallery.css";
import 'aos/dist/aos.css';
const Nav =lazy(() => import("../components/Nav"))
const Footer =lazy(() => import("../components/Footer"))


// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({children}) {
  return (
    <html lang="en" >
      <head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600;700&family=Montserrat:wght@600;700;800;900&family=Open+Sans:wght@300;400&display=swap" rel="stylesheet"></link>
      </head>
      <body  >
      <Nav/>
        
        {children}

        <Footer />
        </body>
    </html>
  )
}