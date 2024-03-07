import { contract } from "../assets";
import { layout, styles } from "../utils/styles";
import Button from "./Button";
const Contract = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Find a better contract deal <br className="sm:block hidden" /> in a
          few easy steps
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nisi
          tenetur ex voluptatem alias incidunt, in dolorum at architecto, iusto
          neque possimus amet. Recusandae vero quidem obcaecati temporibus
          tempora laudantium?
        </p>
        <Button styles={"mt-5"} />
      </div>
      <div className={`${layout.sectionImage}`}>
        <img src={contract} alt="cards" className="w-[100 %] h-[100%]" />
      </div>
    </section>
  );
};

export default Contract;
