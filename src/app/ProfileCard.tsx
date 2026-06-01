"use client";

import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

export default function ProfileCard() {
  const { address, isConnected, chain } = useAccount();

  const [points, setPoints] = useState(0);
  const [txCount, setTxCount] = useState(0);
  const [lastToken, setLastToken] = useState("-");
  const [lastNFT, setLastNFT] = useState("-");

  useEffect(() => {
    setPoints(
      Number(localStorage.getItem("arc_points") || "0")
    );

    setTxCount(
      Number(localStorage.getItem("arc_txs") || "0")
    );

    setLastToken(
      localStorage.getItem("last_token") || "-"
    );

    setLastNFT(
      localStorage.getItem("last_nft") || "-"
    );
  }, []);

  let level = "Explorer";

  let nextLevel = 100;
let progress = points;

if (points >= 100) {
  nextLevel = 300;
  progress = points - 100;
}

if (points >= 300) {
  nextLevel = 1000;
  progress = points - 300;
}

if (points >= 1000) {
  nextLevel = 1000;
  progress = 1000;
}

  if (points >= 100) {
    level = "Builder";
  }

  if (points >= 300) {
    level = "Master Builder";
  }

  if (points >= 1000) {
    level = "Arc Legend";
  }

  if (!isConnected) {
    return (
      <div className="bg-zinc-900 rounded-2xl p-6">
        <h2 className="text-2xl font-bold mb-3">
          Arc Profile
        </h2>

        <p className="text-zinc-400">
          Connect wallet first
        </p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900 rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        Arc Profile
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-zinc-400 text-sm">
            Wallet
          </p>

          <p className="text-green-400">
            {address?.slice(0, 6)}...
            {address?.slice(-4)}
          </p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">
            Network
          </p>

          <p className="text-blue-400">
            {chain?.name || "Unknown"}
          </p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">
            Chain ID
          </p>

          <p className="text-yellow-400">
            {chain?.id || "-"}
          </p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">
            Transactions
          </p>

          <p className="text-white">
            {txCount}
          </p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">
            Points
          </p>

          <p className="text-purple-400">
            {points}
          </p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">
            Level
          </p>

          <p className="text-orange-400 font-semibold">
            {level}
          </p>
          <p className="text-orange-400 font-semibold">
  {level}
</p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">
            Last Token
          </p>

          <p className="text-green-400 break-all">
            {lastToken}
          </p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">
            Last NFT
          </p>

          <p className="text-pink-400 break-all">
            {lastNFT}
          </p>
        </div>
      </div>
    </div>
  );
}