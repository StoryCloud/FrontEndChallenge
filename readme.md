# Overview #

This coding challenge is designed to be an introduction. We get to see your design and coding skills and in return we give
you a taste what of our Front-End development pipeline is like at StoryCloud. There is no one way to complete these exercises
as long as the minimum requirements are met. As users of the apps you create, we will be looking for a delightful user
experience. As co-maintainers of your apps, we will be looking at how you organize and develop your code for extensibility and
maintainability as well as at its clarity and elegance.

We work in the modern era; your solutions do not need to support older browsers, but they should be usable on mobile platforms,
tablets, and desktops.

Go ahead, impress us!

## JavaScript Test ##
Write a single page JavaScript application that allows one to search GitHub.com for repos by keyword. Cache the results
to prevent triggering duplicate network requests. The results should show as a list, grouped by "owner" using Angular
Material Design "Sticky Headings" as demo'd in the
[Angular Material Design SubHeader Demo](https://material.angularjs.org/#/demo/material.components.subheader). Each
matching repo should be contained inside a
[Material Design Card](https://material.angularjs.org/#/demo/material.components.card). Cards should contain the
following information on separate rows:

* Repo Name (in bold, linked to the repo)
* Description. If not available, this row is hidden
* Home page. If not available, this row is hidden
* Language
* Forks
* Open Issues

All required libraries (plus a few optional but helpful ones) are provided in the JS Skeleton project. A brief intro
to the GitHub API is provided in app.js.

## CSS Test ##

Create a page with 12 equally proportioned container elements, styled however you choose. Within each container, vertically
center the word “StoryCloud”. At the top of the screen, add a single checkbox toggle that when checked makes each of the
containers' background color light-gray and text maroon (and when unchecked returns each style to its original state). Do
this without using JavaScript (this is a CSS test, after all).

This should be a responsive page that is usable and readable on any device. The following guidelines are provided:

* On a mobile device, these elements should stack on top of each-other and the text should be 20% larger than the other platforms
* On medium-sized devices, have the containers stack to 4 rows of 3
* On large-sized devices:
  * Have the containers stack to 6 rows of 2
  * When the user hovers over a container, create a transition to change the background color and font style to one of your choice

Visually, these are some pretty vanilla requirements, so feel free to make it pretty. Here's some suggestions to help spice it up:
* Implement a hierarchical page entrance animation for each container
* Leverage Angular's Material Design library

## Bonus ##
Integrate the two challenges using a Material Design SlideNav that enables the viewer to select the challenge to view. It should
be locked at 150px on large and medium screens and act as a toggle on small ones.
