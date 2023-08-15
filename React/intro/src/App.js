import "./App.scss";
import logo from "./logo.svg";

import Paragraf from "./components/Paragraf";
import Anchor from "./components/Anchor";
import Image from "./components/Image";
import ImageProp from "./components/ImageProp";
import Popover from "./components/Popover";
import ChangableButton from "./components/ChangableButton";
import Counter from "./components/Counter";

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
      <section>
        <Popover buttonText="Click" >lorem ipsum</Popover>
        <ChangableButton />
        <Counter />
      </section>
    </div>
  );
}

export default App;
