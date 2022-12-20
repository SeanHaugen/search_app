// var Airtable = require('airtable');
// var base = new Airtable({apiKey: keyBXUI1wqPf9jC08}).base('app21ZWp3xLPn6TG4');

// export AIRTABLE_API_KEY=keyBXUI1wqPf9jC08
// const base = require('airtable').base('app21ZWp3xLPn6TG4');


export const sheetsData = fetch( 
    "https://opensheet.elk.sh/1zspYTR30_L2cZXx0SzxiVvrUdG5IOrjEXGEOX1H6qw4/Adventures"

).then((res) => res.json())
 .then((data) => {
    data.forEach((row) => {
      // Do something with each row here.
      console.log(row)
    });
  });