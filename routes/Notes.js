const router = require('express').Router();
const Note = require('../models/notes.model');


router.route('/').get(async(req,res) => {
    try{
        const data = await Note.find()
        res.json(data)
    }catch(e){
        console.log(e);
        res.json({
            "status":404,
            "ok":false
        })
    }
})

router.route('/:code').get(async (req,res) => {
    try{
        let code = req.params.code
        const data = await Note.find({code:code})
        res.json(data).status(200)
    }catch(e){
        res.send(e).status(404)
    }
})

router.route('/add').post((req,res) => {
    const code = req.body.code;
    const text = req.body.text;
    const username = req.body.username;
    const description = req.body.description;
    const newNote = new Note({
        code:code,
        username:username,
        text:text,
        description:description
    })

    newNote.save()
    .then(() => res.json({"ok":true}).status(200))
    .catch(e => res.json({"ok":false}))
})


router.route('/delete/:code').delete((req,res) => {
    const code = req.params.code;
    Note.deleteOne({code})
    .then(() => res.json({"delete":"ok"}))
    .catch((e) => res.json({"ok":false}))
})

module.exports = router;