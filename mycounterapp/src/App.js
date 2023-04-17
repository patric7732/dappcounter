import {
  ConnectWallet,
  useContract,
  Web3Button,
  useContractWrite,
  useContractRead,
} from "@thirdweb-dev/react";
import { useState } from "react";
import "./styles/Home.css";

export default function Home() {
  const contractAddress = "0x6B5F88f697026B9709C4baa9280124c6B2BE4356";

  const { contract } = useContract(contractAddress);

  // get
  const { data, error } = useContractRead(contract, "getCounter");

  if (error) {
    console.error("failed to read contract", error);
  }

  const [counter, setCounter] = useState();

  async function getCounter() {
    setCounter(parseInt(data._hex));
  }

  const { mutateAsync: incrementCounter } = useContractWrite(
    contract,
    "incrementCounter"
  );

  const { mutateAsync: decrementCounter } = useContractWrite(
    contract,
    "decrementCounter"
  );

  return (
    <div className="container">
      <main className="main">
        <h1 className="title">THIRDWEB DAPP COUNTER</h1>

        <p className="description">Thirdweb 기본 DAPP 카운터</p>

        <div className="connect">
          <ConnectWallet
            dropdownPosition={{ side: "bottom", align: "center" }}
          />
        </div>

        <div>{parseInt(data)}</div>

        <br />

        <Web3Button contractAddress={contractAddress} action={getCounter}>
          Refresh Counter
        </Web3Button>

        <br />

        <Web3Button contractAddress={contractAddress} action={incrementCounter}>
          Increment Counter
        </Web3Button>

        <br />

        <Web3Button contractAddress={contractAddress} action={decrementCounter}>
          Decrement Counter
        </Web3Button>
      </main>
    </div>
  );
}
