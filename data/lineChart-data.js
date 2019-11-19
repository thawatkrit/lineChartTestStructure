getLineChartDataByCID = cid => {
  let data = []
  if(cid){
     data = [
      {
        "cid": "123-123-1234",
        "date": "11-18-2019",
        "cost": 1800
      },
      {
        "cid": "123-123-1234",
        "date": "11-19-2019",
        "cost": 1900
      },{
        "cid": "123-123-1234",
        "date": "10-20-2019",
        "cost": 1900
      }
    ];
  }

  return data;
};

module.exports = {
  getLineChartDataByCID
};
