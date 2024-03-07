import { apple, bill, google } from "../assets";
import { layout, styles } from "../utils/styles";

const Bills = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImageReverse}`}>
        <img
          src={bill}
          alt="bill"
          className="w-[100%] h-[100%] z-10 relative"
        />
      </div>
      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily manage your <br className="sm:block hidden" /> billing and
          invoicing
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, nisi
          tenetur ex voluptatem alias incidunt, in dolorum at architecto, iusto
          neque possimus amet. Recusandae vero quidem obcaecati temporibus
          tempora laudantium?
        </p>

        <div className={`flex flex-row flex-wrap sm:mt-10 mt-6`}>
          <img
            src={google}
            alt="google"
            className="w-[129px] h-[42px] object-cover mr-5 cursor-pointer"
          />
          <img
            src={apple}
            alt="apple"
            className="w-[129px] h-[42px] object-cover mr-5 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Bills;
