import React from 'react';
import './feed.css';

export function Feed() {
  return (
    <main class="container-fluid text-center bg-info">
        <div class="container-fluid bg-warning mylabel"> 
            <h2> WORKOUT FEED</h2>
        </div>
        <div className="workout-container mt-3">
            <h4> Post by: UserX32</h4>
            <p> 9/23/2024 at 12:07 PM</p>
            <h4> Dumbell Chest Press </h4>
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