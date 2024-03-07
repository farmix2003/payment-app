import { logo } from "../assets";
import { footerLinks, socialLink } from "../utils/constants";
import { styles } from "../utils/styles";
const Footer = () => {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`flex-1 flex flex-col justify-start mr-10`}>
          <img src={logo} alt="logo" />
          <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>
            A new way to make payments easy, reliable and secure
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-evenly flex-wrap md:mt-0 mt-10">
          {footerLinks.map((link) => (
            <div
              className="flex flex-col ss:my-0 my-4 min-w-[140px]"
              key={link.title}
            >
              <h4 className="font-montserrat font-medium text-[18px] leading-[27px] text-white">
                {link.title}
              </h4>
              <ul>
                {link.links.map((item, i) => (
                  <li
                    key={item.name}
                    className={`${
                      i !== link.links.length ? "mb-4" : "mb-0"
                    } font-montserrat font-normal text-[16px] leading-[24px] text-lightWhite hover:text-secondary cursor-pointer`}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-montserrat font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright © 2024 PayApp. All Rights Reserved
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialLink.map((link) => (
            <a
              key={link.id}
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <img
                src={link.icon}
                alt="icon"
                className="w-[30px] h-[30px] object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
