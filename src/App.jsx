
/*
Site is located at http://localhost:5173/CaloricIntakeCalculator/
*/
import Info from "./Info.jsx"
import Header from "./Header.jsx"
import Paragraph from "./Paragraph.jsx";

function App() {
  return(
    <>
    <div className="parent">
      <Header/>
      <Paragraph/>
        <Info/>
    </div>
    </>

  );
}

export default App
