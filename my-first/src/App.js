import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{height:"100vh",display:"flex",flexDirection:'column'}}>
      <Header/>
      <Content rollNumber={23} firstName={"Piyush"} />
      <Footer/>
    </div>
  );
}

export default App;
