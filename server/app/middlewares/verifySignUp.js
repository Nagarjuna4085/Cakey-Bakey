const db = require("../models");
const User = db.user;
const Admin = db.Admin


verifyUser = (req, res, next) => {
    User.findOne({
        email: req.body.email
    }).exec((err, user) => {
        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (user) {
            res.status(400).send({ message: "Failed! Email is already in use!" });
            return;
        }
        next();
    });
};

verifyAdminSignUP = (req,res, next) => {
    Admin.findOne({
        email: req.body.email
    }).exec((err, admin) => {
        if (err) {
            res.status(500).send({ message: err }); 
            return
        }
        if(admin)  {
            res.status(400).send({ message: "Failed! Email is already in use!" });
            return;
        }
        next();
        });

}

const verifySignUp = {
  verifyUser,
  verifyAdminSignUP
};

module.exports = verifySignUp;