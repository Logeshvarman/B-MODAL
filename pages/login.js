import { useContext, useEffect, useState } from "react";
import Button from "../components/Button";
import logo from "../public/svg/logo.svg";
import Image from "next/image";
import { CheckCircle } from "react-feather";
import Link from "next/link";
import Head from "next/head";
import Web3Modal from "web3modal";
import { ethers } from "ethers";
import router from "next/router";
import routeNames from "../routes";
import { logout } from "../components/Utils";
import { appDetailsContext } from "../context/AppDetails";
import PolygonIDVerifier from "../components/PolygonIDVerifier";

function Login() {
  const [pressed, setPressed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedNetwork, setSelectedNetwork] = useState("");
  const [appDetails, setAppDetails] = useContext(appDetailsContext);

  const handleVerificationResult = (result) => {
    if (result) {
      setPressed(true);
    } else {
      setError("User verification failed");
    }
  };

  useEffect(() => {
    logout();
  }, []);

  const handleNetworkSelection = (e) => {
    setError("");
    setSelectedNetwork(e.target.value);
  };

  const handleClick = async () => {
    setLoading(true);
    try {
      // Simulate verification success for now
      handleVerificationResult(true);
    } catch (error) {
      console.log(error);
      setError("User verification failed");
    }
  };

  return (
    <>
      <Head>
        <title>Voting DAPP | Login</title>
      </Head>
      <div className="grid xl:grid-cols-2 gap-40 pt-24 px-32">
        <div className="pb-10 xl:px-10 mx-auto  pt-56">
          <h1 className="text-4xl text-primary">Voting DAPP</h1>A platform that
          gives you access to <br /> a secure polling system. Developed <br />{" "}
          using blockchain technology.
        </div>
        <div className="bg-white p-10 py-32 text-center">
          {!pressed ? (
            <div className="card">
              <h1 className="text-primary text-4xl">
                <b>Votechain</b>
              </h1>
              <div className="mt-10">
                <PolygonIDVerifier
                  onVerificationResult={handleVerificationResult}
                  publicServerURL="https://vested-onset.onrender.com"
                />
                {error && <div className="text-red-500 text-sm mb-10">{error}</div>}
              </div>
            </div>
          ) : (
            <div className="card flex flex-col justify-center items-center">
              <h1 className="text-primary text-4xl">Successful</h1>
              <CheckCircle
                width={80}
                height={80}
                className="text-primary my-5"
                strokeWidth={1}
              />
              <br />
              <div>
                <label>Network: </label>
                <select
                  className="form-select appearance-none
                              block
                              w-full
                              px-3
                              py-1.5
                              text-base
                              font-normal
                              text-gray-700
                              bg-white bg-clip-padding bg-no-repeat
                              border border-solid border-gray-300
                              rounded
                              transition
                              ease-in-out
                              m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  value={selectedNetwork}
                  onChange={handleNetworkSelection}
                >
                  <option value="" disabled hidden>
                    Select Network
                  </option>
                  <option value={1666700000}>Harmony Testnet Shard 0</option>
                  <option value={80001}>Matic Mumbai</option>
                </select>
              </div>
              <Button className="my-4" onClick={handleClick}>
                {loading ? "Connecting Securely..." : "Connect to Metamask Wallet"}
              </Button>
              {error && <div className="text-red-500 text-sm mb-10">{error}</div>}
              <p className="uppercase">
                Login securely{" "}
                <Link href="#">
                  <a className="text-primary">Here</a>
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Login;
