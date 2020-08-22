export function convertNumeroRomanoParaDecimal (numeroRomano: string) {
  
  
  if (numeroRomano && (numeroRomano.includes('I') || numeroRomano.includes('V') || numeroRomano.includes('X') || numeroRomano.includes('L') || numeroRomano.includes('C') || numeroRomano.includes('D') || numeroRomano.includes('M'))) {
    const changeLetterToNumber = (letter: string): number => {
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
    const convertArrayToJustOneNumber = (accumulator: number, current: number, index: number, array: number[]) => {
      if(index >= 0) {

        if (array[index - 1] >= current) {
          return accumulator  + current 
        }
        else {
          
          return accumulator + current - 2 * array[index - 1]
        }
      }
      else {
        if (accumulator > current) {
          return accumulator + current 
        }
        else {
          return current - accumulator
        }
      }
      }
    const arrayStr = numeroRomano.split('')
    const numberArr = arrayStr.map(changeLetterToNumber)
    const numberFinal = numberArr.reduce(convertArrayToJustOneNumber)
    return numberFinal
  }
  
}