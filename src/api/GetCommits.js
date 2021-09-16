import axios from 'axios';

import {COMMITSURL} from './Constants';

export default async function getCommits() {
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
      return output;
    })
    .catch(function (error) {
      console.log(error);
      return output;
    });
}
