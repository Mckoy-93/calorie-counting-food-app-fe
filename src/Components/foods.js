import { useEffect, useState } from "react"
import axios from "axios"
import Food from "./food"
import { Link } from "react-router-dom";
import ProgressBar from "./progressBar";

const API = process.env.REACT_APP_API_URL;

export default function foods() {
  const [foods, setFoods] = useState([]);
  const [checked, setChecked] = useState(false);
  const [totCal, setTotCal] = useState(2000);

  useEffect(() => {
    axios.get(`${API}/foods`)
      .then((res) => { setFoods(res.data.payload) })
      .catch((error) => console.error(error))
  }, [])

  const handleCheckBox = () => {
    setChecked(!checked);
    setTotCal(3000);
  }

  let calSum = 0;
  let calArr = foods.map((food) => Number(food.cal))
  calArr.forEach(amount => {
    calSum += amount;
    return calSum;
  })

  const testData1 = [
    { bgcolor: "#6a1b9a", completed: Math.round(calSum / totCal * 100) },
  ];

  let fatSum = 0;
  let fatArr = foods.map((food) => Number(food.fat))
  fatArr.forEach(amount => {
    fatSum += amount;
    return fatSum;
  })

  let carbSum = 0;
  let carbArr = foods.map((food) => Number(food.carb))
  carbArr.forEach(amount => {
    carbSum += amount;
    return carbSum;
  })

  let proteinSum = 0;
  let proteinArr = foods.map((food) => Number(food.protein))
  proteinArr.forEach(amount => {
    proteinSum += amount;
    return proteinSum;
  })


  return (
    <div className="Foods">
      <form>
        <label htmlFor="athletic">Athletic Mode</label>
        <input
          id="athletic"
          type="checkbox"
          onClick={handleCheckBox}
          checked={checked}
        />
      </form>
      <h1>{calSum} / {checked ? `3000 Calorie Limit` : `2000 Calorie Limit (Default)`}</h1>
      <form>
        {testData1.map((item, idx) => (
          <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
        ))}
      </form>
      <h2>Fat: {fatSum} / {checked ? '75g Limit' : '65g Limit (Default)'}</h2>
      <h2>Carbs: {carbSum} / {checked ? '200g Limit' : '250g Limit (Default)'}</h2>
      <h2>Protein: {proteinSum} / {checked ? '130g Limit' : '100g Limit (Default)'}</h2>
      <article>
        {foods.map((food) => {
          return (
            <div className="Food">
              <Link to={`/foods/${food.id}`}>
                <h1>{food.name}</h1>
                <Food food={food} />
              </Link>
              <h3>{food.cal} calories</h3>
              <h4>Fat: {food.fat}g</h4>
              <h4>Carb: {food.carb}g</h4>
              <h4>Fiber: {food.fiber}g</h4>
              <h4>Protein: {food.protein}g</h4>
              <img src={food.image} alt={food.name} />
            </div>
          )
        })}
      </article>

    </div>
  )
}