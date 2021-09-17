import axios from 'axios';

import {COMMITSURL} from './Constants';

export async function getCommits(callBack, errorCallBack) {
  var output = [];
  var config = {
    method: 'get',
    url: COMMITSURL,
    headers: {},
  };

  await axios(config)
    .then(response => {
      response.data.forEach(commit => {
        output.push({
          hash: commit.sha,
          message: commit.commit.message,
          name: commit.commit.author.name,
        });
      });
      callBack(output);
    })
    .catch(error => {
      errorCallBack();
      console.log(error);
    });
}
