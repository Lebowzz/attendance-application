import React from "react";
import ReactDOM from "react-dom";
import QRCode from "react-qr-code";

function QrGenerator() {
  return (
    <div className="h-[100vh] w-[100vw] flex flex-col items-center justify-center bg-white">
      <div className="text-3xl mb-5 font-bold">Scan QR</div>
      <QRCode
        size={256}
        style={{ height: "50%", maxWidth: "100%", width: "80%" }}
        value={"http://172.21.80.1:3000/login"}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}

export default QrGenerator;
