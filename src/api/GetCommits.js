import axios from 'axios';

import {COMMITSURL} from './Constants';

const getCommits = async () => {
  var output = [];
  var config = {
    method: 'get',
    url: COMMITSURL,
    headers: {},
  };

  await axios(config)
    .then(function (response) {
      response.data.forEach(commit => {
        output.push({
          hash: commit.sha,
          message: commit.commit.message,
          name: commit.commit.author.name,
        });
      });
      //   console.log(output);
      return output;
    })
    .catch(function (error) {
      console.log(error);
      return output;
    });

  return output;
};

export default getCommits;
