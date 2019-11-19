const { validatelineChartRequest } = require('../schemas/lineChart-request-schema')
const { validatelineChartResponse } = require('../schemas/lineChart-response-schema')
const { expressHandler } = require('./express-handler')
const { getLineChartData } = require('../services/lineChart-service')
getlineChartHandler = req =>{
    const lineChartRequest = validatelineChartRequest(req.body)
    const lineChartResponse = getLineChartData(lineChartRequest) 
    return lineChartResponse
}
module.exports = {
    getlineChartHandler: expressHandler({
        handler: getlineChartHandler,
        validator: validatelineChartResponse
    })
}