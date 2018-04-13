
const bcrypt = require('bcrypt-nodejs')  
const LocalStrategy = require('passport-local').Strategy

module.exports = passport => { 
    test = () => "teste fim";
    this.findUser = (username, callback) => {
        global.db.collection("users")
            .findOne({"username": username}, (err, doc) => callback(err, doc) );
    }
    
    this.findUserById = (id, callback) => {
        const ObjectId = require("mongodb").ObjectId;
        global.db.collection("users")
            .findOne({_id: ObjectId(id) }, (err, doc) => callback(err, doc) );
    }

    passport.serializeUser((user, done) => 
        done(null,user._id) 
    );
 
    passport.deserializeUser( (id, done) => 
        findUserById(id, (err,user) => 
            done(err, user) 
        ) 
    );

    passport.use(new LocalStrategy({usernameField: 'username', passwordField: 'password'}, (username, password, done) => 
        {
            this.findUser(username, (err, user) => {

                if (err) { return done(err) }

                // usuário inexistente
                if (!user) { return done(null, false) }

                // comparando as senhas
                bcrypt.compareSync(password, user.password, (err, isValid) => {
                    if (err) { return done(err) }
                    if (!isValid) { return done(null, false) }
                    return done(null, user)
                })
            })
        }
    )); 
};
