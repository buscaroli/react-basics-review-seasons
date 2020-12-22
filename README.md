# ReactJS Basics

Reviewing React applications with focus on implementing simple functionalities.

## Application: Seasons

Showing the current Season using the geolocation API and Data().

### Features

* Using the geolocation API.
* Implementing a Spinner Component through semantic-ui-css
* Simplified code by using a config object (see DisplaySeason.js)
* Moved logic out of the render() method and into a separate renderContent() method
..* This has the benefits to allow to easily modify the styling of the component in a single element rather than having to style all the possible outcomes of the 'if else' logic. Consider being asked to add a border to the component: instead of having to add a border in the div surrounding the if and the else, you can simply add the border to the dic in the render() method. 