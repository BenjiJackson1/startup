import React, { useState, useEffect } from 'react';
import './post.css';
import { useNavigate } from 'react-router-dom';


export function Post({ workouts, setWorkouts }) {
  const [exercises, setExercises] = useState(['', []])
  const [date, setDate] = useState('')
  const [sets, setSets] = useState(0)
  const [exerDetails, setExerDetails] = useState(['0', '0'])

  useEffect(() => {
    setExerDetails(new Array(sets).fill(null).map(() => ['0', '0']));
  }, [sets]);

  const repsChange = (num, index) => {
    const newExer = exerDetails.slice();
    newExer[index][0] = Number(num);
    setExerDetails(newExer);
  }

  const weightChange = (num, index) => {
    const newExer = exerDetails.slice();
    newExer[index][1] = Number(num);
    setExerDetails(newExer);
  }
  
  const postPage = useNavigate();

  return (
    <main class="container-fluid text-center bg-info">
      <div class="seventy_size">
        <div class="input-group mb-3">
          <span class="input-group-text">Workout Date:</span>
          <input class="form-control form-control-lg" type="text" value={date} onInput={(e) => (setDate(e.target.value))} placeholder="current_date_&_time" />
        </div>

        <div>
          <select class="form-select form-select-lg mb-3" value={exercises[0]} onChange={(e) => (setExercises([e.target.value, exercises[1]]))}>
            <option value="" disabled>Workout Type</option>
            <option value="Dumbell Chest Press">Dumbell Chest Press</option>
            <option value="Chest Fly">Chest Fly</option>
            <option value="Leg Press">Leg Press</option>
            <option value="Leg Extensions">Leg Extensions</option>
            <option value="Pullups">Pullups</option>
          </select>
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Number of Sets:</span>
          <input class="form-control form-control-lg" type="text" value={sets} onInput={(e) => (setSets(Number(e.target.value)))} placeholder="" />
        </div>

        {exerDetails.map((exer, index) => (
          <div key={index}>
            <div class="input-group mb-3">
              <span class="input-group-text">Number of Repetitions:</span>
              <input class="form-control form-control-lg" type="text" value={exer[0]} onInput={(e) => repsChange(e.target.value, index)} placeholder="0" />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Weight:</span>
              <input class="form-control form-control-lg" type="text" onInput={(e) => weightChange(e.target.value, index)} placeholder="0 lbs" />
            </div>
          </div>
        ))}
        <button onClick={() => {
    setWorkouts([...workouts, ['unknown user', date, 0, [[exercises[0], exerDetails]]]]); postPage('/feed');}} className="btn btn-dark"> POST! </button>
      </div>

    </main>
  );
}