const NUM_OF_COINS = 10395
var score = 0, coinOne, coinTwo, coinThree, a, b, c;
var nullImage = 'data:image/png;base64,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'
let reset = () => {


  console.log("reseting board")
  document.getElementById('reset').innerHTML = "reset"
  document.getElementById('reset').hidden = true
  document.getElementById('title').innerHTML = "Which coin costs the most?"


  document.getElementById('firstPrice').hidden = true
  document.getElementById('secondPrice').hidden = true
  document.getElementById('thirdPrice').hidden = true
  document.getElementById('firstImage').src = nullImage
  document.getElementById('secondImage').src = nullImage
  document.getElementById('thirdImage').src = nullImage
  document.getElementById('firstTitle').innerHTML = "null"
  document.getElementById('secondTitle').innerHTML = "null"
  document.getElementById('thirdTitle').innerHTML = "null"

  coinOne = parseInt(Math.random() * NUM_OF_COINS)
  coinTwo = parseInt(Math.random() * NUM_OF_COINS)
  coinThree = parseInt(Math.random() * NUM_OF_COINS)

  //commented out show answer in console

  console.log(coinOne + ", " + coinTwo + ", " + coinThree)
  try {

    fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=false')
      .then(res => res.json())
      .then(data => {
        fetch('https://api.coingecko.com/api/v3/coins/' + data[coinOne].id)
          .then(res => res.json())
          .then(data => {

            a = [data.market_data.current_price.usd, data.name, data.symbol, data.image.small]
            // console.log(a)
            if (a[0] == null) {
              document.getElementById('firstTitle').innerHTML = a[1] + ": " + a[2]
              document.getElementById('firstImage').src = a[3]
              document.getElementById('firstPrice').innerHTML = "Price: not in database"
              document.getElementById('firstPrice').hidden = false
              a[0] = 0
            } else {
              document.getElementById('firstTitle').innerHTML = a[1] + ": " + a[2]
              document.getElementById('firstImage').src = a[3]
              document.getElementById('firstPrice').innerHTML = "Price: " + a[0]
            }
          })

        fetch('https://api.coingecko.com/api/v3/coins/' + data[coinTwo].id)
          .then(res => res.json())
          .then(data => {
            b = [data.market_data.current_price.usd, data.name, data.symbol, data.image.small]
            //  console.log(b)
            if (b[0] == null) {
              document.getElementById('secondTitle').innerHTML = b[1] + ": " + b[2]
              document.getElementById('secondImage').src = b[3]
              document.getElementById('secondPrice').innerHTML = "Price: not in database"
              document.getElementById('secondPrice').hidden = false
              b[0] = 0
            } else {
              document.getElementById('secondTitle').innerHTML = b[1] + ": " + b[2]
              document.getElementById('secondImage').src = b[3]
              document.getElementById('secondPrice').innerHTML = "Price: " + b[0]
            }
          })

        fetch('https://api.coingecko.com/api/v3/coins/' + data[coinThree].id)
          .then(res => res.json())
          .then(data => {
            c = [data.market_data.current_price.usd, data.name, data.symbol, data.image.small]
            //  console.log(c)
            if (c == null) {
              document.getElementById('thirdTitle').innerHTML = c[1] + ": " + c[2]
              document.getElementById('thirdImage').src = c[3]
              document.getElementById('thirdPrice').innerHTML = "Price: not in database"
              document.getElementById('thirdPrice').hidden = false
              c[0] = 0
            } else {
              document.getElementById('thirdTitle').innerHTML = c[1] + ": " + c[2]
              document.getElementById('thirdImage').src = c[3]
              document.getElementById('thirdPrice').innerHTML = "Price: " + c[0]
            }
          })
      })

  } catch (error) {
    console.log(error)
    document.getElementById('title').innerHTML = "API Limit Reached Try again in a few minutes"
  }
}


let raiseScore = () => {
  document.getElementById('reset').hidden = true
  document.getElementById('firstPrice').hidden = false
  document.getElementById('secondPrice').hidden = false
  document.getElementById('thirdPrice').hidden = false
  score++
  console.log(score)
  document.getElementById('score').innerHTML = "Score: " + score.toString()
}

let resetScore = () => {
  document.getElementById('reset').hidden = false
  document.getElementById('firstPrice').hidden = false
  document.getElementById('secondPrice').hidden = false
  document.getElementById('thirdPrice').hidden = false
  document.getElementById('title').innerHTML = "FAIL"
  document.getElementById('reset').innerHTML = "Try Again"
  document.getElementById('score').innerHTML = "Final Score: " + score.toString()
  score = 0
}
var timeout = 3500

let chooseOne = () => {
  if (a[0] > b[0] && a[0] > c[0]) {
    raiseScore()
    setTimeout(reset, timeout)
  } else {
    resetScore()
  }
}

let chooseTwo = () => {
  if (b[0] > a[0] && b[0] > c[0]) {
    raiseScore()
    setTimeout(reset, timeout)
  } else {
    resetScore()
  }

}

let chooseThree = () => {
  if (c[0] > a[0] && c[0] > b[0]) {
    raiseScore()
    setTimeout(reset, timeout)
  } else {
    resetScore()
  }

}