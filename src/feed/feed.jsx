import React, { useState } from 'react';
import './feed.css';

export function Feed() {

  const [workouts, setWorkouts] = useState([['UserX32', '9/23/2024 at 12:07 PM', [['Dumbell Chest Press', [['10', '80'], ['12', '80'], ['12', '75']]],
  ['Dumbell Fly', [['100', '800'], ['120', '800']]]]],
  ['JJean', '9/21/2024 at 11:50 PM', [['Leg Press', [['10', '130'], ['12', '140'], ['12', '125']]]]]])

  return (
    <main className="container-fluid text-center bg-info">
      <div className="container-fluid bg-warning mylabel">
        <h2> WORKOUT FEED</h2>
      </div>
      {workouts.map((workout, index) => (
        <div key={index} className="workout-section">
          <div className="workout-container mt-3">
          <h4> Post by: {workout[0]}</h4>
          <p> {workout[1]}</p>
          {workout[2].map((exercise, i) => (
            <div key={i} className="workout-section workout">
              <h4> {exercise[0]} </h4>
              <p> Sets: {exercise[1].length} </p>
              {exercise[1].map((rep, j) => (
                <div key={j}>
                  <p>{rep[0]} reps at {rep[1]}</p>
                </div>
              ))}
            </div>
          ))}
          </div>
        </div>
      ))}
      <div className="workout-container mt-3">
        <h4> Post by:UserX32 </h4>
        <p> 9/23/2024 at 12:07 PM</p>
        <h4> Dumb </h4>
        <p> Sets: 3 </p>
        <ul className="workout">
          <li> 10 reps, 80 lbs </li>
          <li> 12 reps, 80 lbs</li>
          <li> 12 reps, 75 lbs</li>
        </ul>

        <h4> Chest Fly </h4>
        <p> Sets: 2 </p>
        <ul className="workout">
          <li> 10 reps, 100 lbs </li>
          <li> 10 reps, 110 lbs</li>

        </ul>
        <p className="btn btn-dark"> Like This Post ❤️(5)</p>
      </div>
      <hr />

      <div className="workout-container mb-3">
        <h4> Post by: JJean48</h4>
        <p> 9/21/2024 at 11:50 PM</p>
        <h4> Leg Press </h4>
        <p> Sets: 3 </p>
        <ul className="workout">
          <li> 10 reps, 130 lbs </li>
          <li> 12 reps, 140 lbs</li>
          <li> 12 reps, 120 lbs</li>
        </ul>
        <p className="btn btn-dark"> Like This Post ❤️(11)</p>
      </div>
    </main>
  );
}