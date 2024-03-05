import { stats } from "../utils/constants";
import { styles } from "../utils/styles";

const Statistics = () => {
  return (
    <div className={`${styles.flexStart} flex-row flex-wrap sm:mb-20 mb-6`}>
      {stats.map((stat) => (
        <div
          key={stat.id}
          className={`flex-1 flex justify-start items-center flex-row m-3`}
        >
          <h4 className="font-montserrat font-semibold xs:text-[41px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
            {stat.value}
          </h4>
          <p className="font-montserrat font-normal xs:text-[20px] text-[18px] xs:leading-[26px] leading-[22px] uppercase text-gradient ml-3">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Statistics;
