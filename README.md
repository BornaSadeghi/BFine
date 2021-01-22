# BFine Web App

<img src="https://i.imgur.com/52DvE0i.png" title="B-Fine - Blood donations: Easier, More Efficient"/>

### Inspiration
Globally, millions of lives are lost each year due to chronic blood shortages, at the same time millions of liters of blood is wasted every year due to overstocking of blood at certain locations. With the pandemic in place, there has also been shortage of blood in many countries globally.

### What it does
BFine is a web application that helps donors identify donation locations (blood banks) in greater need of their blood type, allows donors to register for 'Just-in-time' donations & allows health institutions (hospital/blood bank) to find stock of blood in other locations nearby or raise an 'urgent blood request', in which case the network of 'just-in-time' donors registered in nearby locations would be searched for a potential donor (in an Uber-like fashion) using text messages and automated follow-up voice calls.

### How we built it
The application has been built using NodeJS on the backend with MongoDB as the datastore and Vonage as the SMS, voice & verification/authentication gateway. The frontend has been built using React. The Google Maps API was used to aid with location-based search.

### Challenges we ran into
There was some degree of miscommunication amongst us due to the online mode of working, however we resolved the same through more frequent voice meetings during the course of our work.

### Accomplishments that we are proud of
We are proud of our implementation of the 'urgent donor search' functionality. We feel that, with a little more polishing, this can truly help in making the process of finding a blood donor in urgent situations easier and more effective.

### What we learned
We improved our remote communication skills in the process and learned a lot about integration of SMS and voice services in web applications.

### What's next for BFine
This is a lot of scope for refinement for BFine and that is what we will focus on. We intend to develop BFine such that it is compliant with regulations in most countries and can used used globally (both on small and large scale) as an open source project with little modification for each location in which it is used.
