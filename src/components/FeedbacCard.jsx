/* eslint-disable react/prop-types */ import { quote } from "../assets/index";
const FeedbacCard = ({ title, content, name }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[12px] max-w-[365px] md:mr-10 sm:mr-5 mr-0 cursor-pointer feedback-card">
      <img
        src={quote}
        alt="quote"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-montserrat font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
        <div className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg_dark_gradient">
          <p className="text-gradient font-montserrat text-[22px] font-semibold">
            {name
              .split(" ")
              .map((n) => n.charAt(0))
              .join(".")
              .toUpperCase()
              .toString()}
          </p>
        </div>
        <div className="flex flex-col ml-4">
          <h4 className="font-montserrat font-semibold text-[20px] leading-[32px] text-white">
            {name}
          </h4>
          <p className="font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbacCard;
