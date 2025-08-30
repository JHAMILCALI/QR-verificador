import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { QRCodeCanvas } from "qrcode.react";

// Extiende la interfaz Window para incluir ethereum
declare global {
  interface Window {
  ethereum?: {
    request: (...args: any[]) => Promise<any>;
    // Puedes agregar más métodos si los necesitas
  }
}
}

function App() {
  const [currentAccount, setCurrentAccount] = useState(null)

  // 👉 Conectar wallet
  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask no está instalado. Instálalo para continuar 🚀")
      return
    }

    try {
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" })
      setCurrentAccount(accounts[0])
    } catch (error) {
      console.error(error)
    }
  }

  // 👉 Desconectar wallet (solo frontend)
  const disconnectWallet = () => {
    setCurrentAccount(null)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
      {/* Logos */}
      <div className="flex space-x-10 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-20 hover:scale-110 transition-transform" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-20 hover:rotate-12 transition-transform" alt="React logo" />
        </a>
      </div>

      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Vite + React + Tailwind + MetaMask + QR
      </h1>

      <div className="bg-white text-gray-900 px-8 py-6 rounded-2xl shadow-lg text-center">
        {!currentAccount ? (
          <button
            onClick={connectWallet}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            🔗 Conectar Wallet
          </button>
        ) : (
          <div className="flex flex-col items-center space-y-4">
            <p className="mb-2 text-sm text-gray-600">
              ✅ Conectado:
              <span className="block mt-1 font-mono text-green-600 break-all">
                {currentAccount}
              </span>
            </p>

            {/* Generar QR con la address */}
            <QRCodeCanvas value={currentAccount} size={180} bgColor="#ffffff" fgColor="#000000" />

            <button
              onClick={disconnectWallet}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              ❌ Desconectar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default App
