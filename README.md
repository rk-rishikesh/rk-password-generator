<br><h1 align="center">![protect and manage passwords](https://user-images.githubusercontent.com/59107121/131472272-a4fb61ca-8a54-460e-bfd8-776e63710c8d.png)
</h1></br>


# rk-password-generator
> A random password generator package for Node written entirely in JavaScript, with zero native dependencies. 

## Instructions use the package in your project

  
### Prerequisites

Install the following prerequisite

[NPM](https://nodejs.org)

### Installation
```bash
  npm i rk-password-generator
```

### Usage
> To generate a random password with following requirements:

- Minimum 1 Uppercase letters: A-Z.

- Minimum 1 Lowercase letters: a-z.

- Minimum 1 Numbers: 0-9.

- Minimum 1 Special character: ~`! @#$%^&*()_-+={[}]|\:;"'<,>.?/
```bash
  const rkPasswordGenerator = require('rk-password-generator')
  
  console.log(rkPasswordGenerator("rishikeshKale"))
  //AHTbl@322954
  
  console.log(rkPasswordGenerator("rk"))
  //Error: Invalid Username : Length must be greater than 3!
  
  console.log(rkPasswordGenerator(1234))
  //TypeError: Invalid Username : It must be of type string!
```
