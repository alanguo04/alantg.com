import { IoNewspaper } from "react-icons/io5";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
// resume add it!

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        {/* <div className="flex flex-shrink-0 items-center">
            <p className="ml-20 text-xl">Blog</p>
            <p className="ml-2 text-xs">(coming soon)</p>
            <p className="ml-20 text-xl">Reviews</p>
            <p className="ml-2 text-xs">(coming soon)</p>
        </div> */}
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="/resume.pdf" target="_blank"><IoNewspaper /></a>
            <a href="https://www.linkedin.com/in/alantguo/" target="blank"><FaLinkedin /></a>
            <a href="https://github.com/alanguo04" target="blank"><FaGithub /></a>
        </div>
    </nav>
  );
};

export default Navbar