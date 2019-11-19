const LineChartController = require('../controllers/lineChart-controller')

setup = app => {
    app.post('/lineChart',LineChartController.getlineChartHandler)
}

module.exports = {
    setup
}