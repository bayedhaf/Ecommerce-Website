import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="shadow-2xl shadow-black">
      <div className="flex flex-wrap justify-around pt-8 gap-8 mt-10 sm:flex-col md:flex-row lg:flex-row">
            <span className=""></span>
            <span className="transition-all hover:text-blue-500">
               Links
            </span>
            <span className="transition-all hover:text-blue-500">
                Helps
            </span>
            <span className="transition-all hover:text-blue-500">
               NewsLetter
            </span>
      </div>

      <div className="flex flex-wrap gap-8 mt-10 sm:flex-col md:flex-row lg:flex-row">
        <div className="flex flex-col gap-8 sm:flex-col p-8 text-nowrap sm:text-xl font-light">
          <p className="transition-all hover:scale-105">
            Our company is best <br /> and loyal to its customers <br />
            and it offers free delivery <br /> for its customers.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-col p-8 text-nowrap sm:text-xl font-light">
          <Link
            to="/Home"
            className="transition-all hover:text-blue-500 hover:scale-105"
          >
            <span className="">Home</span>
          </Link>
          <Link
            to="/shop"
            className="transition-all hover:text-blue-500 hover:scale-105"
          >
            <span className="">Shop</span>
          </Link>
          <Link
            to="/About"
            className="transition-all hover:text-blue-500 hover:scale-105"
          >
            <span className="">About</span>
          </Link>
          <Link
            to="/Contact"
            className="transition-all hover:text-blue-500 hover:scale-105"
          >
            <span className="">Contact</span>
          </Link>
          <Link
            to="/Comment"
            className="transition-all hover:text-blue-500 hover:scale-105"
          >
            <span className="">Comment</span>
          </Link>
        </div>

        <div className="flex flex-col gap-8 sm:flex-col p-8 text-nowrap sm:text-xl font-light">
          <span className="">Payment Option: Not available</span>
          <Link
            to="/Returns"
            className="transition-all hover:text-blue-500 hover:scale-105"
          >
            <span className="">Returns</span>
          </Link>
          <Link
            to="/"
            className="transition-all hover:text-blue-500 hover:scale-105"
          >
            <span className="">Privacy Policies</span>
          </Link>
          <Link
            to="/Contact"
            className="transition-all hover:text-blue-500 hover:scale-105"
          >
            <span className="">Contact</span>
          </Link>
        </div>

        <div className="flex flex-col gap-8 sm:flex-col p-8 text-nowrap sm:text-xl font-light">
          <Link
            to="/"
            className="transition-all hover:text-blue-500 hover:scale-105"
          >
            Enter your email address
          </Link>
        </div>
      </div>

      <hr className="bg-black" />
      <p className="pl-10 pt-8 text-sm sm:text-base">
        2025 Ethiopia. All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
