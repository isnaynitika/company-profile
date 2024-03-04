import FloatingActionButton from ".";

const Layout = ({ children }) => {
  return (
    <div className="relative">
      {children}
      <FloatingActionButton />
    </div>
  );
};

export default Layout;
