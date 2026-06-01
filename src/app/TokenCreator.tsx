"use client";
import ArcToken from "./contracts/ArcToken.json";
import { useState } from "react";
import { useAccount, useWalletClient } from "wagmi";

export default function TokenCreator() {
  const { isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");

  const [loading, setLoading] = useState(false);
  const [txHash, setTxHash] = useState("");

  async function deployToken() {
    if (!walletClient) {
      alert("Connect wallet first");
      return;
    }

    try {
      setLoading(true);

      const hash = await walletClient.deployContract({
  abi: ArcToken.abi,
  bytecode: ArcToken.bytecode as `0x${string}`,
  args: [
    name,
    symbol,
    BigInt(supply)
  ],
});

setTxHash(hash);
localStorage.setItem(
  "last_token",
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
  String(currentPoints + 100)
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
      <h2 className="text-2xl font-bold mb-4">
        Deploy Token
      </h2>

      <div className="space-y-4">
        <input
          className="w-full p-3 rounded bg-zinc-800"
          placeholder="Token Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-zinc-800"
          placeholder="Symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />

        <input
          className="w-full p-3 rounded bg-zinc-800"
          placeholder="Total Supply"
          value={supply}
          onChange={(e) => setSupply(e.target.value)}
        />

        <button
          onClick={deployToken}
          disabled={!isConnected || loading}
          className="w-full py-3 bg-blue-600 rounded-xl"
        >
          {loading ? "Waiting..." : "Deploy ERC20"}
        </button>

        {txHash && (
          <div className="bg-green-900/30 border border-green-500 rounded-xl p-3">
            <p className="text-green-400">
              Transaction Sent
            </p>

            <a
              href={`https://testnet.arcscan.app/tx/${txHash}`}
              target="_blank"
              className="text-blue-400 break-all"
            >
              View on ArcScan
            </a>
          </div>
        )}
      </div>
    </div>
  );
}