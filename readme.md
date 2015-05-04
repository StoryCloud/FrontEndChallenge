# Overview #

This coding challenge is designed to be an introduction. We get to see your design and coding skills and in return we give
you a taste what of our Front-End development pipeline is like at StoryCloud. There is no one way to complete these exercises
as long as the minimum requirements are met. As users of the apps you create, we will be looking for a delightful user
experience. As co-maintainers of your apps, we will be looking at how you organize and develop your code for extensibility and
maintainability as well as for its clarity and elegance.

We work in the modern era; your solutions do not need to support older browsers, but they should be usable on mobile platforms,
tablets, and desktops.

Go ahead, impress us!

## CSS Test ##

The [Angular Material Design library](https://material.angularjs.org) provides several tools for responsive layouts, grid systems,
and child element alignment. We would like you to leverage these tools where appropriate to perform the following:

* Create a page with 12 equally proportioned container elements. Center the word “StoryCloud” within each container, horizontally and vertically
* This should be a responsive page that is usable and readable on any device. The following guidelines are provided:
  * On a mobile device, these elements should stack on top of each-other and the text should be 20% larger than the other platforms
  * On medium-sized devices, have the containers stack to 4 rows of 3
  * On large-sized devices:
    * Have the containers stack to 2 rows of 6
    * When the user hovers over a container, create a transition to change the background color and font style to one of your choice

In addition, add the following features:
* At the top of the screen, add a single checkbox toggle that when checked makes each of the containers' background color light-gray and text
maroon (and when unchecked returns each style to its original state)
  * Do this without using JavaScript (this is a CSS test, after all)
* Implement a hierarchical page entrance animation for each container element

## JavaScript Test ##

The [Angular Material Design library](https://material.angularjs.org) implements many components of
[Google's Material Design standard](http://www.google.com/design/spec/material-design/introduction.html). Leveraging the directives
provided by the library, write a single page JavaScript application that simulates a GitHub.com search by keyword.
* Create a heading for the app with whatever content you choose
* Provide a search box with a button that would allow the user to search GitHub
* The results should show as a list, with all repositories belonging to the same owner grouped under his name "owner". The Owner's name should be contained in Angular Material Design "SubHeadings".
  * As demo'd in the [Angular Material Design SubHeader Demo](https://material.angularjs.org/#/demo/material.components.subheader), this subheading should stick to the top of the scrollable area as the user scrolls through the list of repos.
  * Each repo should be contained inside a [Material Design Card](https://material.angularjs.org/#/demo/material.components.card). Cards should contain the following information on separate rows:
    * Repo Name (in bold, linked to the repo)
    * Description. If not available, this row is hidden
    * Home page. If not available, this row is hidden
    * Language
    * Forks
    * Open Issues

All required libraries (plus a few optional but helpful ones) are provided in the JS Skeleton project. Since this challenge has a CSS focus you don't need to implement a data access layer; the skeleton project provides an `onSearchClick` hook for you to wire your to search.

## Bonus ##
Integrate the two challenges using a Material Design SlideNav that enables the viewer to select the challenge to view. It should be locked at 150px on large and medium screens and act as a toggle on small ones.
