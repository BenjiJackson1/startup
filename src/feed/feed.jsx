import React, { useEffect, useState } from 'react';
import './feed.css';

export function Feed({workouts, setWorkouts}) {

  // useEffect(() => {
  //    const interval = setInterval(() => {
  //     const newWorkouts = workouts.slice();
  //     newWorkouts[1][2] = workouts[1][2] +1;
  //     newWorkouts[0][2] = workouts[0][2] +1;
  //     setWorkouts(newWorkouts);
  //   }, 10000);
    
  // return () => clearInterval(interval);
  // }, [workouts, setWorkouts]);

  const [test, setTest] = useState([]);
  React.useEffect(() => {
    fetch('/api/userworkouts')
      .then((response) => response.json())
      .then((test) => {
        setTest(test);
      });
  }, []);

  const addedworkouts = [];
  if (test.length){
    for (let thing of test){
      addedworkouts.push(thing)
    }
  } else {
    addedworkouts.push(['Example', '1/1/2001 at 10:10 PM', 10, [['Example workout', [['10', '100'], ['10', '100'], ['10', '100']]]]])
  }

  async function updateLikes(index) {
    const response = await fetch('/api/workouts', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({index}),
    })
    const updatedWorkout = await response.json();
    setTest((oldTest) =>{
      const newAll = test.slice();
      newAll[index] = updatedWorkout;
      return newAll;
    });
    }

  async function updateLikesNew(index) {
    const response = await fetch('/api/userworkouts', {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({index}),
    })
    const updatedWorkout = await response.json();
    setTest((oldTest) =>{
      const newAll = test.slice();
      newAll[index] = updatedWorkout;
      return newAll;
    });
  }

  return (
    <main className="container-fluid text-center bg-info">
      <div className="container-fluid bg-warning mylabel">
        <h2> WORKOUT FEED</h2>
      </div>
      {addedworkouts.map((workout, index) => (
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
          <button className="btn btn-dark" onClick={() => updateLikesNew(index)}> Like This Post ❤️({workout[2]})</button>
          </div>
        </div>
      ))}
    </main>
  );
}