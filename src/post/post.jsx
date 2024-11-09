import React, { useState } from 'react';
import './post.css';

export function Post({workouts,setWorkouts}) {
  const [exercises, setExercises] = useState([])
  const [date, setDate] = useState('')
  
  return (
    <main class="container-fluid text-center bg-info">
        <div class="seventy_size">
            <div class="input-group mb-3">
                <span class="input-group-text">Workout Date:</span>
                <input class="form-control form-control-lg" type="text" value={date} onInput = {(e) => (setDate(e.target.value))} placeholder="current_date_&_time" />
            </div>

            <div>
                <select class="form-select form-select-lg mb-3">
                    <option selected>Workout Type</option>
                    <option value="1">Dumbell Chest Press</option>
                    <option value="2">Chest Fly</option>
                    <option value="3">Leg Press</option>
                    <option value="4">Leg Extensions</option>
                    <option value="5">Pullups</option>
                  </select>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Number of Sets:</span>
                <input class="form-control form-control-lg" type="text" placeholder="2" />
            </div>

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
            <form>
              <div>
                <label for="test">Workout time</label>
              </div>
              <div>
                <input type="submit" value="send" onClick={() => pass}/>
              </div>
            </form>
            <button href="feed" onClick={() => setWorkouts([...workouts, ['unkown user', date, 0, [['Leg Press', [['10', '130'], ['12', '140'], ['12', '125']]]]]])}  class="btn btn-dark"> POST! </button>
        </div>

    </main>
  );
}