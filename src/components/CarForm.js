import { useDispatch, useSelector } from "react-redux"
import { addCar, changeCost, changeName } from "../store"

export default function CarForm() {
  const dispatch = useDispatch()
  const { name, cost } = useSelector((state) => {

    return state.form
  })

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value))
  }

  const handleCostChange = (event) => {
    const carCost = (event.target.value)
    dispatch(changeCost(carCost))
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addCar({ name, cost }))
  }
  return <div className="car-form panel">
    <h4 className="subtitle is-3">Add Car</h4>
    <form onSubmit={handleSubmit}>
      <div className="field-group">
        <div className="field">
          <label className="label">Name</label>
          <input className="input is-expanded" value={name} onChange={handleNameChange} />
        </div>
        <div className="field">
          <label className="label">Cost</label>
          <input className="input is-expanded" type='number' value={cost || ''} onChange={handleCostChange} />
        </div>
      </div>
      <div className="field"> <button className="button is-link">Submit</button></div>
    </form>
  </div>
}