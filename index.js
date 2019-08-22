const csvToJSON = require("csvtojson");

const csv = require("./GN-2016-sample-data.csv");

csv()
  .fromFile(csv)
  .then(jsonObj => {
    console.log(jsonObj);
  });
