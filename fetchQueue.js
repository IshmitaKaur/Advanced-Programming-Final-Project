const express = require('express');
const app = express();

const dummyData = [
  { queue_no: 27 }
];

app.get("/newEntryWeb", (request, response) => {
  response.send({"queue_no": "27"});
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
  

});
