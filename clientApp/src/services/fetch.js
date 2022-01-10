/* eslint-disable no-console */

export const get = () => (fetch(`http://localhost:8080/api/donation`)
  .then((data) => data.json())
  .then((user) => console.log(user))
  .catch((error) => console.error(error))
);
export const post = (url, data) => fetch(`http://localhost:8080${url}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
}).then(data => data.json())
  .catch((error) => console.error(error));

export const put = (url, values) => fetch(`${SERVER_URL}${url}`, {
  method: 'PUT',
  body: JSON.stringify(values),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .catch((error) => console.error(error));
