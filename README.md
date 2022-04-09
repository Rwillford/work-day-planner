# Work-Day-Palnner

## User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## My Stuff
I have gone through the code provided and added to everything required in the acceptance criteria.
First, I updated the html file to have all 9 rows in there for the time, task and save button. Added the classes provided from the css file. I used an id of numbers in accending order for the rows to use in the JS part of counting through for the past, present and future part and for the for statement in the local storage. 
Next, I created the JS file. I added moment to grab the current date. I then created a function to save tasks with the save button to local storage. Next I created a function to check what time it is with moment to assign the proper class tag of past present and future. Lastly, I create a for statment for the id numbers to cycle through and grab what is save to local storage. My tutor helped me out in this and show me how to use the backticks in JS.

### Here is a screenshot of my planner working and link to site
<img width="982" alt="WDP_SS" src="https://user-images.githubusercontent.com/99914942/162584227-2bc079e6-458c-4e8d-88db-e303f4eb9d30.png">
https://rwillford.github.io/work-day-planner/
