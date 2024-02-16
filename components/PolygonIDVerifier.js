import { useState, useEffect } from "react";
import QRCode from "react-qr-code";
import { io } from "socket.io-client";

const linkDownloadPolygonIDWalletApp = "https://0xpolygonid.github.io/tutorials/wallet/wallet-overview/#quick-start";

function PolygonIDVerifier({ publicServerURL }) {
  const [qrCodeData, setQrCodeData] = useState();
  const [sessionId, setSessionId] = useState("");

  useEffect(() => {
    const socket = io(publicServerURL);
    socket.on("connect", () => {
      setSessionId(socket.id);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    const fetchQrCode = async () => {
      const response = await fetch(getQrCodeApi(sessionId));
      const data = await response.text();
      return JSON.parse(data);
    };

    if (sessionId) {
      fetchQrCode().then(setQrCodeData).catch(console.error);
    }
  }, [sessionId]);

  const getQrCodeApi = (sessionId) => `${publicServerURL}/api/get-auth-qr?sessionId=${sessionId}`;

  return (
    <div style={{ textAlign: "center" }}>
      {qrCodeData && (
        <div>
          <QRCode value={JSON.stringify(qrCodeData)} />
        </div>
      )}
    </div>
  );
}

export default PolygonIDVerifier;
