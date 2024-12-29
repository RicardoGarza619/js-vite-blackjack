import _ from 'underscore';
/**
 *  Esta funcion crea un nuevo deck
 * @param {Array<string>} tiposDeCarta 
 * @param {Array<string>} tiposEspeciales 
 * @returns {Array<string>} regresa el nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta) throw new Error('TiposDeCarta es obligatorio');

    let deck = [];

    for (let i = 2; i <= 10; i++) {

        for (const tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }

    }

    for (const tipo of tiposDeCarta) {
        for (const esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }

    return _.shuffle(deck);
}