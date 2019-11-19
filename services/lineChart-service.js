const {getLineChartDataByCID} = require('../data/lineChart-data')
getLineChartData =  lineChartRequest => {
    const lineChart =  getLineChartDataByCID(lineChartRequest.cid)
     return lineChart;
}

module.exports = {
    getLineChartData
}