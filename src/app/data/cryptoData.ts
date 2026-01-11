export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
}

// Large database of real crypto coins with varied prices
export const cryptoDatabase: CoinData[] = [
  // Popular coins
  { id: 'bitcoin', symbol: 'btc', name: 'Bitcoin', image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', current_price: 45230.50 },
  { id: 'ethereum', symbol: 'eth', name: 'Ethereum', image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', current_price: 2340.75 },
  { id: 'binancecoin', symbol: 'bnb', name: 'BNB', image: 'https://assets.coingecko.com/coins/images/825/large/bnb-icon2_2x.png', current_price: 315.20 },
  { id: 'solana', symbol: 'sol', name: 'Solana', image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png', current_price: 98.45 },
  { id: 'ripple', symbol: 'xrp', name: 'XRP', image: 'https://assets.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png', current_price: 0.62 },
  { id: 'cardano', symbol: 'ada', name: 'Cardano', image: 'https://assets.coingecko.com/coins/images/975/large/cardano.png', current_price: 0.58 },
  { id: 'dogecoin', symbol: 'doge', name: 'Dogecoin', image: 'https://assets.coingecko.com/coins/images/5/large/dogecoin.png', current_price: 0.082 },
  { id: 'polkadot', symbol: 'dot', name: 'Polkadot', image: 'https://assets.coingecko.com/coins/images/12171/large/polkadot.png', current_price: 7.12 },
  { id: 'avalanche-2', symbol: 'avax', name: 'Avalanche', image: 'https://assets.coingecko.com/coins/images/12559/large/Avalanche_Circle_RedWhite_Trans.png', current_price: 37.89 },
  { id: 'chainlink', symbol: 'link', name: 'Chainlink', image: 'https://assets.coingecko.com/coins/images/877/large/chainlink-new-logo.png', current_price: 14.56 },
  
  // Mid-tier coins
  { id: 'shiba-inu', symbol: 'shib', name: 'Shiba Inu', image: 'https://assets.coingecko.com/coins/images/11939/large/shiba.png', current_price: 0.00002456 },
  { id: 'polygon', symbol: 'matic', name: 'Polygon', image: 'https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png', current_price: 0.89 },
  { id: 'uniswap', symbol: 'uni', name: 'Uniswap', image: 'https://assets.coingecko.com/coins/images/12504/large/uniswap-uni.png', current_price: 6.78 },
  { id: 'litecoin', symbol: 'ltc', name: 'Litecoin', image: 'https://assets.coingecko.com/coins/images/2/large/litecoin.png', current_price: 73.45 },
  { id: 'cosmos', symbol: 'atom', name: 'Cosmos Hub', image: 'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png', current_price: 10.23 },
  { id: 'stellar', symbol: 'xlm', name: 'Stellar', image: 'https://assets.coingecko.com/coins/images/100/large/Stellar_symbol_black_RGB.png', current_price: 0.12 },
  { id: 'monero', symbol: 'xmr', name: 'Monero', image: 'https://assets.coingecko.com/coins/images/69/large/monero_logo.png', current_price: 162.34 },
  { id: 'algorand', symbol: 'algo', name: 'Algorand', image: 'https://assets.coingecko.com/coins/images/4380/large/download.png', current_price: 0.34 },
  { id: 'vechain', symbol: 'vet', name: 'VeChain', image: 'https://assets.coingecko.com/coins/images/1167/large/VET_Token_Icon.png', current_price: 0.025 },
  { id: 'filecoin', symbol: 'fil', name: 'Filecoin', image: 'https://assets.coingecko.com/coins/images/12817/large/filecoin.png', current_price: 5.67 },
  
  // Obscure/Low market cap coins
  { id: 'pepe', symbol: 'pepe', name: 'Pepe', image: 'https://assets.coingecko.com/coins/images/29850/large/pepe-token.jpeg', current_price: 0.0000012 },
  { id: 'floki', symbol: 'floki', name: 'FLOKI', image: 'https://assets.coingecko.com/coins/images/16746/large/PNG_image.png', current_price: 0.000045 },
  { id: 'safemoon', symbol: 'sfm', name: 'SafeMoon', image: 'https://assets.coingecko.com/coins/images/14362/large/174x174-white.png', current_price: 0.00008 },
  { id: 'baby-doge-coin', symbol: 'babydoge', name: 'Baby Doge Coin', image: 'https://assets.coingecko.com/coins/images/16125/large/babydoge.jpg', current_price: 0.0000000023 },
  { id: 'dogelon-mars', symbol: 'elon', name: 'Dogelon Mars', image: 'https://assets.coingecko.com/coins/images/14962/large/6GxcPRo3_400x400.jpg', current_price: 0.00000015 },
  { id: 'akita-inu', symbol: 'akita', name: 'Akita Inu', image: 'https://assets.coingecko.com/coins/images/14353/large/akita.jpg', current_price: 0.0000001 },
  { id: 'hoge-finance', symbol: 'hoge', name: 'Hoge Finance', image: 'https://assets.coingecko.com/coins/images/14360/large/hoge.png', current_price: 0.00003 },
  { id: 'kishu-inu', symbol: 'kishu', name: 'Kishu Inu', image: 'https://assets.coingecko.com/coins/images/15366/large/kishu.jpg', current_price: 0.00000000042 },
  { id: 'saitama-inu', symbol: 'saitama', name: 'Saitama', image: 'https://assets.coingecko.com/coins/images/16375/large/saitama.png', current_price: 0.0000045 },
  { id: 'catecoin', symbol: 'cate', name: 'CateCoin', image: 'https://assets.coingecko.com/coins/images/20845/large/cate.png', current_price: 0.0000008 },
  { id: 'moon-coin', symbol: 'moon', name: 'Moon Coin', image: 'https://assets.coingecko.com/coins/images/1362/large/Moon.png', current_price: 0.000012 },
  { id: 'moonriver', symbol: 'movr', name: 'Moonriver', image: 'https://assets.coingecko.com/coins/images/17984/large/9285.png', current_price: 12.45 },
  { id: 'gala', symbol: 'gala', name: 'Gala', image: 'https://assets.coingecko.com/coins/images/12493/large/GALA-COINGECKO.png', current_price: 0.034 },
  { id: 'enjincoin', symbol: 'enj', name: 'Enjin Coin', image: 'https://assets.coingecko.com/coins/images/1102/large/enjin-coin-logo.png', current_price: 0.42 },
  { id: 'the-sandbox', symbol: 'sand', name: 'The Sandbox', image: 'https://assets.coingecko.com/coins/images/12129/large/sandbox_logo.jpg', current_price: 0.56 },
  { id: 'decentraland', symbol: 'mana', name: 'Decentraland', image: 'https://assets.coingecko.com/coins/images/878/large/decentraland-mana.png', current_price: 0.67 },
  { id: 'axie-infinity', symbol: 'axs', name: 'Axie Infinity', image: 'https://assets.coingecko.com/coins/images/13029/large/axie_infinity_logo.png', current_price: 8.90 },
  { id: 'illuvium', symbol: 'ilv', name: 'Illuvium', image: 'https://assets.coingecko.com/coins/images/14468/large/ILV.JPG', current_price: 67.80 },
  { id: 'superhero', symbol: 'hero', name: 'Superhero', image: 'https://assets.coingecko.com/coins/images/16888/large/superhero.png', current_price: 0.0045 },
  { id: 'bezoge-earth', symbol: 'bezoge', name: 'Bezoge Earth', image: 'https://assets.coingecko.com/coins/images/15507/large/bezoge.png', current_price: 0.0000002 },
  { id: 'volt-inu', symbol: 'volt', name: 'Volt Inu', image: 'https://assets.coingecko.com/coins/images/21611/large/volt.png', current_price: 0.00000000003 },
  
  // DeFi tokens
  { id: 'aave', symbol: 'aave', name: 'Aave', image: 'https://assets.coingecko.com/coins/images/12645/large/AAVE.png', current_price: 98.50 },
  { id: 'maker', symbol: 'mkr', name: 'Maker', image: 'https://assets.coingecko.com/coins/images/1364/large/Mark_Maker.png', current_price: 1567.00 },
  { id: 'compound', symbol: 'comp', name: 'Compound', image: 'https://assets.coingecko.com/coins/images/10775/large/COMP.png', current_price: 54.23 },
  { id: 'curve-dao-token', symbol: 'crv', name: 'Curve DAO', image: 'https://assets.coingecko.com/coins/images/12124/large/Curve.png', current_price: 1.05 },
  { id: 'yearn-finance', symbol: 'yfi', name: 'yearn.finance', image: 'https://assets.coingecko.com/coins/images/11849/large/yfi-192x192.png', current_price: 8945.00 },
  { id: 'sushi', symbol: 'sushi', name: 'Sushi', image: 'https://assets.coingecko.com/coins/images/12271/large/512x512_Logo_no_chop.png', current_price: 1.34 },
  { id: 'pancakeswap-token', symbol: 'cake', name: 'PancakeSwap', image: 'https://assets.coingecko.com/coins/images/12632/large/pancakeswap-cake-logo.png', current_price: 3.21 },
  { id: '1inch', symbol: '1inch', name: '1inch', image: 'https://assets.coingecko.com/coins/images/13469/large/1inch-token.png', current_price: 0.45 },
  { id: 'balancer', symbol: 'bal', name: 'Balancer', image: 'https://assets.coingecko.com/coins/images/11683/large/Balancer.png', current_price: 3.78 },
  { id: 'bancor', symbol: 'bnt', name: 'Bancor Network', image: 'https://assets.coingecko.com/coins/images/736/large/bancor.png', current_price: 0.67 },
  
  // More obscure ones
  { id: 'elongate', symbol: 'elongate', name: 'ElonGate', image: 'https://assets.coingecko.com/coins/images/14833/large/ELONGATE-Vertical-Black.png', current_price: 0.00000003 },
  { id: 'pig-finance', symbol: 'pig', name: 'Pig Finance', image: 'https://assets.coingecko.com/coins/images/15155/large/pig.png', current_price: 0.00000000012 },
  { id: 'moon-juice', symbol: 'juice', name: 'Moon Juice', image: 'https://assets.coingecko.com/coins/images/15698/large/juice.png', current_price: 0.0000015 },
  { id: 'happy-coin', symbol: 'happy', name: 'Happy Coin', image: 'https://assets.coingecko.com/coins/images/15166/large/happy.png', current_price: 0.00000002 },
  { id: 'keanu-inu', symbol: 'keanu', name: 'Keanu Inu', image: 'https://assets.coingecko.com/coins/images/15724/large/keanu.png', current_price: 0.0000000008 },
  { id: 'rocket-bunny', symbol: 'bunny', name: 'Rocket Bunny', image: 'https://assets.coingecko.com/coins/images/14264/large/bunny.png', current_price: 0.00000000003 },
  { id: 'shih-tzu', symbol: 'shih', name: 'Shih Tzu', image: 'https://assets.coingecko.com/coins/images/15823/large/shih.png', current_price: 0.0000000001 },
  { id: 'pitbull', symbol: 'pit', name: 'Pitbull', image: 'https://assets.coingecko.com/coins/images/14498/large/pitbull.png', current_price: 0.00000000015 },
  { id: 'dinger-token', symbol: 'dinger', name: 'Dinger Token', image: 'https://assets.coingecko.com/coins/images/14766/large/dinger.png', current_price: 0.000001 },
  { id: 'superdoge', symbol: 'supdog', name: 'SuperDoge', image: 'https://assets.coingecko.com/coins/images/15303/large/superdoge.png', current_price: 0.00000000004 },
  { id: 'corgi-inu', symbol: 'corgi', name: 'Corgi Inu', image: 'https://assets.coingecko.com/coins/images/15445/large/corgi.png', current_price: 0.0000000002 },
  { id: 'poodle', symbol: 'poodl', name: 'Poodle', image: 'https://assets.coingecko.com/coins/images/14443/large/poodle.png', current_price: 0.00000000001 },
  { id: 'mini-shiba-inu', symbol: 'minishiba', name: 'Mini Shiba Inu', image: 'https://assets.coingecko.com/coins/images/16055/large/minishiba.png', current_price: 0.000000000008 },
  { id: 'shibacock', symbol: 'cock', name: 'ShibaCock', image: 'https://assets.coingecko.com/coins/images/16274/large/cock.png', current_price: 0.0000000003 },
  { id: 'doggy', symbol: 'doggy', name: 'Doggy', image: 'https://assets.coingecko.com/coins/images/14766/large/doggy.png', current_price: 0.00000001 },
];

export function getRandomCoins(count: number = 3): CoinData[] {
  // Filter out coins with invalid or zero prices
  const validCoins = cryptoDatabase.filter(coin => coin.current_price && coin.current_price > 0);
  
  // Shuffle and select the requested count
  const shuffled = [...validCoins].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}