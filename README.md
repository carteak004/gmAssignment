# GM React Native Assignment
GM React Native Technical Assignment

Built a cross platform app using React Native.

Tested iOS part of the app on a mobile deivce.

## File Structure:

All the created files are placed in src folder

* __src__
  * __api__
    * __Constants__ - has the github URL used
    * __GetCommits__ - calls the Github API to retreive the 30 most recent commits from facebook/react-native repository
  * __components__
    * __CommitComponent__ - the render component that displays the name, hash and message in the list view
  * __containers__
    * __CommitContainer__ - holds the code to call the API and load the data into a listview. I used a Flatlist for this assignment
  * __styles__
    * __StyleSheet__ - holds all the styles used throughout the app


App.js is the entry point of the app that loads the list view in a safe view that deals with the edges and Status bar in iOS
---
No specific test cases are written in this assignment for now
