// your code here:
class Datasource {
    constructor() {
        // Create an empty constructor to initialise datasource
    }

    async getPrices() {
        /**
         * @return {Array} returns a promised array of objects with pair, mid and quote.
         * 
         * each element in the returned array contains a pair and 2 functions: mid and quote.
         * pair: returns the currency pair.
         * mid: returns the mid point value of buy and sell.
         * quote: returns the quote currency.
         * 
         */
        try {
            const url = "https://interview.switcheo.com/test.json";
            let response = await fetch(url);
            let data = await response.json();
            // nested array
            data = data.data.prices;
            let arr = [];
            // For each data in the returned data, add to the array
            data.forEach((price) => arr.push({"pair": price.pair, 
                "mid": () => (price.buy + price.sell) / 2,
                "quote": () => price.pair.substring(3)}))
            return arr;
        // Catch any errors when retrieving data
        } catch (error) {
            console.log(error);
        }
    }
}

// Initialise datasource
let ds = new Datasource();

ds.getPrices()
    .then(prices => {
        prices.forEach(price => {
            console.log(`Mid price for ${ price.pair } is ${ price.mid() } ${ price.quote() }.`);
        });
    }).catch(error => {
        console.err(error);
    });