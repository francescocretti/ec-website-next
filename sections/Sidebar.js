import { HiChevronLeft } from "react-icons/hi";
import HeaderMenuLink from "./HeaderMenuLink";

// import SideBarLink from "../components/SideBarLink";

const SideBar = ({ open, setOpen }) => {

  const baseStyle = 'bg-transparent text-white h-full space-y-6 py-5 px-2 inset-y-0 left-0 transform absolute transition duration-700 ease-in-out z-[99] shadow-lg shadow-gray';

  return (
    <div className={`${baseStyle} border-r ${open ? 'translate-x-0' : '-translate-x-full'}`}>

      <HiChevronLeft
        className="text-2xl cursor-pointer hover:opacity-50"
        onClick={() => setOpen(false)}
      />

      <div className="flex flex-col px-4 ">

        <ul className="font-lato text-2xl">
          <HeaderMenuLink
            text="HOME"
            href="/"
            color="light"
          />
          <HeaderMenuLink
            text="SAHEL ROOTS"
            href="/on-est-ensemble"
            color="light"
          />
          <HeaderMenuLink
            text="MUSIC"
            href="/music"
            color="light"
          />
          <HeaderMenuLink
            text="SOUNDTRACK"
            href="/soundtrack"
            color="light"
          />
          {/* <HeaderMenuLink
            text="ABOUT"
            href="/about"
            color="light"
          /> */}
          <HeaderMenuLink
            text="CONTACT"
            href="/contact"
            color="light"
          />
        </ul>

        {/* <ul>
          <li>
            <SideBarLink href="/" text="Home" />
          </li>
          <li>
            <SideBarLink href="/about" text="About" />
          </li>
          <li>
            <SideBarLink
              href="https://www.compagniadisanpaolo.it/"
              text="La Fondazione"
              external
            />
          </li>
          <li>
            <SideBarLink
              href="https://www.compagniadisanpaolo.it/news/"
              text="News"
              external
            />
          </li>
        </ul> */}

      </div>
    </div>
  );
};

export default SideBar;