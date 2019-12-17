const express = require('express');
const router = express.Router();

const sql = require('../utils/sql');

router.get('/', (req, res) => {
    // console.log('at the main route');

    let query = "SELECT P.piece_id AS id, P.div_id, P.piece_image AS image, P.piece_title AS title FROM tbl_portfolio_piece AS P";

    sql.query(query, (err, result) => {
        if (err) { throw err; console.log(err); }

        //console.log(result);

        res.render('pieces', { piece: result });
    })
})

router.get('/piece/:id', (req, res) => {
    // console.log('hit a dynamic route');
    // console.log(req.params.id);

    let query = `SELECT P.piece_id AS id, P.div_id, P.piece_image AS image, P.piece_title AS title, C.category_name AS category, P.piece_info AS info, GROUP_CONCAT(S.software_image SEPARATOR ", ") AS software FROM tbl_portfolio_piece AS P INNER JOIN tbl_category AS C ON C.category_id = P.category_id JOIN tbl_piece_software AS PS ON PS.piece_id = P.piece_id JOIN tbl_software AS S ON PS.software_id = S.software_id WHERE P.piece_id="${req.params.id}"`;

    sql.query(query, (err, result) => {
        if (err) {throw err; console.log(err); }

        //console.log(result);

        res.json(result[0]);
    })
})

router.get('/about', (req, res) => {

    res.render('about');

})

router.get('/contact', (req, res) => {

    res.render('contact');

})

module.exports = router;