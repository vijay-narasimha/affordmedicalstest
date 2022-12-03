const express = require('express');

const app = express();

const keywords = async (req, res) => {
  try {
    const data = req.query.keywords.split(',');

    const keywords_data = ['bonfire', 'cardio', 'case', 'character', 'bonsai'];
    let solution = [];
    for (value in data) {
      let obj = { keyword: data[value], status: '', prefix: '' };
      if (keywords_data.includes(data[value])) {
        obj['status'] = 'found';
        let i = 0;
        let array = [...keywords_data];
        array.splice(array.indexOf(data[value]), 1);

        while (array.length > 0) {
          for (value1 in array) {
            if (array[value1][i] != data[value][i]) {
              array.splice(array.indexOf(array[value1]), 1);
            }
          }
          i = i + 1;
        }
        obj['prefix'] = data[value].slice(0, i);
      } else {
        obj['status'] = 'not_found';
        obj['prefix'] = 'not_applicable';
      }

      solution.push(obj);
    }

    res.status(200).json({ solution });
  } catch (err) {
    console.log(err);
  }
};

app.get('/prefixes', keywords);

app.listen(3000, () => console.log('Listening at 8000'));
