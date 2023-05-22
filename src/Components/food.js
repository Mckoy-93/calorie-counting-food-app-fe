import { Link } from "react-router-dom"

export default function Food(food) {
  return (
    <div className='Food'>
        <div>
        <Link to={`/foods/${food.id}`}>{food.name}</Link>
      </div>
    </div>
  )
}