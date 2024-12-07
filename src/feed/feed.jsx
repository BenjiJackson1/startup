import React, { useEffect, useState } from 'react';
import './feed.css';

export function Feed({workouts, setWorkouts}) {

  const [test, setTest] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const ws = new WebSocket(`${protocol}://${window.location.hostname}:${window.location.port}/ws`);

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = async (message) => {
      const text = await message.data.text();
      const event = JSON.parse(text);
      if (event.type === 'like') {
        setTest((prevTest) => {
          const newTest = [...prevTest];
          if (newTest[event.index]) {
            newTest[event.index][2] = event.likes;
          }
          return newTest;
        });
      }
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

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
    if (socket) {
      socket.send(
        JSON.stringify({
          type: 'like',
          index: index,
          likes: updatedWorkout[2],
        })
      );
    }
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