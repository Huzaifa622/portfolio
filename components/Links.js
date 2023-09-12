import { motion } from "framer-motion";
import { CiCircleChevRight } from "react-icons/ci";
import { RiJavascriptFill } from "react-icons/ri";
import {
  BiLogoCss3,
  BiLogoFirebase,
  BiLogoTailwindCss,
  BiLogoMongodb,
  BiLogoFacebookSquare,
  BiLogoLinkedinSquare,
  BiLogoGithub,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
// import {IoLogoJavascript} from 'react-icons/io'
import {
  AiFillHtml5,
  AiOutlineArrowRight,
  AiOutlineGoogle,
} from "react-icons/ai";
import Link from "next/link";

const Links = () => {
  return (
    <>
      <div className="fixed p-1 pb-2 pt-4 top-[35%] rounded-full left-[95%] z-20  backdrop-blur-md backdrop-filter ">
        <div className="flex flex-col gap-2">
          <motion.span
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 18px red",
              textShadow: "0 0 8px white",
              backgroundColor: "red",
            }}
            className=" mt-4 hover:cursor-pointer"
          >
            <Link
              href={"https://www.facebook.com/tanveer.huzaifa?mibextid=2JQ9oc"}
            >
              <BiLogoFacebookSquare size={30} />
            </Link>
          </motion.span>
          <motion.span
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 18px red",
              textShadow: "0 0 8px white",
              backgroundColor: "red",
            }}
            className="mt-4 hover:cursor-pointer"
          >
            <Link
              href={"https://www.linkedin.com/in/huzaifa-tanveer-a81533249"}
            >
              <BiLogoLinkedinSquare size={30} />
            </Link>
          </motion.span>
          <motion.span
            whileHover={{
              scale: 1.1,
              boxShadow: "0 0 18px red",
              textShadow: "0 0 8px white",
              backgroundColor: "red",
            }}
            className=" mt-4 rounded-full hover:cursor-pointer"
          >
            <Link href={"https://github.com/Huzaifa622"}>
              <BiLogoGithub size={30} />
            </Link>
          </motion.span>
        </div>
      </div>
    </>
  );
};

export default Links;
