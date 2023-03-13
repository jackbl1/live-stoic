import { PeazeSDK } from "@peaze-labs/react";
import { useState } from "react";
import { ethers } from "ethers";
import React from "react";

const peaze = new PeazeSDK({
  id: "proj_iA9buNxqNtvvEUWSP1g58ZwPUsL6I3kj",
  key: "sk_barpv8XxeM8iq2IdmtIGoiYMapJ8UhGK",
});

export function PeazeButton() {
  // const provider = new HDWalletProvider(
  //     privateKey,
  //     "https://polygon-mainnet.g.alchemy.com/v2/ZJPS5rJracK8u9zpaBhZdgAd8tL7LRhg"
  //   );

  //const provider = new ethers.providers.AlchemyProvider('mumbai', apiKey);

  const provider = new ethers.AlchemyProvider(
    "maticmum",
    process.env.NEXT_PUBLIC_ALCHEMY_KEY
  );

  //   const config = {
  //     apiKey: "UfN8SzS7iyEBPgtIrDsc3-H2tSpUD-5S",
  //     network: Network.MATIC_MUMBAI,
  //   };
  //   const alchemy = new Alchemy(config);

  const [signer, setSigner] = useState<any>();

  const login = async () => {
    // opens Authentication Modal
    const signer = await peaze.getSigner(provider as any);
    setSigner(signer);
  };

  return (
    <>
      {signer ? (
        //   <button onClick={deposit}>Deposit</button>
        <p>{signer.address.substring(0, 5)}</p>
      ) : (
        <button
          onClick={login}
          className="px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-600 mx-2"
        >
          Sign In
        </button>
      )}
    </>
  );
}
