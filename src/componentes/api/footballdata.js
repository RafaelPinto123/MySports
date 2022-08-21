  import React, { useEffect } from 'react';

  const url = 'https://api.football-data.org/v4/matches';
  const options = {
    method: 'GET',
    headers: {
      'X-Auth-Token': '644f6980eemshb6330c21fa57274p1aa149jsnb6528de87ce5',
    }
  };
  
  
  useEffect(() => {
    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(' error:' + err));
  }, []);