import { Navbar } from "../components/Navbar";
import { SideMenu } from "../components/SideMenu";

export const TambahTanah = () => {
  return (
    <div className="d-flex ">
      <SideMenu />
      <div className="w-100">
        <Navbar />
        <main className="bg-light-gray h-100 ">
          <div
            className="d-flex justify-content-between align-items-center mx-3 py-3"
            style={{
              borderBottom: "#BCBCBC 1px solid",
            }}
          >
            <div className="font-semibold" style={{ cursor: "pointer" }}>
              &larr; &emsp; Kembali
            </div>
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
              >
                Batal
              </div>
              <div className="primary-btn">Tambah Data</div>
            </div>
          </div>
          <div className="mx-3">
            <h5 style={{ paddingBottom: "20px", paddingTop: "10px" }}>
              Informasi Tanah Induk
            </h5>
            <form className="d-flex form-tambah-tanah gap-5">
              <div className="left-form d-flex flex-col gap-3">
                <div>
                  <label htmlFor="nilai-sewa">
                    Nilai Sewa/Retribusi (Rp/Tahun)
                  </label>
                  <input type="text" className="w-100" name="nilai-sewa" />
                </div>
                <div>
                  <label htmlFor="jenis-pemanfaatan">
                    Jenis Perikatan Pemanfaatan
                  </label>
                  <input
                    type="text"
                    className="w-100"
                    name="jenis-pemanfaatan"
                  />
                </div>
                <div>
                  <label htmlFor="berlaku-dari">Atas Nama</label>
                  <input type="text" className="w-100" name="atas-nama" />
                </div>
                <div>
                  <label htmlFor="peruntukan-pemanfaatan">
                    Peruntukan Pemanfaatan
                  </label>
                  <input
                    type="text"
                    className="w-100"
                    name="peruntukan-pemanfaatan"
                  />
                </div>
                <div>
                  <label htmlFor="koordinat">Koordinat (LS BT)</label>
                  <input type="text" className="w-100" name="koordinat" />
                </div>
                <div>
                  <label htmlFor="luas-bagian">Luas Bagian</label>
                  <input type="text" className="w-100" name="luas-bagian" />
                </div>
                <div>
                  <h5
                    className="font-semibold"
                    style={{ fontSize: "16px", margin: "0 0 5px 0" }}
                  >
                    Masa Berlaku
                  </h5>
                  <label htmlFor="atas-nama">Dari</label>
                  <input type="date" className="w-100" name="berlaku-dari" />
                </div>
                <div>
                  <label htmlFor="atas-nama">Sampai</label>
                  <input type="date" className="w-100" name="berlaku-dari" />
                </div>
              </div>
              <div className="right-form d-flex flex-col gap-3">
                <div>
                  <label htmlFor="nomor-perikatan">Nomor Perikatan</label>
                  <input type="text" className="w-100" name="nomor-perikatan" />
                </div>
                <div>
                  <label htmlFor="tanggal-perikatan">Tanggal Perikatan</label>
                  <input type="text" className="w-100" name="tanggal-perikatan" />
                </div>
                <div className="d-flex flex-col">
                  <label className="font-semibold">Surat Perjanjian</label>
                  <label htmlFor="surat-perjanjian" className="font-semibold file-input d-flex flex-col justify-content-center align-items-center">
                    <img src="/upload.png" width={80}/>
                    <p className="p-0 m-0">Drag & drop files or <span style={{color:"#483EA8"}}>Browse</span></p>
                    <p className="secondary-text">Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                    </label>
                  <input type="file" className="d-none" id="surat-perjanjian" />
                </div>
                <div className="d-flex flex-col">
                  <label className="font-semibold">Surat Permohonan</label>
                  <label htmlFor="surat-permohonan" className="font-semibold file-input d-flex flex-col justify-content-center align-items-center">
                    <img src="/upload.png" width={80}/>
                    <p className="p-0 m-0">Drag & drop files or <span style={{color:"#483EA8"}}>Browse</span></p>
                    <p className="secondary-text">Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word, PPT</p>
                    </label>
                  <input type="file" className="d-none" id="surat-permohonan" />
                </div>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};
