const request = require('request');
const argv = require('minimist')(process.argv.slice(2));
console.log(argv);


request(argv.url, function (error, response, body) {


    let map = argv.words.split(',').reduce((ac, x) => { 
        
        let rgx = new RegExp(x, "g")

        ac[x] = 0 || (body.match(rgx) || []).length; 
        
        return ac
    
    }, {})

    console.log(map)


});