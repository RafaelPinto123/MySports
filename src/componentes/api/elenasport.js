  import React, { useEffect } from 'react';

  const url = 'https://elenasport-io1.p.rapidapi.com/v2/countries/%7Bid%7D';

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '644f6980eemshb6330c21fa57274p1aa149jsnb6528de87ce5',
      'X-RapidAPI-Host': 'elenasport-io1.p.rapidapi.com'
    }
  };
  
  
  useEffect(() => {
    fetch(url, options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => console.error(' error:' + err));
  }, []);