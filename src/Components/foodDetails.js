import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"

const API = process.env.REACT_APP_API_URL;

export default function foodDetails() {
  const [foods, setFoods] = useState({});
  let { id } = useParams();

  const navigate = useNavigate();

  useEffect(
    () => {
      axios
        .get(`${API}/foods/${id}`)
        .then((response) => setFoods(response.data.payload))
        .catch((error) => navigate('/foods'))
    });

  const handleDelete = () => {
    axios
      .delete(`${API}/foods/${id}`)
      .then((response) => navigate(`/foods`))
      .catch((error) => console.error(error))
  }

  return (
    <article className='FoodDetails'>
      <div>
        <h1>{foods.name}</h1>
      </div>
      <h3>{foods.cal} calories</h3>
      <h4>Fat: {foods.fat}g</h4>
      <h4>Carb: {foods.carb}g</h4>
      <h4>Fiber: {foods.fiber}g</h4>
      <h4>Protein: {foods.protein}g</h4>
      <img src={foods.image} alt={foods.name} />


      <div className="showNavigation">
        <div>
          <a href={`/foods`}>
            <button className="backButton">Back</button>
          </a>
        </div>

        <div>
          <a href={`/foods/${id}/edit`}>
            <button className="editButton">Edit</button>
          </a>
        </div>

        <span>
          <button className="deleteButton" onClick={handleDelete}>Delete</button>
        </span>

      </div>

    </article>
  )
}