import { features } from "../utils/constants";
import { layout, styles } from "../utils/styles";
import FeaturesCard from "./FeaturesCard";
import Button from "./Button";
const Business = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={`${layout.sectionInfo}`}>
        <h1 className={`${styles.heading2}`}>
          Improve your Business,
          <br className="sm:block hidden" />
          Money is on us
        </h1>
        <p className={`max-w-[560px] mt-2 ${styles.paragraph}`}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut adipisci
          fuga quisquam eius aspernatur unde suscipit recusandae explicabo,
          architecto provident fugit.
        </p>
        <Button styles={"mt-2"} />
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, idx) => (
          <FeaturesCard key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  );
};

export default Business;
