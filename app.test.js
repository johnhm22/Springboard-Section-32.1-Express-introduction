const app = require('./app');
const axios = require('axios');


test('mean should calculate correctly', function(){
    const response = axios.get('http://localhost:3000/mean?nums=1,3,5,7')
    response.then(data => expect(data.value.toEqual(4)))
})


test('median should calculate correctly', function(){
    const response = axios.get('http://localhost:3000/median?nums=1,3,5,7,8')
    response.then(data => expect(data.value.toEqual(5)))
})

test('mean should calculate correctly', function(){
    const response = axios.get('http://localhost:3000/mode?nums=1,3,3,5,7')
    response.then(data => expect(data.value.toEqual(3)))
})
