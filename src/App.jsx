import "./App.css";
import { Navbar } from "./components";
import { styles } from "./utils/styles";
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
    </div>
  );
}

export default App;
