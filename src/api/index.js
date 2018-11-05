const URL_BASE = 'https://api.spacexdata.com/v3';

const fetchHelper = (
  {
    url,
    method = 'GET',
  },
) => {
  return fetch(`${URL_BASE}/${url}`, {
    method,
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error fetching api data');
    })
    .catch((error) => { return console.error(error); });
};

export const fetchLatestLaunch = () => {
  return fetchHelper({
    url: 'launches/latest',
  }).then(function(data) {
    return data;
  });
};

export const fetchNextLaunch = () => {
  return fetchHelper({
    url: 'launches/next',
  }).then(function(data) {
    return data;
  });
};