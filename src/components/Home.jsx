import { Discount } from "@mui/icons-material";
import { styles } from "../utils/styles";
import { robot } from "../assets/index";
import Button from "./Button";
const Home = () => {
  return (
    <>
      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        {/* Information */}
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 md:px-16 px-6 relative`}
        >
          {/* Discount Information */}
          <div
            className={`flex flex-row items-center bg-discount-gradient py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500`}
          >
            <Discount sx={{ color: "slategray" }} />
            <p className={`${styles.paragraph} ml-2`}>
              <span className="text-white">20%</span> Discount for
              <span className="text-white"> 1 month</span>
            </p>
          </div>
          {/* Title */}
          <div className={``}>
            <h1 className={`${styles.heading1}`}>
              A New Generation <br />
              <span className="text-gradient">Payment Method</span>
            </h1>
          </div>
          {/* Description */}
          <div className={`${styles.paragraph} mt-2 max-w-[600px]`}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
              assumenda, earum amet nostrum quibusdam quam ab aliquid maxime.
              Iusto dolore beatae aperiam distinctio perspiciatis animi error
              dolores! Cum, sunt nemo!
            </p>
          </div>
          <Button />
          {/* Gradient Background */}
          <div className="blue-gradient absolute z-[0] w-[40%] h-[35%]" />
          <div className="pink-gradient absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40" />
          <div className="white-gradient absolute z-[0] w-[50%] h-[55%] right-20 bottom-20" />
        </div>
        {/* Animations */}
        <div className={`flex-1 ${styles.flexStart} md:my-0 my-10 relative`}>
          <img
            src={robot}
            alt="robot"
            className="w-[100%] h-[100%] relative z-10"
            style={{
              borderRadius: "110px",
            }}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
