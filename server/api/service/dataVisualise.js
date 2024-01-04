const model = require("../models/dataVisualise");
const dal = require('../dal/dal');


exports.create = async (body) => {
    return await dal.create(model, body);
};

exports.aggregate = async (query) => {
    return await dal.aggregate(model, query);
};

exports.find = async (filter, pagination, sort) => {
    return await dal.find(model, filter, pagination, sort, {});
};

exports.search = async (query) => {
    const data = await dal.aggregate(model, query);
    
    return {
        data: data[0].data,
        totalCount: data[0].count[0] ? data[0].count[0].count : 0
    };
};

exports.update = async (filter, body) => {
    return await dal.findOneAndUpdate(model, filter, body);
};

exports.delete = async (id) => {
    return await dal.findOneAndUpdate(model, {_id: id}, {active: false});
};

exports.upsert = async (filter, body) => {
    return await dal.findOneAndUpsert(model, filter, body);
}