"use client";

import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function WalletButton() {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();

  if (isConnected) {
    return (
      <div className="mt-8 flex flex-col items-center gap-4">
        <div className="bg-zinc-900 px-4 py-3 rounded-xl">
          <p className="text-green-400 text-sm">
            Connected Wallet
          </p>

          <p className="text-white">
            {address?.slice(0, 6)}...
{address?.slice(-4)}
          </p>
        </div>

        <button
          onClick={() => disconnect()}
          className="px-6 py-3 bg-red-600 rounded-xl"
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => connect({ connector: connectors[0] })}
      className="mt-8 px-8 py-4 bg-blue-600 rounded-xl"
    >
      Connect Wallet
    </button>
  );
}