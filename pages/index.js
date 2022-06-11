import Main from "../components/Main/Main";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Home() {
  return (
    <div className="flex">
      {/* * SIDEBAR * */}
      <Sidebar />

      {/* * MAIN *  */}
      <Main />
    </div>
  );
}
