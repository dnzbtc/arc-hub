"use client";

import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

export default function DailyMissions() {
  const { isConnected } = useAccount();

  const [txs, setTxs] = useState(0);

  useEffect(() => {
    setTxs(
      Number(localStorage.getItem("arc_txs") || "0")
    );
  }, []);

  return (
    <div className="bg-zinc-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        Daily Missions
      </h2>

      <div className="space-y-3">

        <div>
          {txs >= 1 ? "✅" : "⬜"} Deploy Token +50
        </div>

        <div>
          {txs >= 2 ? "✅" : "⬜"} Deploy NFT +50
        </div>

        <div>
          {isConnected ? "✅" : "⬜"} Connect Wallet +10
        </div>

      </div>
    </div>
  );
}