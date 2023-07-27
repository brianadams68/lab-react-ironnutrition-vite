const FoodBox = ({food, deleteFood}) => {
    return ( 
        <div className="food-card" style={{border:"2px solid black", marginBottom:"20px"}}>
  <p>{food.name}</p>

  <img style={{height:"150px"}} src={food.image} />

  <p>Calories: {food.calories}</p>
  <p>Servings: {food.servings}</p>

  <p>
    <b>Total Calories: {food.servings * food.calories} </b> kcal
  </p>

  <button onClick={() => deleteFood(food.id)}>Delete</button>
</div>
     );
}
 
export default FoodBox;