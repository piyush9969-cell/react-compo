import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentGallery from './components/StudentGallery';
import Student from './components/Student';
import Contact from './components/Contact';


function App() {
  return (
    <BrowserRouter>
    <div style={{height:"100vh", display:"flex",flexDirection:'column'}}>
      <Header/>
      <Routes>
        <Route path="/" element = {<Content rollNumber={23} firstName={"Piyush"} />} />
       
        <Route path="student" element={<StudentGallery/>}/>

        <Route path="student/:studentId" element={<Student/>}/>

        <Route path="/contact" element={<Contact/>} />
      
     
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
