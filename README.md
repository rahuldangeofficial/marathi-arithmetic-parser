# Parser for Arithmetic Operations in Marathi Language

This is a parser built in JavaScript that can parse arithmetic operations written in Marathi language, which is an Indian language. It follows the BODMAS (Bracket, Order, Division and Multiplication, Addition, Subtraction) rule to evaluate expressions. The parser can handle input strings that include Marathi words for division, multiplication, addition, and subtraction operations, as well as decimals, brackets, and whitespace. Notably, this parser does not use any built-in parsing mechanisms such as the `eval()` method.

## [Try Now](https://rahuldangeofficial.github.io/marathi-arithmetic-parser)

---

## Example Inputs and Outputs

## Input 1

    "10 बेरीज 2 गुणाकार 3 वजाबाकी 4 भागाकार 2"

This input can be interpreted as the expression:

    "10 + 2 * 3 - 4 / 2"

and the output will be 14

---

## Input 2

    "10.5 बेरीज 2 गुणाकार (3 वजाबाकी 4) भागाकार 2.5"

This input can be interpreted as the expression: 
    
    "10.5 + 2 * (3 - 4) / 2.5"

and the output will be 9.7

---

## Input 3

    "10.5बेरीज2गुणाकार(3वजाबाकी4)भागाकार2.5"

This input can be interpreted as the expression: 
    
    "10.5 + 2 * (3 - 4) / 2.5"

and the output will be 9.7

---

## Input 4

    "16 वजाबाकी 8 बेरीज 14 भागाकार 2"

This input can be interpreted as the expression: 

    "16 - 8 + 14 / 2" 

and the output will be 15

---

## Input 5

    "16 वजाबाकी (8 बेरीज 14) भागाकार 2"

This input can be interpreted as the expression: 
    
    "16 - (8 + 14) / 2"

and the output will be 5

---

## Input 6

    "16.5बेरीज2.5गुणाकार(3वजाबाकी4)भागाकार2.5"

This input can be interpreted as the expression: 
    
    "16.5 + 2.5 * (3 - 4) / 2.5" 
    
and the output will be 15.5

---

## Input 7

    "1बेरीज2बेरीज3"

This input can be interpreted as the expression: 
    
    "1 + 2 + 3"

and the output will be 6

---
