# Pig Latin translator

#### A program that allows the users to input a word and returns the word translate in pig latin. 12/6/17

#### By **Adam Calhoun and Edgar Hernandez**

## Description

A website created with JS,HTML,and CSS that takes in a word and translate the word in pig latin.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| **Do nothing to non letter** | Input:3 |Output: 3 |
| **Add "ay" to one-letter word** |Input:"I"  |Output:"Iay"  |
| **Remove 1st letter from multi-letter words** |Input:"Input"  |Output:"nput"  |
| **Multi-letter word get 1st letter moved to the end,"ay" to the end** |Input:"hello"  |Output:"ellohay"  |
| **Words beginning with "qu" get both letters moved to the end** |Input:"queen" |Output:"ennquay" |
| **Words beginning with multiple consonants have all but the last consonants moved** |Input:"the" |Output:"hetay" |
| **Words beginning with a vowel followed by multiple consonants before the next vowel have the first letter and all following consonants except for the last moved to the end** |Input:"input" |Output:"putinay" |
| **For words beginning with "y" treat "y" as a consonant** |Input:"yelling" |Output:"ellingYay" |
| **Do all of the above for sentences of multiple words** |Input:"Do all of the above for sentences of multiple words" |Output:"Day llay foay hetay boveaay orfay entencessay foay ultiplemay ordsway" |

## Setup/Installation Requirements

1. run in browser

## Known Bugs
* No known bugs at this time.

## Technologies Used
* Javascript
  * jQuery
* HTML
* CSS
  * Bootstrap

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2017 **_{Adam Calhoun, Edgar Hernandez}_**
