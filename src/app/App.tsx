import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { CoinSlot } from '@/app/components/CoinSlot';
import { getRandomCoins, CoinData } from '@/app/data/cryptoData';

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
}

export default function App() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [score, setScore] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [usingAPI, setUsingAPI] = useState(false);

  const fetchFromAPI = async (): Promise<Coin[] | null> => {
    try {
      // Try CoinGecko with no-cors mode first
      const randomPage = Math.floor(Math.random() * 50) + 1;
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${randomPage}&sparkline=false`,
        { 
          method: 'GET',
        }
      );
      
      if (!response.ok) throw new Error('CoinGecko failed');

      const data = await response.json();
      const validCoins = data.filter(
        (coin: any) => coin.current_price && coin.current_price > 0 && coin.image
      );
      
      // Make sure we have at least 3 valid coins
      if (validCoins.length < 3) throw new Error('Not enough valid coins');
      
      const shuffled = [...validCoins].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3).map((coin: any) => ({
        id: coin.id,
        symbol: coin.symbol,
        name: coin.name,
        image: coin.image,
        current_price: coin.current_price,
      }));
    } catch (error) {
      console.log('API fetch failed, using local database');
      return null;
    }
  };

  const fetchRandomCoins = async () => {
    setLoading(true);
    
    // Try API first
    const apiCoins = await fetchFromAPI();
    
    if (apiCoins && apiCoins.length === 3) {
      setCoins(apiCoins);
      setUsingAPI(true);
    } else {
      // Fallback to local database
      const localCoins = getRandomCoins(3);
      setCoins(localCoins);
      setUsingAPI(false);
    }
    
    setIsRevealed(false);
    setSelectedIndex(null);
    setLoading(false);
  };

  useEffect(() => {
    fetchRandomCoins();
  }, []);

  const handleGuess = (index: number) => {
    if (isRevealed) return;

    setSelectedIndex(index);
    setIsRevealed(true);

    // Find all coins with the highest price (to handle ties)
    const highestPrice = Math.max(...coins.map(c => c.current_price));
    const winningIndices = coins
      .map((coin, idx) => coin.current_price === highestPrice ? idx : -1)
      .filter(idx => idx !== -1);

    // Check if the selected index is one of the winning indices
    if (winningIndices.includes(index)) {
      setScore(score + 1);
    }
  };

  const handleNextRound = () => {
    fetchRandomCoins();
  };

  const getHighestPriceIndices = () => {
    const highestPrice = Math.max(...coins.map(c => c.current_price));
    return coins
      .map((coin, idx) => coin.current_price === highestPrice ? idx : -1)
      .filter(idx => idx !== -1);
  };

  const formatPrice = (price: number): string => {
    if (price >= 1) {
      // For prices $1 and above, show 2 decimals
      return `$${price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    } else if (price >= 0.01) {
      // For prices between $0.01 and $1, show up to 4 decimals
      return `$${price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 4,
      })}`;
    } else if (price >= 0.000001) {
      // For very small prices, show up to 8 decimals
      return `$${price.toFixed(8)}`;
    } else {
      // For extremely small prices, use scientific notation
      return `$${price.toExponential(2)}`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-red-900 to-black flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-6 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-yellow-400 mb-2 sm:mb-4">
            🎰 Crypto Slot Machine
          </h1>
          <p className="text-lg sm:text-2xl text-yellow-300 mb-2">
            Which coin costs the most?
          </p>
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-yellow-600 text-black px-6 py-2 sm:px-8 sm:py-3 rounded-full text-2xl sm:text-3xl font-bold shadow-2xl">
            Score: {score}
          </div>
        </motion.div>

        {/* Slot Machine Body */}
        <div className="relative">
          {/* Main slot machine frame */}
          <div className="bg-gradient-to-b from-red-700 via-red-600 to-red-800 rounded-3xl p-4 sm:p-8 shadow-2xl border-4 sm:border-8 border-yellow-500">
            {/* Inner panel */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl p-4 sm:p-8">
              {loading ? (
                <div className="flex items-center justify-center h-64">
                  <div className="text-yellow-400 text-xl sm:text-2xl animate-pulse">
                    Loading coins...
                  </div>
                </div>
              ) : (
                <>
                  {/* Coin Slots */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
                    {coins.map((coin, index) => {
                      const isWinningSlot = getHighestPriceIndices().includes(index);
                      return (
                        <div key={coin.id} className="relative">
                          <CoinSlot
                            image={coin.image}
                            name={coin.name}
                            symbol={coin.symbol}
                            slotNumber={index + 1}
                            onSelect={() => handleGuess(index)}
                            isRevealed={isRevealed}
                            isCorrect={isRevealed && selectedIndex === index && isWinningSlot}
                            isWrong={isRevealed && selectedIndex === index && !isWinningSlot}
                          />
                          {/* Show crown on winning slots after reveal */}
                          {isRevealed && isWinningSlot && selectedIndex !== index && (
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              animate={{ scale: 1, rotate: 0 }}
                              className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 text-3xl sm:text-4xl"
                            >
                              👑
                            </motion.div>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Result and Next Round */}
                  {isRevealed && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center space-y-4"
                    >
                      <div className="bg-gray-800 rounded-xl p-4 sm:p-6 mb-4">
                        <h3 className="text-yellow-400 text-lg sm:text-xl font-bold mb-3">
                          Actual Prices:
                        </h3>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 text-white">
                          {coins.map((coin, index) => (
                            <div
                              key={coin.id}
                              className={`text-center ${
                                getHighestPriceIndices().includes(index)
                                  ? 'text-green-400 font-bold text-lg sm:text-xl'
                                  : ''
                              }`}
                            >
                              <div className="text-sm">{coin.symbol.toUpperCase()}</div>
                              <div className="font-mono text-sm sm:text-base">
                                {formatPrice(coin.current_price)}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleNextRound}
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-3 sm:py-4 rounded-full shadow-xl"
                      >
                        Next Round 🎰
                      </motion.button>
                    </motion.div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-6 sm:h-8 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-t-full shadow-xl" />
        </div>

        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 sm:mt-8 text-center text-yellow-200 space-y-2 px-4"
        >
          <p className="text-base sm:text-lg font-semibold">
            Now you can make decisions on coins only using their name and logo,
            JUST LIKE A REAL CRYPTO TRADER
          </p>
          <p className="text-base sm:text-lg font-semibold">
            Created by Jacob Arciniega-Bueno.
          </p>
          <p className="text-xs sm:text-sm text-yellow-300/70">
            {usingAPI 
              ? 'Using live data from CoinGecko API 🌐' 
              : 'Using local database with 60+ cryptocurrencies 📊'
            }
          </p>
        </motion.div>
      </div>
    </div>
  );
}