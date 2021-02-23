# 03 JavaScript: Password Generator
![The Password Generator application displays a red button to "Generate Password".](./Assets/03-javascript-homework-demo.png)

## Description 
Company wanted a program to help generate a secure, strong, random password for employees. Employees are able to set the parameters of length and type of characters to be generated in the password. 

#### Deployed Link: [Password Generator](https://hanlee-311.github.io/password-generator/)


## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Functions of Password Generator
- User can set a length of their password between 8-128 characters.
- User can confirm their length of password before continuing to the next series of parameters. 
- User can choose to use uppercase, lowercase, numbers, and/or special characters in their password. 
- After user has confirmed their choice of parameters, a random password will appear on the screen based off the user's choices. 

### Changes Made to Javascript
- Created a function that generates a random password
- Within this function, a series of prompts, alerts, and confirms will select from a series of arrays for the user's parameters. 
- User will not be able to use anything but a number in the first prompt for password length. 
- The generator will alert the user if the password length is not long enough, or if the input is not a number. 
- The generator will allow the user to confirm that they want their password to be the chosen number they put in, or change it if they want to. 
- Confirm prompts for the parameters (uppercase, lowercase, number, and special characters) will appear after length has been confirmed. 
- Based on the user's choices, the script will choice from a series of array's random characters set to the length chosen by the user. 
- The random password that is generated will appear on the screen for the user to see. 


