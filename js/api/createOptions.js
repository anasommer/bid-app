export default function createOptions(
  method = 'GET',
  bodyData = null,
  headers = {}
) {
  let options = {
    method: method,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      ...headers,
    },
  };

  if (localStorage.getItem('accessToken')) {
    options.headers.Authorization = `Bearer ${JSON.parse(
      localStorage.getItem('accessToken')
    )}`;
  }

  if (bodyData) {
    options.body = JSON.stringify(bodyData);
  }
  return options;
}
