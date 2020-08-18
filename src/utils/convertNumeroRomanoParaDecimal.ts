export function convertNumeroRomanoParaDecimal(numeroRomano: string) {
  
  const changeLetterToNumber = (letter: string) => {
    switch (letter) {
      case 'I':
        return 1
      case 'V':
        return 5
      case 'X':
        return 10
      case 'L':
        return 50
      case 'C':
        return 100
      case 'D':
        return 500
      case 'M':
        return 1000
      default: 
        return 0
    }
  }
  const arrayStr = numeroRomano.split('')
  const numberArr = arrayStr.map(changeLetterToNumber)
  console.log(numberArr)
  return numberArr
}