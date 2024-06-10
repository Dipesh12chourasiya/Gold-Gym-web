
export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '75b88a7546mshf900c325ab31bdfp1d56c6jsn63adc366f990',
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
  }
};
  
export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': '75b88a7546mshf900c325ab31bdfp1d56c6jsn63adc366f990',
    },
  };

export const fetchData = async (url, options) =>{
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}