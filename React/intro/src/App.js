import "./App.css";
import logo from "./logo.svg";

import Paragraf from "./components/Paragraf";
import Anchor from "./components/Anchor";
import Image from "./components/Image";
import ImageProp from "./components/ImageProp";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageProp src={logo} />
        {/* <Image /> */}
        <Paragraf> Hello World! </Paragraf>
        <Paragraf> Developed By YS </Paragraf>
        <Anchor />
      </header>
    </div>
  );
}

export default App;
