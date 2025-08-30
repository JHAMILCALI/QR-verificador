import { useState, useRef } from 'react';

const AyniPayLanding = () => {
  const [scannedAddress, setScannedAddress] = useState('');
  const [contactName, setContactName] = useState('');
  const [contacts, setContacts] = useState<{name: string, address: string}[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isScanning, setIsScanning] = useState(false);

  // Simular escaneo de QR (en una implementación real usarías una librería como jsQR)
  const handleScanQR = () => {
    setIsScanning(true);
    // Simulación de escaneo después de 2 segundos
    setTimeout(() => {
      const mockAddress = '0x742d35Cc6634C0532925a3b844Bc454e4438f44e';
      setScannedAddress(mockAddress);
      setIsScanning(false);
    }, 2000);
  };

  const handleAddContact = () => {
    if (contactName && scannedAddress) {
      setContacts([...contacts, { name: contactName, address: scannedAddress }]);
      setContactName('');
      setScannedAddress('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-electric-violet-50 to-electric-violet-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-electric-violet-950 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-2xl font-bold">AyniPay</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-electric-violet-300 transition-colors">Home</a>
            <a href="#features" className="hover:text-electric-violet-300 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-electric-violet-300 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-electric-violet-300 transition-colors">Contact</a>
          </nav>
          <button className="bg-electric-violet-600 hover:bg-electric-violet-700 px-4 py-2 rounded-lg font-medium transition-colors">
            Connect Wallet
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-24 px-4">
        <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-electric-violet-900 mb-6">
              Make easy <span className="text-electric-violet-600">Web3 payments</span> with AyniPay
            </h1>
            <p className="text-electric-violet-800 mb-8 text-lg">
              Send crypto with just a name. No more long addresses. Secure, fast, and intuitive payments powered by AI and SAMA security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-electric-violet-600 hover:bg-electric-violet-700 text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.5,12.92 20.16,13.19L17.19,15.53L15.15,13.5L17.17,11.5L17.19,11.47L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                Google Play
              </button>
              <button className="bg-electric-violet-100 hover:bg-electric-violet-200 text-electric-violet-900 px-6 py-3 rounded-lg font-medium flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                App Store
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative bg-electric-violet-200 p-8 rounded-2xl shadow-xl transform rotate-2">
              <div className="bg-white p-6 rounded-xl shadow-md transform -rotate-1">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-electric-violet-900">Send Payment</h3>
                  <p className="text-electric-violet-600">Just type a name to pay</p>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-electric-violet-800 mb-1">Recipient</label>
                    <input 
                      type="text" 
                      placeholder="Enter name or username"
                      className="w-full p-3 border border-electric-violet-300 rounded-lg focus:ring-2 focus:ring-electric-violet-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-electric-violet-800 mb-1">Amount</label>
                    <div className="flex">
                      <input 
                        type="text" 
                        placeholder="0.0"
                        className="flex-grow p-3 border border-electric-violet-300 rounded-l-lg focus:ring-2 focus:ring-electric-violet-500 focus:border-transparent"
                      />
                      <select className="bg-electric-violet-100 text-electric-violet-900 p-3 border border-electric-violet-300 rounded-r-lg">
                        <option>USDT</option>
                        <option>ETH</option>
                        <option>USDC</option>
                      </select>
                    </div>
                  </div>
                  <button className="w-full bg-electric-violet-600 hover:bg-electric-violet-700 text-white py-3 rounded-lg font-medium transition-colors">
                    Send Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-electric-violet-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-electric-violet-900">2M+</div>
              <div className="text-electric-violet-700">Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-electric-violet-900">5K+</div>
              <div className="text-electric-violet-700">Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-electric-violet-900">1M+</div>
              <div className="text-electric-violet-700">Transactions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-electric-violet-900">2K+</div>
              <div className="text-electric-violet-700">Communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center text-electric-violet-900 mb-12">What Makes AyniPay Different?</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-electric-violet-100">
              <div className="w-12 h-12 bg-electric-violet-100 rounded-lg flex items-center justify-center text-electric-violet-700 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-electric-violet-900 mb-2">Fast & Intuitive</h3>
              <p className="text-electric-violet-700">Send payments with just a name. No more long addresses to copy and paste.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-electric-violet-100">
              <div className="w-12 h-12 bg-electric-violet-100 rounded-lg flex items-center justify-center text-electric-violet-700 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-electric-violet-900 mb-2">Identity Validation</h3>
              <p className="text-electric-violet-700">SAMA security ensures only verified transactions with identity validation.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-electric-violet-100">
              <div className="w-12 h-12 bg-electric-violet-100 rounded-lg flex items-center justify-center text-electric-violet-700 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-electric-violet-900 mb-2">Web3 Integration</h3>
              <p className="text-electric-violet-700">Seamlessly works with Base blockchain, MetaMask and other Web3 wallets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* QR Scanner Section */}
      <section className="py-16 px-4 bg-electric-violet-50">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-electric-violet-900 mb-6">Add Contacts with QR Scan</h2>
              <p className="text-electric-violet-700 mb-6">
                Simply scan a QR code to add someone to your contacts. Then you can send them payments using just their name.
              </p>
              
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="mb-4">
                  <label className="block text-electric-violet-800 mb-2">Scanned Address</label>
                  <input 
                    type="text" 
                    value={scannedAddress}
                    readOnly
                    className="w-full p-3 border border-electric-violet-300 rounded-lg bg-electric-violet-50"
                    placeholder="Scan a QR code to get address"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-electric-violet-800 mb-2">Contact Name</label>
                  <input 
                    type="text" 
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full p-3 border border-electric-violet-300 rounded-lg focus:ring-2 focus:ring-electric-violet-500 focus:border-transparent"
                    placeholder="Enter name for this contact"
                  />
                </div>
                
                <button 
                  onClick={handleAddContact}
                  disabled={!scannedAddress || !contactName}
                  className="w-full bg-electric-violet-600 hover:bg-electric-violet-700 disabled:bg-electric-violet-300 text-white py-3 rounded-lg font-medium transition-colors"
                >
                  Add Contact
                </button>
              </div>
            </div>
            
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-electric-violet-200 rounded-xl flex items-center justify-center border-4 border-electric-violet-300">
                  {isScanning ? (
                    <div className="text-center">
                      <div className="animate-pulse mb-3">
                        <svg className="w-16 h-16 mx-auto text-electric-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0v1m-6-2h2M7 7h2m0 0v1m0 6h2m0 0v1m6-6h2m0 0v1m0 6h2m0 0v1"></path>
                        </svg>
                      </div>
                      <p className="text-electric-violet-700">Scanning...</p>
                    </div>
                  ) : (
                    <>
                      <video ref={videoRef} className="hidden"></video>
                      <svg className="w-32 h-32 text-electric-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0v1m-6-2h2M7 7h2m0 0v1m0 6h2m0 0v1m6-6h2m0 0v1m0 6h2m0 0v1"></path>
                      </svg>
                    </>
                  )}
                </div>
                
                <button 
                  onClick={handleScanQR}
                  className="mt-6 w-full bg-electric-violet-600 hover:bg-electric-violet-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0v1m-6-2h2M7 7h2m0 0v1m0 6h2m0 0v1m6-6h2m0 0v1m0 6h2m0 0v1"></path>
                  </svg>
                  Scan QR Code
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts List */}
      {contacts.length > 0 && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center text-electric-violet-900 mb-8">Your Contacts</h2>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {contacts.map((contact, index) => (
                <div key={index} className="p-4 border-b border-electric-violet-100 last:border-b-0 flex justify-between items-center">
                  <div>
                    <div className="font-medium text-electric-violet-900">{contact.name}</div>
                    <div className="text-sm text-electric-violet-600">{contact.address.substring(0, 8)}...{contact.address.substring(contact.address.length - 6)}</div>
                  </div>
                  <button className="text-electric-violet-600 hover:text-electric-violet-800">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-electric-violet-900 text-white">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to simplify your Web3 payments?</h2>
          <p className="text-electric-violet-200 mb-8">Join thousands of users enjoying fast, secure payments with just a name.</p>
          <button className="bg-white text-electric-violet-900 hover:bg-electric-violet-100 px-8 py-3 rounded-lg font-medium transition-colors">
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 px-4 bg-electric-violet-950 text-electric-violet-200">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">AyniPay</div>
              <p>Making Web3 payments simple, secure, and human.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>support@aynipay.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="flex space-x-4 pt-2">
                  <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-electric-violet-800 mt-8 pt-8 text-center">
            <p>© {new Date().getFullYear()} AyniPay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AyniPayLanding;