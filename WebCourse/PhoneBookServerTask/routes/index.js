var express = require('express');
var router = express.Router();

var contacts = [];
var newId = 1;

router.get("/getContacts", function (req, res) {
    var term = (req.query.term || "").toLowerCase();

    var filteredContacts = term.length === 0
        ? contacts
        : contacts.filter(function (c) {
            return c.name.toLowerCase().indexOf(term) >=0
                || c.surname.toLowerCase().indexOf(term) >= 0
                || c.number.toLowerCase().indexOf(term) >= 0;
        });

    res.send(filteredContacts);
});

router.post("/deleteContact", function (req, res) {

});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
