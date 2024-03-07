import { feedbacks } from "../utils/constants";
import { styles } from "../utils/styles";
import FeedbacCard from "./FeedbacCard";
const Testimonials = () => {
  return (
    <div
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="pink-gradient -right-[50%] z-[0] absolute w-[50%] h-[60%] rounded-full bottom-40" />

      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={`${styles.heading2}`}>What people say about us?!</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[550px]`}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            nam rem corporis molestiae, amet quisquam doloribus.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:justify-start justify-center w-full relative z-[1] ">
        {feedbacks.map((feedback) => (
          <FeedbacCard {...feedback} key={feedback.id} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
