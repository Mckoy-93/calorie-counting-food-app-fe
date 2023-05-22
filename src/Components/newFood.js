import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const API = process.env.REACT_APP_API_URL;

export default function NewFood() {

  const [searchFood, setSearchFood] = useState({});
  const [input, setInput] = useState('');
  const [foods, setFoods] = useState({
    name: '',
    cal: 0,
    fat: 0,
    carb: 0,
    fiber: 0,
    protein: 0,
    image: '',
  });

  const navigate = useNavigate();

  const getFoods = () => {
    axios.get(`${API}/foods/${input}`)
      .then(res => setSearchFood(res.data.hints[0].food.nutrients))
      .catch(error => console.error(error))
  }

  console.log(searchFood.FAT)

  const onSubmit = (event) => {
    event.preventDefault();
    setInput(input);
    getFoods();
  };
  console.log(searchFood);
  const addFood = () => {
    axios.post(`${API}/foods`, foods)
      .then(response => navigate(`/foods`))
      .catch(error => console.error(error))
  };

  const handleTextChange = (event) => {
    setFoods({ ...foods, [event.target.id]: event.target.value })
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addFood();
  };

  return (
    <div className='NewFood'>

      <h1>Search for a food</h1>

      <label htmlFor='name'>Food Name:</label>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => setInput(e.target.value)}
          value={input}
          type="text"
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

      <article>
        <h3>Calories: {Math.round(searchFood.ENERC_KCAL)} calories</h3>
        <h3>Fat: {Math.round(searchFood.FAT)}g</h3>
        <h3>Carbs: {Math.round(searchFood.CHOCDF)}g</h3>
        <h3>Fiber: {Math.round(searchFood.FIBTG)}g</h3>
        <h3>Protein: {Math.round(searchFood.PROCNT)}g</h3>
      </article>

      <h1>The values above represent 1 serving size. Input the values you see fit.</h1>
      <form onSubmit={handleSubmit}>

        <label htmlFor='name'>Food Name:</label>
        <input
          id="name"
          value={foods.name}
          type='text'
          onChange={handleTextChange}
          required
        />

        <label htmlFor='cal'>Calories:</label>
        <input
          id="cal"
          value={foods.cal}
          type="number"
          onChange={handleTextChange}
        />

        <label htmlFor='fat'>Fat:</label>
        <input
          id="fat"
          value={foods.fat}
          type="number"
          onChange={handleTextChange}
        />

        <label htmlFor='carb'>Carbohydrates:</label>
        <input
          id="carb"
          value={foods.carb}
          type="number"
          onChange={handleTextChange}
        />

        <label htmlFor='fiber'>Fiber:</label>
        <input
          id="fiber"
          value={foods.fiber}
          type="number"
          onChange={handleTextChange}
        />

        <label htmlFor='protein'>Protein:</label>
        <input
          id="protein"
          value={foods.protein}
          type="number"
          onChange={handleTextChange}
        />

        <label htmlFor='image'>Image URL:</label>
        <input
          id="image"
          value={foods.image}
          type='text'
          onChange={handleTextChange}
          required
        />

        <br />
        <input type='submit' />

      </form>

    </div>
  )
}