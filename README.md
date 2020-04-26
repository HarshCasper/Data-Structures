# Data-Structures

<p align="center">
  <a href="https://github.com/HarshCasper/Data-Structures">
    <img src="https://ds055uzetaobb.cloudfront.net/brioche/chapter/Data_Structures_1_by_1_white-UYCcaA.png" alt="Logo" width="200" height="200">
  </a>

## 📌 Introduction

<b>Data Structures</b> is an NPM Package built for Developers to get a High-Level API Access to various Data Structures. This is my first NPM Package and this tool was developed for practising various Data Structures and was later wrapped as a Package and published on NPM.

The Package is available on [NPM](https://www.npmjs.com/package/data_structure_models).

## 💥 Installation

The Package can be installed by running the follow command on your Command Prompt/Shell: 

```
$ npm install data_structure_models
```

After installation of the the Package, you can run the following script to validate if the Package is running fit and fine:
```
var dataStructureModels = require("data_structure_models");
var datastructures= new dataStructureModels();
var stack=datastructures.Stack();
stack.push(5);
stack.push(3);
stack.print();
```

This will print the Stack on the Console and you are free to experiment with the wide number of Data Structures available with the Package.

## 🏁 
