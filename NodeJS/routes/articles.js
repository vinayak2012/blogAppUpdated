const express = require('Express');
const router = express.Router();
const Article = require('../models/article');

router.get('/', (req, res) => {
    Article.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving Posts :' + JSON.stringify(err, undefined, 2)); }
    }).sort({createdAt:'desc'});
});

router.get('/:id', async(req, res) => {
    Article.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving Employee :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', async(req, res) => {
    let article = new Article({
        title: req.body.title,
        categories: req.body.categories,
        description: req.body.description
        });
        article.save((err, doc) => {
            if (!err) { res.send(doc); }
            else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
        });
});

router.put('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id);
    // console.log(article.title);
    article.title = req.body.title,
    article.categories = req.body.categories,
    article.description = req.body.description
    Article.findByIdAndUpdate(req.params.id, { $set: article }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', async (req, res) => {

    Article.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;