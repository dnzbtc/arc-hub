"use client";

import ArcNFT from "./contracts/ArcNFT.json";
import { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";

export default function NFTCreator() {
  const { isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");

  async function deployNFT() {
    
    if (!name || !symbol) {
  alert("Fill all fields");
  return;
    }
    if (!walletClient) {
      alert("Connect wallet first");
      return;
    }

    try {
      setLoading(true);

      const hash = await walletClient.deployContract({
        abi: ArcNFT.abi,
        bytecode: ArcNFT.bytecode as `0x${string}`,
        args: [
          name,
          symbol
        ]
      });

      setTxHash(hash);
      
      localStorage.setItem(
  "last_nft",
  name
);

      const currentTxs =
        Number(localStorage.getItem("arc_txs") || "0");

      localStorage.setItem(
        "arc_txs",
        String(currentTxs + 1)
      );

      const currentPoints =
        Number(localStorage.getItem("arc_points") || "0");

      localStorage.setItem(
        "arc_points",
        String(currentPoints + 50)
      );

    } catch (error) {
      console.error(error);
      alert("Transaction rejected");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-zinc-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-3">
        Deploy NFT
      </h2>

      <p className="text-zinc-400 mb-4">
        Create NFT collections
      </p>
      <input
  className="w-full p-3 rounded bg-zinc-800 mb-3"
  placeholder="Collection Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

<input
  className="w-full p-3 rounded bg-zinc-800 mb-3"
  placeholder="Collection Symbol"
  value={symbol}
  onChange={(e) => setSymbol(e.target.value)}
/>

{txHash && (
  <div className="bg-green-900 p-3 rounded mb-3">
    NFT Contract Deployed

<p className="text-xs mt-2 break-all">
  {txHash}
</p>
  </div>
)}

      <button
        onClick={deployNFT}
        disabled={!isConnected || loading}
        className="w-full py-3 bg-purple-600 rounded-xl"
      >
        {loading ? "Waiting..." : "Create NFT"}
      </button>

      {txHash && (
        <div className="mt-4 p-3 rounded bg-green-900">
          NFT Contract Deployed
        </div>
      )}
    </div>
  );
}