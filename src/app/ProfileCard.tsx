"use client";

import { useAccount } from "wagmi";

export default function ProfileCard() {
  const { address, isConnected, chain } = useAccount();

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
            Balance
          </p>

          <p className="text-purple-400">
            Coming Soon
          </p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">
            Transactions
          </p>

          <p>
            Coming Soon
          </p>
        </div>

        <div>
          <p className="text-zinc-400 text-sm">
            Points
          </p>

          <p>
            Coming Soon
          </p>
        </div>
      </div>
    </div>
  );
}