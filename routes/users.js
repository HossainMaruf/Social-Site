// core modules
const router = require('express').Router();
const bcrypt = require('bcrypt');

// custom modules
const User = require("../models/User");

// update user
router.put('/:id', async (req, res, next) => {
    if(req.body.userID === req.params.id || req.body.isAdmin) {
        if(req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(req.body.password, salt);
            } catch(error) {
                return res.status(500).json(error);
            }
            // update the user info
            try {
                await User.findByIdAndUpdate(req.body.userID, {$set: req.body});
                res.status(200).json('Account has been updated');
            } catch(error) {
                return res.status(500).json(error);
            }
        }
    } else {
        return res.status(403).json('You can update only your account');
    }
});

// delete a user
router.delete('/:id', async (req, res, next) => {
    if(req.body.userID === req.params.id || req.body.isAdmin) {
        try {
            await User.deleteOne({_id: req.params.id});
            res.status(200).json('Account has been deleted');
        } catch(error) {
            return res.status(500).json(error);
        }
    } else {
        return res.status(403).json('You can delete only your account');
    }
});

// get a user
router.get('/:id', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        const {password, createdAt, ...others} = user._doc;
        res.status(200).json(others);
    } catch(error) {
        res.status(500).json(error);
    }
});

// follow a user
router.put('/:id/follow', async (req, res, next) => {
    if(req.body.userID !== req.params.id) {
        const user = await User.findById(req.params.id);
        const currentUser = await User.findById(req.body.userID);
        if(!user.followers.includes(req.body.userID)) {
            await user.updateOne({$push: {followers: req.body.userID}});
            await currentUser.updateOne({$push: {followings: req.params.id}});
            res.status(200).json('User has been followed');
        } else {
            res.status(403).json('you already follow this user');
        }
    } else {
        res.status(403).json('You can not follow yourself');
    }
});


// unfollow a user
router.put("/:id/unfollow", async (req, res, next) => {
  if (req.body.userID !== req.params.id) {
    const user = await User.findById(req.params.id);
    const currentUser = await User.findById(req.body.userID);
    if (user.followers.includes(req.body.userID)) {
      await user.updateOne({ $pull: { followers: req.body.userID } });
      await currentUser.updateOne({ $pull: { followings: req.params.id } });
      res.status(200).json("User has been unfollowed");
    } else {
      res.status(403).json("you dont follow this user");
    }
  } else {
    res.status(403).json("You can not unfollow yourself");
  }
});


module.exports = router;