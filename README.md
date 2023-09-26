# Project 1 — Mini Pokédex

## Description
In this project, you'll be creating a frontend that graphically displays Pokémon information (similiar to a Pokédex). To fetch all the necessary information, you'll be working with the [PokeAPI](https://pokeapi.co/docs/v2#pokemon).

## Setting Up
- Fork this repository, set the owner to BoG-Dev-Bootcamp-F23, and name it `project1-f23-yourname`
- Clone the repository onto your local computer
- Navigate to your new project folder and create your HTML, CSS, and JS files

# Submission Instructions
- Create a 0.5-3 minute video walkthrough of your project (include the video link in the README of your project repo)
- Push all your changes to the remote repository. Make sure that the owner is BoG-Dev-Bootcamp-F23 so that we can see the repository! (if you forgot to do this, you can alternatively message Nathan on Slack with the link to your repo)
- **Due Date:** 10-5-2023

## Requirements
- Must use HTML, CSS, and JS
- Must contain the specified frontend elements
- Must use the free PokeAPI
- Should have at least 20 commits (though not required)

## Project Specifications
**What the end result should look like:**

<img width="400" alt="Screenshot 2023-09-04 at 9 03 32 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/c62dfea1-ad58-44d5-8fdc-9c2f92a66824">
<img width="400" alt="Screenshot 2023-09-04 at 9 04 04 PM" src="https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/a6ba8fe5-758a-4825-902e-eb44c39e8128">


### General Guidelines
You should try to follow the mockups as closely as possible (including the alignments). The Figma designs can be found [here](https://www.figma.com/file/fQMSS7UqlWSY8M4uadlboM/Bits-of-Good-F23-Project-1?type=design&node-id=0%3A1&mode=design&t=94SJ06eCzcBAOSip-1).

This project is designed to replicate real Bits of Good developer work. Typically, developers are given mockups by designers and are tasked with implementing them in code.

### API Fetches
You will be pinging the PokeAPI using `fetch()`. Refer to the [PokeAPI docs](https://pokeapi.co/docs/v2#pokemon) for more details about endpoints and JSON response formats. You can also view your requests at https://pokeapi.co/.

### Arrow Buttons
![Screenshot 2023-09-04 at 9 08 05 PM](https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/b35d5265-dfdd-4524-a416-521e02ce8668)

These buttons control the ID number of the Pokémon you are currently displaying. Whenever a user clicks on these buttons, the ID number should be incremented/decremented, and the other components should be updated accordingly (to achive this, you'd want to create an HTTP request every time the buttons are clicked to fetch the data for the next Pokémon).

Note: be careful about querying an id number that doesn't exist (e.g. 0).

### Pokémon Identifiers (Image, Name, Types)
![Screenshot 2023-09-04 at 9 12 31 PM](https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/a1ff09fb-3087-4163-a22f-655f92c20d87)

These should update automatically as a user clicks on the arrow buttons. All of the necessary data is available in the response to the HTTP request.


#### Pokémon Types
For however many types a Pokémon has, display all of them horizontally. Each type should correspond with a different color. The [official hex colors](https://www.epidemicjohto.com/t882-type-colors-hex-colors) for each type are:

![Screenshot 2023-09-04 at 9 22 08 PM](https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/4ad443da-2976-490f-8733-1f4904a3b94b)

### Info/Moves Buttons
![Screenshot 2023-09-04 at 9 23 27 PM](https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/37dd9877-a8b6-49c3-b75e-db70a7e0c3c6)

The color of the buttons should differ based on whichever one is currently active (i.e. if the info is showing, then the info button should be green, etc.). Clicking each button should change whether the info or moves button is showing. 

The selected setting should remain the same when the user switches between Pokémon using the arrows. 

### Stats Panel
#### Info
![Screenshot 2023-09-04 at 9 26 15 PM](https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/9f88fddd-6341-455f-acc1-f791941e7948)

This panel should change accordingly as the user switches between Pokémon. Make sure the units are being displayed correctly — for example, the height stat is returned as an integer from the API but the units are in 0.1m.

#### Moves
![Screenshot 2023-09-04 at 9 28 25 PM](https://github.com/BoG-Dev-Bootcamp-F23/project1-f23/assets/8647920/9055c178-e05d-4e62-98e8-287f4ca31018)

Like the info panel, the moves should change accordingly as the user switches between Pokémon. This panel should simply list the names of all the Pokémon's moves.
