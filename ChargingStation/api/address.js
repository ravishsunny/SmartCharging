const express = require('express');
const router = express.Router();

const addresses = [
    {id: 1, address: 'WDWEEEGHGHGHWHF'}
];

const Iota = require('@iota/core');

const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });

const securityLevel = 2;

const seed =
'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';

function getAddress(callback) {
    iota.getNewAddress(seed, { index: 0, securityLevel: securityLevel, total: 1 })
    .then(address => {
        console.log('Your address is: ' + address);
        callback({address: address});
    })
    .catch(err => {
        console.log(err)
    });
}

router.get('/getAddress', (req, res) => {
    console.log('Get Address request initiated...');
    getAddress((address)=>{
        res.send(address);
    });
});

module.exports = router;