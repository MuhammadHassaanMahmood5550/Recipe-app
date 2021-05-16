import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';

function App() {
   const appli_id = "47c59721";
   const appli_key = "a15fab02b79e1d5fc4fbd579b66635dd";
   //useState([]); = empty array
   const [recipes, setRecipes] = useState([]);
   const [search, setSearch] = useState("");
   const [finalSearch, setFinalSearch] = useState("chicken");

      
    useEffect(() => {
      getRecipes();
    },[finalSearch])

    //as we know to fetch data we use asynchronous javascript like fetch().then.....
    //but there is a easy way async await. await = use where ever the data wont come 
    //instantly, it may need few second to request and fetch.
    
    const getRecipes = async () => {
      const response = await fetch(`https://api.edamam.com/search?q=${finalSearch}&app_id=${appli_id}&app_key=${appli_key}`);
      //now as we know we can't get data into javascript format so conver data into json fromat = similler to javascript object syntex.
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits); 
    }

    const function01 = (e) => {
      setSearch(e.target.value);
    }

    const forFinalSearch = (e) => {
      e.preventDefault();
      setFinalSearch(search);
      setSearch("");
    }

  return (
    <div className="App">
   
    <div className="container mb-0">
      <div className="row justify-content-center">
        
        <div className="col-md-4 mt-4">
        <h2 className="mb-3">Search For Recipes</h2>
        <form onSubmit={forFinalSearch}>
      <div className="form-group">
        <input className="form-control" type="text" placeholder="Search here" 
        value={search}
        // onChange={(e) => setSearch(e.target.value)}
        //------------or
        onChange={function01}
        />
        <button className="btn btn-outline-dark btn-md mt-3 mb-2 font-weight-bold" type="submit">Search</button>
      </div>
      </form> 
        </div>
      </div>
    </div>

    <div className="recipe-container">

    {recipes.map( (cur) => ( 
      //key = just to remove error bcz it is just a stupid question by javascript to 
      // recognize each cur element shoud have a unique key for manipulation if required 
    <Recipe key={cur.recipe.label} lable={cur.recipe.label} calories={cur.recipe.calories}
    image={cur.recipe.image} ingredients={cur.recipe.ingredients}>
    </Recipe> 
    ) )}

</div>
   
    
    </div>
  );
}

export default App;
