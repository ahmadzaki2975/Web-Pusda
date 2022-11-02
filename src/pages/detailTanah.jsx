import { Navbar } from "../components/Navbar";
import { SideMenu } from "../components/SideMenu";
import { useNavigate } from "react-router-dom";

export const DetailTanah = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex ">
      <SideMenu />
      <div className="w-100">
        <Navbar />
        <main className="bg-light-gray h-100 ">
          <div className="mx-3">
            <div
              className="d-flex justify-content-between align-items-center mx-3 py-3"
              style={{
                borderBottom: "#BCBCBC 1px solid",
              }}
            >
              <div className="font-semibold" style={{ cursor: "pointer" }} onClick={() => {navigate(-1)}}>
                &larr; &emsp; Kembali
              </div>
            </div>
            <div
              className="d-flex justify-content-between mx-3"
              style={{ paddingBottom: "20px", paddingTop: "10px" }}
            >
              <h5>Informasi Tanah Induk</h5>
              <div className="d-flex gap-2">
                <div
                  className="text-center"
                  style={{
                    cursor: "pointer",
                    border: "#DC2F2F 1px solid",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    color: "#DC2F2F",
                    width: "120px",
                  }}
                  onClick={() => {navigate(-1)}}
                >
                  Batal
                </div>
                <div className="primary-btn px-4">Ubah Data</div>
              </div>
            </div>
            <div className="informasi-tanah">
              <div className="d-flex mx-4">
                <div className="left">
                  <h6>Sertifikat</h6>
                  <div className="d-flex gap-5">
                    <div className="left">
                      <p className="title p-0 m-0">Nomor</p>
                      <p className="font-semibold">39</p>
                    </div>
                    <div className="right">
                      <p className="title p-0 m-0">Tanggal</p>
                      <p className="font-semibold">22/08/2011</p>
                    </div>
                  </div>
                  <div>
                    <p className="title p-0 m-0">Luas Induk (m)</p>
                    <p className="font-semibold">200</p>
                  </div>
                  <div>
                    <p className="title p-0 m-0">Nilai Aset</p>
                    <p className="font-semibold">Rp39.000.000</p>
                  </div>
                </div>
                <div className="right">
                  <div>
                    <p className="title p-0 m-0">Jenis Pemanfaatan</p>
                    <p className="font-semibold">Jenis Perikatan</p>
                  </div>
                  <div>
                    <p className="title p-0 m-0">Alamat</p>
                    <p className="font-semibold">
                      Jl. TRUNOJOYO NO.3, KEPATIHAN, KEC. BOJONEGORO, JAWA TIMUR
                      62111
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex flex-row justify-content-between px-3 py-3"
                style={{ marginTop: "30px" }}
              >
                <h5>Tanah Bagian</h5>
                <div className="d-flex">
                  <input
                    className="form-control me-2 bg-none"
                    style={{ width: "200px" }}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                  <div
                    to="/dashboard/tambah"
                    className="primary-btn d-flex justify-content-center align-items-center"
                  >
                    Tambah Data
                  </div>
                </div>
              </div>
              <div className="table-tanah-bagian">
                <div className="row" style={{ background: "#F8F8F8", padding:"15px", border: "1px solid white"}}>
                  <div
                    to="/dashboard/upt/detail"
                    className="col number d-flex align-items-center justify-content-center font-semibold "
                  >
                    1
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">NO PERIKATAN</p>
                    <p className="p-0 m-0">12345678910</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">JENIS PERIKATAN</p>
                    <p className="p-0 m-0">RETRIBUSI</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">PEMANFAATAN</p>
                    <p className="p-0 m-0">KANTIN</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">NILAI SEWA</p>
                    <p className="p-0 m-0">Rp2.000.000</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">MASA BERLAKU</p>
                    <p className="p-0 m-0">22 JUNI 2024</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">LUAS</p>
                    <p className="p-0 m-0">242 m</p>
                  </div>
                </div>
                <div className="row" style={{ background: "#F8F8F8", padding:"15px", border: "1px solid white"}}>
                  <div
                    to="/dashboard/upt/detail"
                    className="col number d-flex align-items-center justify-content-center font-semibold "
                  >
                    2
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">NO PERIKATAN</p>
                    <p className="p-0 m-0">12345678910</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">JENIS PERIKATAN</p>
                    <p className="p-0 m-0">RETRIBUSI</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">PEMANFAATAN</p>
                    <p className="p-0 m-0">KANTIN</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">NILAI SEWA</p>
                    <p className="p-0 m-0">Rp2.000.000</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">MASA BERLAKU</p>
                    <p className="p-0 m-0">22 JUNI 2024</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">LUAS</p>
                    <p className="p-0 m-0">242 m</p>
                  </div>
                </div>
                <div className="row" style={{ background: "#F8F8F8", padding:"15px", border: "1px solid white"}}>
                  <div
                    to="/dashboard/upt/detail"
                    className="col number d-flex align-items-center justify-content-center font-semibold "
                  >
                    3
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">NO PERIKATAN</p>
                    <p className="p-0 m-0">12345678910</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">JENIS PERIKATAN</p>
                    <p className="p-0 m-0">RETRIBUSI</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">PEMANFAATAN</p>
                    <p className="p-0 m-0">KANTIN</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">NILAI SEWA</p>
                    <p className="p-0 m-0">Rp2.000.000</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">MASA BERLAKU</p>
                    <p className="p-0 m-0">22 JUNI 2024</p>
                  </div>
                  <div className="col">
                    <p className="table-title p-0 m-0">LUAS</p>
                    <p className="p-0 m-0">242 m</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
