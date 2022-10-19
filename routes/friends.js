const express = require('express')
const router = express.Router()
const Friend = require('../models/friends')

router.get('/', async (req, res) => {
    try {
        const sub = await Friend.find()
        res.send(sub)
    } catch (err) {
        res.status(500).json( {message : err.message} )
    }
})
router.get('/:id', getFriend, async (req, res) => {
    res.send(res.friend)
})

router.post('/', async (req, res) => {
    const friend = new Friend({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
    })

    try {
        const newFriend = await friend.save()
        res.status(201).json( newFriend )   
    } catch (error) {
        res.status(400).json( {message: error.message} )
    }
})

router.patch('/:id', getFriend, (req, res) => {
    
})

router.delete('/:id', getFriend, async (req, res) => {
    try {
        await res.friend.remove()
        res.status(201).json( {message: "Friend removed successfully"} )
    } catch (error) {
        res.status(500).json( {message: error.message} )
    }
})

async function getFriend (req, res, next) {
    let friend 
    try {
        friend = await Friend.findById(req.params.id)
        if (friend == null) {
            return res.status(404).json( {message: "cannot find friend"} )
        }
    } catch (error) {
        return res.status(500).json( {message: err.message} )
    }

    res.friend = friend
    next()
}

module.exports = router