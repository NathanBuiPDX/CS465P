/** Exercise 04 - API **/
const url = 'https://restcountries.com/v3.1/all';

// Add your code here
const getData = (url) => { 
    const ul = document.querySelector('#results');
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.forEach(e => {
            let li=document.createElement('li');
            ul.append(li);
            li.innerHTML=`${e.name.common} - ${e.population.toLocaleString()}`;
        });  
      })
      .catch((error) => {
        console.error(error);
        ul.innerHTML = "Error getting data";
    });

}
getData(url);
