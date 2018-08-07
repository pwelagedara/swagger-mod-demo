const express = require('express');
var cors = require('cors')
const swaggerMod= require("swagger-mod");
const app = express();


const opts = {
    filters: {

        tags: {
            include: [
            ]
        }
    }
};

app.use(cors());

app.get('/', (req, res) => {

    var optsVar = JSON.parse(JSON.stringify(opts));
    var tag = req.query.tag;
    if(tag){
        optsVar.filters.tags.include.push('/^' +tag + '$/i'); // Ignore Case
    }

    swaggerMod('https://petstore.swagger.io/v2/swagger.json', optsVar)
        .then(function(modifiedSchema) {
            res.send(modifiedSchema);  
        }).catch(function(err) {
            console.error(err);
        });
});

app.listen(3000, () => {
    console.log('App is listening on port 3000...!!!')
});
