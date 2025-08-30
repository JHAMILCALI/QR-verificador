import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { QRCodeCanvas } from "qrcode.react"
import { QrReader } from '@blackbox-vision/react-qr-reader'

declare global {
  interface Window {
    ethereum?: any;
  }
}

function App() {
  const [currentAccount, setCurrentAccount] = useState<string | null>(null)
  const [showWallet, setShowWallet] = useState(false)
  const [scanQR, setScanQR] = useState(false)
  const [scannedData, setScannedData] = useState<string | null>(null)

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask no está instalado. Instálalo para continuar 🚀")
      return
    }
    try {
      const accounts: string[] = await window.ethereum.request({ method: "eth_requestAccounts" })
      setCurrentAccount(accounts[0])
      setShowWallet(true)
      setScanQR(false)
    } catch (error) {
      console.error(error)
    }
  }

  const disconnectWallet = () => {
    setCurrentAccount(null)
    setShowWallet(false)
    setScanQR(false)
    setScannedData(null)
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

      <div className="bg-white text-gray-900 px-8 py-6 rounded-2xl shadow-lg text-center flex flex-col items-center space-y-4">
        {/* Botón Escanear QR siempre visible */}
        <button
          onClick={() => {
            setScanQR(!scanQR)
            setShowWallet(false)
          }}
          className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
        >
          {scanQR ? "Cerrar Escáner" : "Escanear QR"}
        </button>

        {scanQR && (
          <div className="mt-4 flex flex-col items-center space-y-2">
            <QrReader
              constraints={{ facingMode: 'environment' }}
              scanDelay={500}
              onResult={(result, error) => {
                if (!!result) setScannedData(result?.text)
              }}
              style={{ width: 300 }}
            />
            {scannedData && (
              <p className="mt-2 text-sm text-gray-600 break-all font-mono">
                Resultado: {scannedData}
              </p>
            )}
          </div>
        )}

        {/* Botón Conectar Wallet solo si no está conectado */}
        {!currentAccount && !scanQR && (
          <button
            onClick={connectWallet}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            🔗 Conectar Wallet
          </button>
        )}

        {/* Si está conectado */}
        {currentAccount && !scanQR && (
          <>
            <div className="flex space-x-4">
              <button
                onClick={() => setShowWallet(!showWallet)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                {showWallet ? "Ocultar Wallet + QR" : "Mostrar Wallet + QR"}
              </button>

              <button
                onClick={disconnectWallet}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
              >
                ❌ Desconectar
              </button>
            </div>

            {showWallet && (
              <div className="mt-4 flex flex-col items-center space-y-2">
                <p className="text-sm text-gray-600 break-all font-mono">
                  ✅ Wallet: {currentAccount}
                </p>
                <QRCodeCanvas value={currentAccount} size={180} bgColor="#ffffff" fgColor="#000000" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default App
