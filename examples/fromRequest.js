import axios from 'axios';
import extractLinkMetadata from '../dist/index';

const processLink = async (resourceUrl) => {
  return axios
    .get(resourceUrl)
    .then((res) => {
      // console.log(res.headers, 'this is res.headers');
      const { headers } = res;
      const contentType = headers['content-type'];
      if (contentType.includes('text/html')) {
        return {
          body: res.data,
          resourceUrl
        };
      } else {
        return {};
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const urlsToTest = {
  cnbcone:
    'https://www.cnbc.com/2020/10/21/aocs-twitch-stream-was-one-of-the-platforms-biggest-ever-.html'
};

processLink(urlsToTest['cnbcone']).then((data) => {
  if (data) {
    const dataObj = extractLinkMetadata(data.body, data.resourceUrl);
    return dataObj;
  }
});
