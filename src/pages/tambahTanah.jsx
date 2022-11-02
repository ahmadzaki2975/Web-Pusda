import { Navbar } from "../components/Navbar";
import { SideMenu } from "../components/SideMenu";

export const TambahTanah = () => {
  return (
    <div className="d-flex ">
      <SideMenu />
      <div className="w-100">
        <Navbar />
        <main className="bg-light-gray h-100 "></main>
      </div>
    </div>
  );
};
