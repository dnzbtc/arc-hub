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

          <button className="mt-8 px-8 py-4 bg-blue-600 rounded-xl">
            Connect Wallet
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">
              Deploy Token
            </h2>

            <p className="text-zinc-400 mb-4">
              Launch your own ERC20 token
            </p>

            <button className="w-full py-3 bg-blue-600 rounded-xl">
              Create Token
            </button>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">
              Deploy NFT
            </h2>

            <p className="text-zinc-400 mb-4">
              Create NFT collections
            </p>

            <button className="w-full py-3 bg-purple-600 rounded-xl">
              Create NFT
            </button>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <h2 className="text-2xl font-bold mb-3">
              Arc Profile
            </h2>

            <p className="text-zinc-400 mb-4">
              Track your activity
            </p>

            <button className="w-full py-3 bg-green-600 rounded-xl">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}