import { Navbar } from "../components/Navbar";
import { SideMenu } from "../components/SideMenu";
import { useNavigate } from "react-router-dom";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { ModalPembayaran } from "../components/ModalPembayaran";

export const Page7 = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="d-flex ">
      <SideMenu />
      <div className="w-100">
        <Navbar />
        <main className="bg-light-gray h-100 ">
          <ModalPembayaran show={show} handleClose={handleClose} handleShow={handleShow}/>
          <div
            className="d-flex justify-content-between align-items-center mx-3 py-3"
            style={{
              borderBottom: "#BCBCBC 1px solid",
            }}
          >
            <div
              className="font-semibold"
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate(-1);
              }}
            >
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
                onClick={() => {
                  navigate(-1);
                }}
              >
                Batal
              </div>
              <div className="primary-btn">Tambah Data</div>
            </div>
          </div>
          <div className="mx-3">
            <h5 style={{ paddingBottom: "20px", paddingTop: "10px" }}>
              Informasi Tanah Bagian
            </h5>
            <div className="d-flex informasi-tanah-bagian gap-5 justify-content-between">
              <div className="left-form d-flex flex-col gap-3 ">
                <div>
                  <label htmlFor="nilai-sewa">
                    Jenis Perikatan Pemanfaatan
                  </label>
                  <h5>Sewa/SIP BMD</h5>
                </div>
                <div>
                  <label htmlFor="jenis-pemanfaatan">Atas Nama</label>
                  <h5>Bella Salsa</h5>
                </div>
                <div>
                  <label htmlFor="berlaku-dari">Peruntukkan Pemanfaatan</label>
                  <h5>Rumah Tinggal</h5>
                </div>
                <div>
                  <label htmlFor="koordinat">Koordinat (LS BT)</label>
                  <h5>123124135235345345</h5>
                </div>
                <div>
                  <label htmlFor="luas-bagian">Luas Induk (m)</label>
                  <h5>39</h5>
                </div>
                <div>
                  <label htmlFor="luas-bagian">
                    Nilai Sewa/Retribusi (Rp/Tahun)
                  </label>
                  <h5>Rp20.000.000</h5>
                </div>
              </div>
              <div
                className="right-form d-flex flex-col gap-3"
                style={{ paddingRight: "100px" }}
              >
                <div>
                  <label htmlFor="nomor-perikatan">Masa Berlaku</label>
                  <h5>02/09/2022-22/09/2025</h5>
                </div>
                <div>
                  <label htmlFor="nomor-perikatan">Nomor Perikatan</label>
                  <h5>XXX/ZZZ/104.5/2022</h5>
                </div>
                <div>
                  <label htmlFor="tanggal-perikatan">Tanggal Perikatan</label>
                  <h5>02/09/2022</h5>
                </div>
                <div className="d-flex flex-col">
                  <label className="font-semibold">Surat Perjanjian</label>
                  <h5 className="filename">SURAT PERJANJIAN-1.PDF</h5>
                </div>
                <div className="d-flex flex-col">
                  <label className="font-semibold">Surat Permohonan</label>
                  <h5 className="filename">SURAT PERMOHONAN-1.PDF</h5>
                </div>
              </div>
            </div>
            <div className="mx-3">
              <div
                className="d-flex flex-row justify-content-between px-3 py-3"
                style={{ marginTop: "30px" }}
              >
                <h5>Informasi Pembayaran</h5>
                <div className="d-flex">
                  <div
                    to="/dashboard/tambah"
                    className="primary-btn d-flex justify-content-center align-items-center"
                  >
                    Tambah Data
                  </div>
                </div>
              </div>
              <div className="table-informasi-pembayaran">
                <div
                  className="row text-dark"
                  style={{
                    background: "#F8F8F8",
                    padding: "15px",
                    border: "1px solid white",
                  }}
                >
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
                  <div
                    className="col d-flex gap-2 align-items-center justify-content-center w-100 p-0"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center p-1 btn"
                      style={{
                        color: "#286973",
                        borderRadius: "50%",
                        background: "#EDF9FB",
                        aspectRatio: "1",
                        flexShrink: "none",
                        fontSize: "20px"
                      }}
                      onClick={() => {
                        setShow(true);
                      }}
                    >
                      <FaRegEdit />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center p-1 btn"
                      style={{
                        color: "#DC2F2F",
                        borderRadius: "50%",
                        aspectRatio: "1",
                        flexShrink: "none",
                        fontSize: "20px"
                      }}
                    >
                      <FaRegTrashAlt />
                    </div>
                  </div>
                </div>
                <div
                  className="row text-dark"
                  style={{
                    background: "#F8F8F8",
                    padding: "15px",
                    border: "1px solid white",
                  }}
                >
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
                  <div
                    className="col d-flex gap-2 align-items-center justify-content-center w-100 p-0"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center p-1 btn"
                      style={{
                        color: "#286973",
                        borderRadius: "50%",
                        background: "#EDF9FB",
                        aspectRatio: "1",
                        flexShrink: "none",
                        fontSize: "20px"
                      }}
                    >
                      <FaRegEdit />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center p-1 btn"
                      style={{
                        color: "#DC2F2F",
                        borderRadius: "50%",
                        aspectRatio: "1",
                        flexShrink: "none",
                        fontSize: "20px"
                      }}
                    >
                      <FaRegTrashAlt />
                    </div>
                  </div>
                </div>
                <div
                  className="row text-dark"
                  style={{
                    background: "#F8F8F8",
                    padding: "15px",
                    border: "1px solid white",
                  }}
                >
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
                  <div
                    className="col d-flex gap-2 align-items-center justify-content-center w-100 p-0"
                  >
                    <div
                      className="d-flex justify-content-center align-items-center p-1 btn"
                      style={{
                        color: "#286973",
                        borderRadius: "50%",
                        background: "#EDF9FB",
                        aspectRatio: "1",
                        flexShrink: "none",
                        fontSize: "20px"
                      }}
                    >
                      <FaRegEdit />
                    </div>
                    <div
                      className="d-flex justify-content-center align-items-center p-1 btn"
                      style={{
                        color: "#DC2F2F",
                        borderRadius: "50%",
                        aspectRatio: "1",
                        flexShrink: "none",
                        fontSize: "20px"
                      }}
                    >
                      <FaRegTrashAlt />
                    </div>
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
