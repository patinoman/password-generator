# Password Generator
In this repository I created an application that generates a random password based on user-selected criteria:
- WHEN I click the button to generate a password
- THEN I am presented with a series of prompts for password criteria
- WHEN prompted for password criteria
- THEN I select which criteria to include in the password
- WHEN prompted for the length of the password
- THEN I choose a length of at least 8 characters and no - more than 128 characters
- WHEN prompted for character types to include in the password
- THEN I choose lowercase, uppercase, numeric, and/or special characters
- WHEN I answer each prompt
- THEN my input should be validated and at least one character type should be selected
- WHEN all prompts are answered
- THEN a password is generated that matches the selected criteria
- WHEN the password is generated
- THEN the password is either displayed in an alert or written to the page

## Process
The app runs in most browsers and features HTML and CSS powered by the JavaScript code.

This was my first attempt at developing an application using JavaScript so it was a great challenge for me to complete. My first goal was to set up which arrays would be needed and how to function them properly. I looked over many examples from the UCLA Bootcamp Modules and quite a bit of research on several developer websites such as developer.mozilla.org, javascript.info, and stackoverflow.com. I made sure that each user input was validated and that at least one of the password criteria was entered. Finally, I added a function shuffle array in order to truly randomize the passwords that were generated with no bias. The result is a truly randomized password generator.



## Credits
My friend Jesse and Jose, who have assisting me through my progress and many many struggles.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt

Code snippet from:
https://javascript.info/task/shuffle/

## Screenshot

![Password Generator](/password-generator-image.PNG?raw=true "Password Generator Screen")

### Links
- GitHub Pages: https://patinoman.github.io/password-generator/
- GitHub Repository: https://github.com/patinoman/password-generator