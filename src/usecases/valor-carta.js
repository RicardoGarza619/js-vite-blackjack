/**
 * 
 * @param {string} carta 
 * @returns {numbergit }
 */

export const valorCartas = (carta) => {
      
    const valor = carta.substring(0, carta.length -1); //estamos removiendo el ultimo valor
    return (isNaN (valor)) ?
            (valor === 'A') ? 11 : 10
            : valor * 1 // toma el string y lo convierte en numero, muy comun usar el * 1
}