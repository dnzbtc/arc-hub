"use client";

import WalletButton from "./WalletButton";
import ProfileCard from "./ProfileCard";
import TokenCreator from "./TokenCreator";
import NFTCreator from "./NFTCreator";
import DailyMissions from "./DailyMissions";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4">
            Arc Hub
          </h1>

          <p className="text-zinc-400 text-xl">
            Community Toolkit for Arc Network
          </p>

          <div className="mt-8">
            <WalletButton />
          </div>
        </div>

        <div className="grid md:grid-cols-5 gap-6">

          <TokenCreator />

          <NFTCreator />

          <ProfileCard />

          <DailyMissions />

          <div className="bg-zinc-900 rounded-2xl p-6">
  <h2 className="text-2xl font-bold mb-4">
    Faucet
  </h2>

  <p className="text-zinc-400 mb-4">
    Get test tokens for Arc Network
  </p>

  <a
    href="https://faucet.circle.com/"
    target="_blank"
    className="block w-full py-3 text-center bg-green-600 rounded-xl"
  >
    Open Faucet
  </a>
</div>

          <div className="bg-zinc-900 rounded-2xl p-6">
  <h2 className="text-2xl font-bold mb-4">
    Daily Missions
  </h2>

  <div className="space-y-3">
    <div className="text-green-400">
      Deploy Token +50
    </div>

    <div className="text-purple-400">
      Deploy NFT +50
    </div>

    <div className="text-blue-400">
      Connect Wallet +10
    </div>
  </div>
</div>

        </div>

      </div>
    </main>
  );
}