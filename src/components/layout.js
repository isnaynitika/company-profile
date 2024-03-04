import Navbar from "./Navbar";
import FloatingActionButton from "./FloatingChat";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <FloatingActionButton />
    </div>
  );
};

export default Layout;
