import { DashboardTableRow } from "../components/Dashboard/DashboardTableRow";
import { GridItem } from "../components/Dashboard/GridItem";
import { Navbar } from "../components/Navbar";
import { SideMenu } from "../components/SideMenu";

export const Dashboard = () => {
  return (
    <div className="d-flex ">
      <SideMenu />
      <div className="w-100">
        <Navbar />
        <main className="bg-light-gray h-100">
          <div className="d-flex justify-content-between px-3 py-2">
            <h5 className="font-semibold">Rekap Data</h5>
            <div className="d-flex gap-2 align-items-center">
              <select className="h-100 rounded text-cyanblue px-2 py-1 font-semibold bg-none border-cyanblue">
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
              <div className="bg-cyanblue px-3 py-1 font-semibold text-white rounded primary-btn">
                EXPORT DATA
              </div>
            </div>
          </div>

          {/* grid */}
          <div className="container dashboard-grid px-3 grid">
            <div className="row">
              <GridItem
                title="PENDAPATAN ASLI DAERAH"
                value="Rp5.000.000.000"
                icon={1}
              />
              <GridItem title="TOTAL SEWA" value="7000" icon={2} />
            </div>
            <div className="row">
              <GridItem title="TANAH INDUK (M²)" value="5000" icon={3} />
              <GridItem title="TANAH BAGIAN (M²)" value="8025" icon={4} />
              <GridItem title="TANAH RETRIBUSI" value="7000" icon={5} />
            </div>
          </div>

          {/* table */}
          <div className="dashboard-table mx-3 p-2 pb-0 border-cyanblue bg-white">
            <div className="d-flex justify-content-between py-2 px-2">
              <h5 className="font-semibold">Informasi Total Data UPT</h5>
              <div className="bg-cyanblue px-3 py-1 font-semibold text-white rounded primary-btn">
                EXPORT
              </div>
            </div>
            <div className="container">
              <div className="row row-header">
                <div className="col d-flex align-items-center justify-content-center">
                  NAMA UPT
                </div>
                <div className="col d-flex align-items-center justify-content-center">
                  TANAH INDUK
                </div>
                <div className="col d-flex flex-col align-items-center justify-content-center">
                  TOTAL PINJAM PAKAI
                  <br />
                  <div className="row py-2">
                    <div className="col">TANAH(M)</div>
                    <div className="col">RUPIAH</div>
                  </div>
                </div>
                <div className="col d-flex flex-col align-items-center justify-content-center">
                  TOTAL PAKAI SENDIRI
                  <br />
                  <div className="row py-2">
                    <div className="col">TANAH(M)</div>
                    <div className="col">RUPIAH</div>
                  </div>
                </div>
                <div className="col d-flex flex-col align-items-center justify-content-center">
                  TOTAL SEWA/SIP BMD
                  <br />
                  <div className="row py-2">
                    <div className="col">TANAH(M)</div>
                    <div className="col">RUPIAH</div>
                  </div>
                </div>
                <div className="col d-flex flex-col align-items-center justify-content-center py-2">
                  TOTAL RETRIBUSI
                  <br />
                  <div className="row py-2">
                    <div className="col">TANAH(M)</div>
                    <div className="col">RUPIAH</div>
                  </div>
                </div>
              </div>
              <DashboardTableRow title={"PUSDA JATIM"} />
              <DashboardTableRow title={"UPT KEDIRI"} />
              <DashboardTableRow title={"UPT LUMAJANG"} />
              <DashboardTableRow title={"UPT BONDOWOSO"} />
              <DashboardTableRow title={"UPT PASURUAN"} />
              <DashboardTableRow title={"UPT BOJONEGORO"} />
              <DashboardTableRow title={"UPT PAMEKASAN"} />
            </div>
            <div className="row row-content bg-light-gray col-footer border-none px-2">
              <div className="col d-flex align-items-center justify-content-center">
                TOTAL KESELURUHAN
              </div>
              <div className="col d-flex align-items-center justify-content-center">
                500
              </div>
              <div className="col d-flex flex-col align-items-center justify-content-center">
                <div className="row py-2">
                  <div className="col">500</div>
                  <div className="col">5.000.000</div>
                </div>
              </div>
              <div className="col d-flex flex-col align-items-center justify-content-center">
                <div className="row py-2">
                  <div className="col">500</div>
                  <div className="col">5.000.000</div>
                </div>
              </div>
              <div className="col d-flex flex-col align-items-center justify-content-center">
                <div className="row py-2">
                  <div className="col">500</div>
                  <div className="col">5.000.000</div>
                </div>
              </div>
              <div className="col d-flex flex-col align-items-center justify-content-center">
                <div className="row py-2">
                  <div className="col">500</div>
                  <div className="col">5.000.000</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
