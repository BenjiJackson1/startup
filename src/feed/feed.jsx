import React, { useEffect } from 'react';
import './feed.css';

export function Feed({workouts, setWorkouts}) {

  useEffect(() => {
     const interval = setInterval(() => {
      const newWorkouts = workouts.slice();
      newWorkouts[1][2] = workouts[1][2] +1;
      newWorkouts[0][2] = workouts[0][2] +1;
      setWorkouts(newWorkouts);
    }, 10000);
    
  return () => clearInterval(interval);
  }, [workouts, setWorkouts]);

  function addLike(i){
    const newWorkouts = workouts.slice();
    newWorkouts[i][2] = workouts[i][2] +1;
    setWorkouts(newWorkouts);
  }

  return (
    <main className="container-fluid text-center bg-info">
      <div className="container-fluid bg-warning mylabel">
        <h2> WORKOUT FEED</h2>
      </div>
      {workouts.map((workout, index) => (
        <div key={index} className="workout-container mt-3">
          <div>
          <h4> Post by: {workout[0]}</h4>
          <p> {workout[1]}</p>
          {workout[3].map((exercise, i) => (
            <div key={i} className="workout-section workout">
              <h4> {exercise[0]} </h4>
              <p> Sets: {exercise[1].length} </p>
              {exercise[1].map((rep, j) => (
                <ul key={j}>
                  <li>{rep[0]} reps at {rep[1]} lbs</li>
                </ul>
              ))}
            </div>
          ))}
          <button className="btn btn-dark" onClick={() => addLike(index)}> Like This Post ❤️({workout[2]})</button>
          </div>
        </div>
      ))}
    </main>
  );
}