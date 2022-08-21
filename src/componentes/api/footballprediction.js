  import React, { useEffect } from 'react';

  const url = 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions?market=classic&iso_date=2018-12-01&federation=UEFA';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '644f6980eemshb6330c21fa57274p1aa149jsnb6528de87ce5',
      'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(' error:' + err));
  }, []);