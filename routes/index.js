const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // console.log('at the main route');

    let query = "SELECT __ FROM __";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        //console.log(result);

        res.render('portfolioTiles', { __: result });
    })
})

router.get('/__/:id', (req, res) => {
    // console.log('hit a dynamic route');
    // console.log(req.params.id);

    let query = `SELECT * FROM __ WHERE id="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) {throw err; console.log(err); }

        //console.log(result);

        res.json(result[0]);
    })
})

module.exports = router;