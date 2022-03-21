const Backdrop = ({ sideBarOpen, setSidebarOpen }) => {

  const classes = sideBarOpen ? 'opacity-70 cursor-pointer' : 'pointer-events-none opacity-0';

  return (
    <div
      className={`${classes} fixed top-0 bottom-0 left-0 right-0 z-[98] bg-black transition-opacity duration-700`}
      onClick={() => setSidebarOpen(false)}
    />
  );
};

export default Backdrop;