//here we just did destructuring = separate data i.r let [name, age] = ["hassaan", 22];
//but not with [] brackets but with {} brackets
import style from "./Recipe.module.css";
const Recipe = ({lable, calories, image, ingredients}) => {
 
    let convert = Math.round(calories);
   let inc = 0;
    return ( 
        // col-md-8 col-lg-6 col-sm-12 
      <div className="container for-recipe">
          <div className="row">
             
              <div className="recipe-info">
              <div className={style.Recipe}>
        <div className="recipe pt-3 pb-5 px-3">
            <h1>{lable}</h1>
            <h6 className="py-2"> {ingredients.map((cur) => (
            <h6>{inc++}.  <span className="">{cur.text}</span></h6>  
             ) )}  </h6>
            <h5>Calories: {convert}</h5>
            <img className={style.img} src={image} alt=""/>
        

        </div>
        </div>
              </div>
          </div>
      </div>

        
     
     );
}
 
export default Recipe;
