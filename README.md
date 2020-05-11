# Lights Out Game
> A logic/puzzle game, played on a gird of individual lights, which can either be lit or unlit.

## Table of contents
* [General info](#general-info)
* [Rules](#rules)
* [Demo](#demo)
* [Technologies](#technologies)
* [Third party resources](#third-party-resources)
* [Setup](#setup)
* [Inspiration](#inspiration)

## General info
This is a training project to get more practice with React events where the state and events happen in different classes.

## Rules
The game consists of a 5 by 5 grid of lights. When the game starts, a random number or a stored pattern of these lights is switched on. Pressing any of the lights will toggle it and the four adjacent lights. The goal of the puzzle is to switch all the lights off.
Caution! Some lights-on/lights-off starting configurations may not actually be solvable.

## Demo
You can view online demo here: https://akabikov.github.io/lights-out-game/

## Technologies
* [React](https://reactjs.org/) - version 16.13.1
* CSS Grid
* CSS native variables

## Third party resources
* Neon animated fonts by [Thomas Trinca CodePen](https://codepen.io/Trinca/pen/NAvpWa)

## Setup
To run this project, install it locally using npm:

```shell
$ cd ../lights-out-game
$ npm install
$ npm start
```

## Inspiration
The project is based on the exercise from Udemy ["The Modern React Bootcamp"](https://www.udemy.com/course/modern-react-bootcamp/) course by [Colt Steele](https://www.youtube.com/c/ColtSteeleCode)
