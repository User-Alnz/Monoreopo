import "./App.css";
import { useState, useEffect } from "react";

interface movieList {
  id: number,
  title: string,
  synopsis: string; 
  poster: string;
  year: number;
}

function App() {

  const [movieList, setMovieList] = useState<movieList | []>([])

useEffect(() => {

  fetch("http://localhost:3310/api/programs")
  .then((response) => {
    if(!response)
      throw new Error( response);

  return (response.json());
  })
  .then((data)=> {
   console.log(data)
    setMovieList(data);
  })
  .catch((error) => {
    console.log(error);
  });

},[]); 

  function handleSysnopsisLenght(item : movieList )
  {
    let   string = item.synopsis;
    const stringLength = string.length;

    if(stringLength > 200)
    { 
      string = string.slice(0, 200);
      string += "...";

      return(
        <p className="filmSysnopsis"> {string} </p>
      );

    }
    else if(stringLength <= 200)
    {
      return(
        <p className="filmSysnopsis"> {string} </p>
      );
    }

  }


  return (
    <>
        <section className="MovieListWrapper">

          {movieList.map((item:movieList)=> (
          <div className="filmCard" key= {item.id}>

              <img  className="filmPoster" src={item.poster} alt={item.title}/>
              <p className="filmTitle">{item.title}</p>
              {handleSysnopsisLenght(item)}
              <p className="filmYear">{item.year}</p>

          </div>
          ))}
       </section>
    </>
  );
}

export default App;
