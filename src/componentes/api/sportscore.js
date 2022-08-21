  import React, { useEffect } from 'react';

  const url = 'https://sportscore1.p.rapidapi.com/sports/1/teams?page=1';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '644f6980eemshb6330c21fa57274p1aa149jsnb6528de87ce5',
      'X-RapidAPI-Host': 'sportscore1.p.rapidapi.com'
    }
  };
  
  useEffect(() => {
    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(' error:' + err));
  }, []);