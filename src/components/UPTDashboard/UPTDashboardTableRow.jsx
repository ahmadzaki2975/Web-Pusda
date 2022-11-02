import { UPTDashboardTableCol } from "./UPTDashboardTableCol";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const UPTDashboardTableRow = ({
  id,
  sertifikatNomor,
  hakPakaiTanggal,
  jenisPemanfaatan,
  alamat,
  luas,
  handleShow,
  toggleTambahTanah,
  nilaiAset,
  setFormData
}) => {
  return (
    <div
      className="row db-upt-row mx-auto bg-white m-1 py-2"
      style={{ width: "95%", borderRadius: "5px", minHeight: "80px" }}
    >
      <Link to="/dashboard/upt/detail" className="col number d-flex align-items-center justify-content-center font-semibold ">
        {id}
      </Link>
      <UPTDashboardTableCol title="SERTIFIKAT NOMOR" value={sertifikatNomor} />
      <UPTDashboardTableCol title="HAK PAKAI TANGGAL" value={hakPakaiTanggal} />
      <UPTDashboardTableCol
        title="JENIS PEMANFAATAN"
        value={jenisPemanfaatan}
      />
      <UPTDashboardTableCol title="ALAMAT" value={alamat} />
      <UPTDashboardTableCol title="LUAS" value={luas} />
      <div
        className="col d-flex gap-2 align-items-center justify-content-between w-100 p-0"
        style={{ fontSize: "20px" }}
      >
        <div
          className="d-flex justify-content-center align-items-center p-1 btn"
          style={{
            color: "#286973",
            borderRadius: "50%",
            background: "#EDF9FB",
            aspectRatio: "1",
            flexShrink: "none",
          }}
          onClick={() => {
            setFormData({
              id: id,
              sertifikatNomor: sertifikatNomor,
              hakPakaiTanggal: hakPakaiTanggal,
              jenisPemanfaatan: jenisPemanfaatan,
              alamat: alamat,
              luas: luas,
              nilaiAset: nilaiAset,
            })
            toggleTambahTanah();
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
          }}
          data-bs-toggle="modal"
          data-bs-target="#modal"
          onClick={() => {
            handleShow();
          }}
        >
          <FaRegTrashAlt />
        </div>
      </div>
    </div>
  );
};
