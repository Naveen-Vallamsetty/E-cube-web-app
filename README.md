Install the dependencies - `npm i` or `npm install`

Run the json server - `npm run server` - to get API end points

http://172.25.208.1:4000/latest
http://172.25.208.1:4000/upcomingMovies
http://172.25.208.1:4000/events
http://172.25.208.1:4000/booking-details

172.25.208.1 - replace this your local IPV4 address fecthed by using `ipconfig` command
After getting IPv4 replace API_URL with that in a [text](src/config/api.js) file.

Start the project - `npm start`

Build an Online Movie Ticket Booking Web-Application using React andRedux
Background:
E-Cube is a web application, which allows user to book online tickets for latest movies, concertsand other LIVE events happening in the city. With the increase in web traffic, E-Cube’s websiteload time increases significantly which in turn reduces the speed and performance of thewebsite. It was earlier designed using traditional web development methodologies. Also, onadding or updating any feature, maintaining the website was difficult for the development teamdue to tight coupling of UI components. Hence, all these challenges led to unsatisfied user
experience. Now they want to focus on maximizing the usability and enhancing the user experience, sothecompany decided to upgrade their website using React library. Goal:
The goal of this project is to build an online ticket booking application for latest movies, upcoming movies, concerts and other LIVE events. Web Application Requirement:
JavaScript, HTML, CSS, React, Redux and Axios to call API. Web Application Implementation:
The Web Application should include following aspects:

1. All Latest movies
2. Latest Movies Details
3. Ticket booking page
4. Final Ticket Page
5. All Upcoming movies
6. Events

   1. Latest Movies:
      This section should contain the list of all the new movies available in the theatre.

   2. Movies Detail Page:
      On clicking the movie, application should navigate the user to its details page which should include below options.

   3. Ticket Booking Page:
      On clicking “Book Now” option, user should be navigated to ticket booking page whichshould include the below options.

   4. Final Booking Page:
      After selecting the tickets, a QR code should be generated with all the booking details, which can be scanned by user’s mobile phone.

   5. Nearby Event:
      This section should have the details of events like concerts, Drama-plays, Competitionsand other activities happening in the city.
