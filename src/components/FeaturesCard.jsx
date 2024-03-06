import { features } from "../utils/constants";
import { styles } from "../utils/styles";

/* eslint-disable no-unused-vars */
const FeaturesCard = ({ icon, title, content, idx }) => {
  return (
    <div
      className={`${
        idx !== features.length ? "mb-6" : "mb-0"
      } features-card cursor-pointer flex flex-row p-6 rounded-[20px]`}
    >
      <div
        className={`w-[64px] h-[64px] rounded-full  ${styles.flexCenter} bg-lightBlue`}
        style={{ color: "white" }}
      >
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
      </div>
      <div className="flex flex-1 flex-col ml-3">
        <h4 className="font-montserrat font-semibold text-white text-[18px] leading-[23px] mb-1">
          {title}
        </h4>
        <p className="font-montserrat font-normal text-lightWhite text-[16px] leading-[24px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeaturesCard;
