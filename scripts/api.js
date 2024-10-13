const options = {
    method: "GET",
    headers: {
      'x-rapidapi-key': '6892fe0c40msh1bab1b6c3b0f8c0p10f283jsnb00a61055d9c',
      'x-rapidapi-host': 'shazam.p.rapidapi.com'
    }
  };
  
   export default class API {
     
    async getPopular() {
      const data1 = await this.searchMusic("Ahmet kaya");
      const data2 = await this.searchMusic("nurettin rençber");
  
      return [...data1, ...data2];
    }
  
     
    async searchMusic(query) {
      const url = `https://shazam.p.rapidapi.com/search?term=${query}&locale=tr`;
      const res = await fetch(url, options);
      const data = await res.json();
  
     const formatted = data.tracks.hits.map((item) => item.track);

     return formatted;
    }
  }