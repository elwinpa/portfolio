"use client";
import ContactInfo from './components/ContactInfo';
import AboutMe from './components/AboutMe'
import Experience from './components/Experience';
import './styles/page.scss';
import Projects from './components/Projects';
import Header from './components/Header';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';

export default function Home() {
  return (
    <>
    <Header/>
    <div className="main-layout">
      
      <ContactInfo/>
      <AboutMe/>
      <Experience/>
      <Projects/>
      
    </div>
    <Footer/>
    <BottomNav/>
    </>
  );
}
