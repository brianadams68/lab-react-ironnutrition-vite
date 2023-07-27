import { useState } from "react";


const AddFoodForm = ({addNewFood}) => {
    const [myNameField, setMyNameField] = useState('');
    const [myImageField, setMyImageField] = useState('');
    const [myCaloriesField, setMyCaloriesField] = useState(0);
    const [myServingsField, setMyServingsField] = useState(0);


    const handleSumbit = event => {
        event.preventDefault()
        addNewFood(myNameField, myImageField, myCaloriesField, myServingsField)
        setMyNameField('')
        setMyImageField('')
        setMyCaloriesField(0)
        setMyServingsField(0)
    }
    return ( 
            <div>
                <h1>Add Food</h1>
                <form onSubmit={handleSumbit}>
                    <label>Name: <input type="text" name="name" value={myNameField} onChange={event => setMyNameField(event.target.value)}  /></label>
                    <label>Image: <input type="text" name="image" value={myImageField} placeholder="www.example.com" onChange={event => setMyImageField(event.target.value)}  /></label>
                    <label>Calories: <input type="number" name="calories" value={myCaloriesField} onChange={event => setMyCaloriesField(event.target.value)} /></label>
                    <label>Servings: <input type="number" name="servings"  value={myServingsField} onChange={event => setMyServingsField(event.target.value)} /></label>
                    <button type="submit">Create</button>
                </form>
            </div>
     );
}
 
export default AddFoodForm;