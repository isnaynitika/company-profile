import NavbarMenu from "./Navbar";
import FloatingActionButton from "./FloatingChat";

const Layout = ({ children }) => {
  return (
    <div>
      <NavbarMenu />
      {children}
      <FloatingActionButton />
    </div>
  );
};

export default Layout;
