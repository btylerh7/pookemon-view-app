//register service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceworker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
  
  
  //id to get pokemon data
  let id = 1;
  
  //render the app data
  function render() {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}/`
    fetch(url)
    .then(data => {return data.json();})
    .then(pokemon => {
      document.getElementById('name').innerHTML = pokemon.name;
      document.getElementById('number').innerHTML = pokemon.id;
      document.getElementById('sprite').setAttribute('src',pokemon.sprites.front_default);
      //document.getElementById('type').innerHTML = pokemon.types;
    });
  };
  
  function raise() {
    id += 1;
    render();
  }
  
  function lower() {
    if (id < 2) {return};
    id -= 1;
    render();
  }
  render();