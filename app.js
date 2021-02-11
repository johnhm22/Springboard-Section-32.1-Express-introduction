const express = require('express');

const app = express();

let response = {};



app.get('/mean', (req, res) =>{
    if(Object.keys(req.query).length == 0) return res.status(400).send("Numbers are required");
    const {nums} = req.query;
    let total = 0;
    let numArray = createArrayOfNumbers(nums);
    numArray.reduce((acc, currVal) => {
         total = acc + currVal;
         return total;
    })
    let numDigits = numArray.length;

    response.operation = "mean";
    response.value = total/numDigits;
    res.json(response);

});



app.get('/median', (req, res) =>{
    if(Object.keys(req.query).length == 0) return res.status(400).send("Numbers are required");
    const {nums} = req.query;
    let numArray = createArrayOfNumbers(nums);
    sortedArray = numArray.sort((a,b) => a-b);
    response.operation = "median";
    const midPoint = Math.floor(sortedArray.length/2);

    if(sortedArray.length % 2 !=0) {
        response.value = sortedArray[midPoint]
        }
        else {
            response.value = (sortedArray[midPoint-1] + sortedArray[midPoint])/2}

    res.json(response);
})



app.get('/mode', (req, res) =>{
    if(Object.keys(req.query).length == 0) return res.status(400).send("Numbers are required");
    const {nums} = req.query;
    let numMapping = {};
    let greatestFreq = 0;
    let mode;
    let numArray = createArrayOfNumbers(nums);
    numArray.forEach(function findMode(number) {
        numMapping[number] = (numMapping[number] || 0) +1;
        if (greatestFreq < numMapping[number]) {
            greatestFreq = numMapping[number];
            mode = number;
        }
        return mode
    });
    response.operation = 'mode';
    response.value = mode;
    console.log(response.value);
    res.json(response);
})


function createArrayOfNumbers(nums){
    let numArray = [];
    for(let x of nums){
        if(x!=','){
            if(isNaN(parseInt(x))){
                return res.status(400).send(`${x} is not a number`);
            }
            else {
            numArray.push(parseInt(x));
            }
        }
    } return numArray
}


module.exports = {
    app: app
};




app.listen(3000, () => {
    console.log("Server listening on port 3000");
})