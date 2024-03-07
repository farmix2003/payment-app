import {
  Bills,
  Business,
  CTA,
  Contract,
  Footer,
  Home,
  Navbar,
  Statistics,
  Testimonials,
} from "./components";
import Clients from "./components/Clients";
import { styles } from "./utils/styles";
function App() {
  return (
    <div className="bg-primary w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>

      {/* Home */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>
      {/* Stats */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Bills />
          <Business />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
