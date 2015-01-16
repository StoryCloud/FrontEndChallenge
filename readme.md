# Overview #

Write a single page JavaScript application that allows one to search Github.com for repos by keyword.

There is no one way to complete this exercise as long as the minimum requirements are met.

## JavaScript Test ##

1. You can only edit app.js, you cannot touch index.html. jQuery is provided.
2. index.html contains two elements: one for the search term and one for the results.
3. The results should show as a list with each item in an "owner/name" format.
4. When a result is clicked, display an alert with the repo's `language`, `followers`, `url` and `description`.
5. The search term should be cached so duplicate searches do not trigger further requests. 
6. Solution does not need to support older browsers.

## CSS Test ##
With in the App, import Angular’s Material Design library for styling your UI. 

1. After, within your existing test, create a DIV that has 12 equally proportioned child DIVs that on a mobile device stack on top of each other. 
2. With in each child DIV, vertically center the word “StoryCloud” and give each DIV a unique background color. 
3. For medium sized devices, have the original position and layout of the child DIVs stack to 4 rows of 3.
4. For large sized devices, have the next state for the child DIVs be 6 rows of 2.
5. For large sized devices, on hover of a child DIV, create a transition to change the background color and font style to one of your choice.
6. Create row above the existing DIVs that is full width of the parent container. In this row create a Checkbox
7. Using this check box, on check, add a class to the container with the 12 child DIVs that makes each of their background colors white and text purple. You should be able to toggle between states using this checkbox.

Bonus:

1. Implement a hierarchal page entrance animation for each of the 12 DIVs.
2. Implement a Material Design Slidenav that is locked at 700px, but not at a lower window width. You should be able to toggle it on and off however at < 700px.
