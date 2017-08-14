const express = require('express');
const router = express.Router();
const burgers = require('../models/burgers');


router.get('/', function (req, res) {
    burgers.all(function (err, result) {
        res.render('index', { result });
    })
});

router.post('/', function (req, res) {
    burgers.insertBurger('burger_name', req.body.burgerName, function (err, result) {
        res.redirect('/')
    })
})

router.put('/:id', function (req, res) {
    console.log(req.query.devoured)
    if (req.query.devoured == 'true') {
        burgers.updateBurger(['devoured', '0'], ['id', req.params.id], function (err, result) {
            res.redirect('/')
        })
    } else {
        burgers.updateBurger(['devoured', '1'], ['id', req.params.id], function (err, result) {
            res.redirect('/')
        })
    }
})

router.delete('/:id', function (req, res) {
    burgers.deleteBurger(['id', req.params.id], function (err, result) {
        res.redirect('/')
    })
})


module.exports = router;