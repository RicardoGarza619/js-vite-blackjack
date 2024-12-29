      //Funcion para tomar una carta
      /**
       * 
       * @param {Array<string>} deck 
       * @returns {string}
       */
     export const pedirCarta = (deck) => {
        if (deck.length === 0) {
            throw 'No hay cartas';
        }
    
        return deck.pop();
    }
