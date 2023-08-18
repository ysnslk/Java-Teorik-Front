import "./App.css";
import User from "./components/User";

function App() {
  /**
   * npx json-server --watch db.json --port 5000 DB json server kodu
   * Form:
   * firstname,surname,gender(radio) ,age (number),isAdmin (select)
   * Table:
   * Id:
   * Name:firstname surname
   * Gender:
   * Admin: x (eğer adminse x yazacak)
   * Table data'ları sayfa yüklendiğinde gelecek
   * axios ile yaptığınız method çağrılarında cancel işlemleri yapılacak (useEffect return)
   * Table table üstünde tanımlanmış olan checkbox'a bağlı olarak gözüküp gözükmeyeceğine karar verilecek
   */
  return (
    <div className="App">
      <User />
    </div>
  );
}

export default App;
