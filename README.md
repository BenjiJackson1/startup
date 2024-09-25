# startup
Startup application for BYU CS 260 - J4CK3D

## Specification Deliverable

### Elevator pitch

Strava is the world's leading exercise app, allowing users to post information
about their runs, hikes, bike rides and swims, and share it with their friends.
One feature that is severly lacking is the ability to post details about weight
lifting. J4CK3D ("jacked") is a simple interface that allows users to create
posts about their recent gym experience, including the amount of the reps they
did and how much weight they lifted, and to share those posts with others!

### Key Features

* Login in securely through HTTPS
* Create a post, specifying the various exercises performed, the weight, and 
the number of repetitions
* Post workout to a feed of other workouts through a separate post page
* View the feed of workouts
* "Like" the workouts of others on the feed

### Design

![Design](ninjamock.png)

### Technologies

I will include all of the following technologies in this project

1. HTML
- 3 HTML pages that will be correctly implemented. One page for the sign in,
one page to view the feed, and one page to create new posts.

2. CSS
- CSS will be used to style each of the three pages with a cohesive design style
and color pallet that will bring the project together.

3. JavaScript
- Used for the login, allows users to like other posts and scroll through the
feed, used to create new posts

4. React
- Single page application,reacts to the actions taken by the user

5. Service
- Backend service that allows for login, storing the users posts and the "like"
count for each post as well as all other relevant information for each post

6. Database / Login
- The database will store user logins and post information. Only allows users
that are signed in to view the posts on the feed.

7. Websocket
- Likes made by one user are shared to other users on the feed