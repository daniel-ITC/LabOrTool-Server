/**
 * Created by Daniel on 19/05/17.
 */

exports.isLoggedIn = function (req, res, next) {
    if (req.isAuthenticated())
        next();
    else
        res.status(401).json({ Message: 'please make the login!' });
};
