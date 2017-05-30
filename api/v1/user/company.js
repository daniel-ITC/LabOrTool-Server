/**
 * Created by Daniel on 14/05/17.
 */

const Api = require('../../../configuration/api');
const Company = require('../../models/user/company');

module.exports = function(router) {

    router.get(Api.version+'/user/companies/count/', function (req, res) {
        Company.count(function(data) {
            res.json(data);
        });
    });

    router.get(Api.version+'/user/companies/', function (req, res) {
        Company.getAll(function(data) {
            res.json(data);
        });
    });

    router.post(Api.version+'/user/companies/', function (req, res) {
        Company.insert(req.body);
        res.json({});
    });

    router.get(Api.version+'/user/companies/:id', function (req, res) {
        Company.getById(req.params.id, function(data) {
            res.json(data);
        });
    });

    router.put(Api.version+'/user/companies/:id', function (req, res) {
        Company.update(req.params.id, req.body);
        res.json({});
    });

    router.delete(Api.version+'/user/companies/:id', function (req, res) {
        Company.delete(req.params.id);
        res.json({});
    });
};
