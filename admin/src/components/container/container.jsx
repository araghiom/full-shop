import Topbar from "../topbar/Topbar";
import Sidebar from "../sidebar/Sidebar";
import "./container.css"

const Container = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="container">i
        <Sidebar />
        <div className="wrapper">{children}</div>
      </div>
    </>
  );
};

export default Container;
