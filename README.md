Clone the repository

Install the dependencies - `npm i` or `npm install`

Run the JSON server - `npm run server` - to get API endpoints

http://172.25.208.1:4000/latest
http://172.25.208.1:4000/upcomingMovies
http://172.25.208.1:4000/events
http://172.25.208.1:4000/booking-details

172.25.208.1 - replace this with your local IPV4 address fecthed by using the `ipconfig` command
After getting IPv4 replace API_URL with that in a [text](src/config/api.js) file.

Start the project - `npm start`

Build an Online Movie Ticket Booking Web-Application using React and Redux
Background:
E-Cube is a web application, which allows user to book online tickets for the latest movies, concerts, and other LIVE events happening in the city. With the increase in web traffic, E-Cube’s website load time increases significantly which in turn reduces the speed and performance of the website. It was earlier designed using traditional web development methodologies. Also, adding or updating any feature, and maintaining the website was difficult for the development team due to the tight coupling of UI components. Hence, all these challenges led to an unsatisfied user
experience. Now they want to focus on maximizing the usability and enhancing the user experience, so the company decided to upgrade their website using the React library. Goal:
The goal of this project is to build an online ticket booking application for the latest movies, upcoming movies, concerts, and other LIVE events. Web Application Requirement:
JavaScript, HTML, CSS, React, Redux, and Axios to call API. Web Application Implementation:
The Web Application should include the following aspects:

1. All Latest movies
2. Latest Movies Details
3. Ticket booking page
4. Final Ticket Page
5. All Upcoming movies
6. Events

   1. Latest Movies:
      This section should contain a list of all the new movies available in the theatre.

   2. Movies Detail Page:
      On clicking the movie, the application should navigate the user to its details page which should include the below options.

   3. Ticket Booking Page:
      On clicking the “Book Now” option, a user should be navigated to the ticket booking page which should include the below options.

   4. Final Booking Page:
      After selecting the tickets, a QR code should be generated with all the booking details, which can be scanned by the user’s mobile phone.

   5. Nearby Event:
      This section should have the details of events like concerts, Drama-plays, Competitions and other activities happening in the city.
