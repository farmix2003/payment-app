/* eslint-disable react/prop-types */
const Button = ({ styles }) => {
  return (
    <button
      className={`py-2 px-5 font-montserrat font-medium text-[20px] bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    >
      Start
    </button>
  );
};

export default Button;
