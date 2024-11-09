import React, { useState, useEffect } from 'react';
import './post.css';

export function Post({ workouts, setWorkouts }) {
  const [exercises, setExercises] = useState(['', []])
  const [date, setDate] = useState('')
  const [sets, setSets] = useState(0)
  const [exerDetails, setExerDetails] = useState(['', ''])

  useEffect(() => {
    setExerDetails(new Array(sets).fill(['', '']));
  }, [sets]);

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
              <input class="form-control form-control-lg" type="text" placeholder="0" />
            </div>

            <div class="input-group mb-3">
              <span class="input-group-text">Weight:</span>
              <input class="form-control form-control-lg" type="text" placeholder="0 lbs" />
            </div>
          </div>
        ))}
        <div class="input-group mb-3">
          <span class="input-group-text">Number of Repetitions:</span>
          <input class="form-control form-control-lg" type="text" placeholder="0" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Weight:</span>
          <input class="form-control form-control-lg" type="text" placeholder="0 lbs" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Number of Repetitions:</span>
          <input class="form-control form-control-lg" type="text" placeholder="0" />
        </div>

        <div class="input-group mb-3">
          <span class="input-group-text">Weight:</span>
          <input class="form-control form-control-lg" type="text" placeholder="0 lbs" />
        </div>
        <button href="feed" onClick={() => setWorkouts([...workouts, ['unkown user', date, 0, [[exercises[0], exerDetails]]]])} class="btn btn-dark"> POST! </button>
      </div>

    </main>
  );
}