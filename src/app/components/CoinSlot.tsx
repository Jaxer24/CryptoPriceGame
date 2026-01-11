import { motion } from 'motion/react';

interface CoinSlotProps {
  image: string;
  name: string;
  symbol: string;
  slotNumber: number;
  onSelect: () => void;
  isRevealed: boolean;
  isCorrect?: boolean;
  isWrong?: boolean;
}

export function CoinSlot({
  image,
  name,
  symbol,
  slotNumber,
  onSelect,
  isRevealed,
  isCorrect,
  isWrong,
}: CoinSlotProps) {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4">
      {/* Slot Machine Reel */}
      <div className="relative">
        {/* Outer frame */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-600 via-yellow-500 to-yellow-700 rounded-lg shadow-2xl" />
        
        {/* Inner shadow frame */}
        <div className="relative m-1 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-lg p-1">
          {/* Reel window */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="bg-white rounded relative overflow-hidden w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center shadow-inner"
          >
            {/* Coin display */}
            <div className="flex flex-col items-center justify-center gap-1 sm:gap-2 p-2 sm:p-4">
              <img
                src={image}
                alt={symbol}
                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/64?text=' + symbol;
                }}
              />
              <div className="text-center">
                <div className="font-bold text-xs sm:text-sm">{symbol.toUpperCase()}</div>
                <div className="text-[10px] sm:text-xs text-gray-600 truncate max-w-[80px] sm:max-w-[120px]">
                  {name}
                </div>
              </div>
            </div>

            {/* Result overlay */}
            {isRevealed && isCorrect && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 bg-green-500/90 flex items-center justify-center"
              >
                <span className="text-white font-bold text-3xl sm:text-4xl">✓</span>
              </motion.div>
            )}
            {isRevealed && isWrong && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute inset-0 bg-red-500/90 flex items-center justify-center"
              >
                <span className="text-white font-bold text-3xl sm:text-4xl">✗</span>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Decorative screws */}
        <div className="absolute top-1 sm:top-2 left-1 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gray-700 rounded-full shadow-inner" />
        <div className="absolute top-1 sm:top-2 right-1 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 bg-gray-700 rounded-full shadow-inner" />
        <div className="absolute bottom-1 sm:bottom-2 left-1 sm:left-2 w-2 h-2 sm:w-3 sm:h-3 bg-gray-700 rounded-full shadow-inner" />
        <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-2 w-2 h-2 sm:w-3 sm:h-3 bg-gray-700 rounded-full shadow-inner" />
      </div>

      {/* Selection button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={onSelect}
        disabled={isRevealed}
        className={`
          w-14 h-14 sm:w-16 sm:h-16 rounded-full font-bold text-xl sm:text-2xl shadow-lg
          transition-all duration-200
          ${
            isRevealed
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-b from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white cursor-pointer'
          }
          ${isCorrect ? 'ring-4 ring-green-400' : ''}
          ${isWrong ? 'ring-4 ring-red-400' : ''}
        `}
      >
        {slotNumber}
      </motion.button>
    </div>
  );
}