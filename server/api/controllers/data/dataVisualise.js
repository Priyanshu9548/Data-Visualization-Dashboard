const service = require("../../service/dataVisualise");
const { responseHandler } = require("../../middlewares/response-handler");
const mongoose = require('mongoose')
const queries = require('../queries/general.queries.js');

exports.getData = async (req, res, next) => {
    try {
        const reqQuery = req.query;

        let filter = {}


        const query = queries.search(filter)

        const response = await service.search(query);

        if (!response) {
            return responseHandler(null, res, "Error Occured", 400);
        };

        responseHandler(response, res);

    } catch (error) {
        console.error("error is ", error);
        next(error);
    }
};