import Link from "next/link";

import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter, FaCode } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/shivamsince0502" },
  { icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/shivam-kumar-547368196/" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@politicalcoder1129" },
  { icon: <FaTwitter />, path: "https://x.com/sarcashivu?t=j3YH_pSF5RsBNaS0vTiO9g&s=09" },
  { icon: <FaCode/>, path: "https://leetcode.com/nexus0502/"}
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Social;
