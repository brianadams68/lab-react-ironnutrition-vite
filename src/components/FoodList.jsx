import { useState } from "react";
import "../App.css";
import foodsJson from "../foods.json";
import FoodBox from "../components/FoodBox";
import AddFoodForm from "../components/AddFoodForm";
import { v4 as uuidv4 } from 'uuid';
const FoodList = () => {
    const [foods, setFoods] = useState(foodsJson)
    const [searchInput, setSearchInput] = useState("")
    const removeItemHandler = (id) => {
      setFoods(prevFoods => {
        return prevFoods.filter(pizza => pizza.id !== id)
      })
    }
    const addFoodHandler = (foodName, image, calories, servings) => {
      const obj = {
        id: uuidv4(),
        name: foodName,
        image: image,
        calories: +calories,
        servings: +servings
      };
      setFoods([obj, ...foods])
    }
    const handleSearchChange = (event) => {
      setSearchInput(event.target.value);
    }
    const filteredFoods = foods.filter(food => {
      return food.name.toLowerCase().includes(searchInput.toLowerCase())
    })
    return (
      <div className="App">
        <h1>LAB | React IronNutrition</h1>
        <label>Search:
            <input type="text" value={searchInput} onChange={handleSearchChange} />
        </label>
        <AddFoodForm addNewFood={addFoodHandler}/>
        {filteredFoods.map(oneFood => {
          return <FoodBox key={oneFood.id} food={oneFood} deleteFood={removeItemHandler}/>
        })}
      </div>
    );
}
export default FoodList;