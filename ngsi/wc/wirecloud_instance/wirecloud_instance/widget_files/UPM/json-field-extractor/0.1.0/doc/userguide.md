## Introduction

Operator that, given a Json with an instance or a list, generates a list of the values of a configurable value inside that structure

## Settings

- `field-path`: Path to enter the desired data in a dot-separated syntax. It is a string referencing a value inside the structure of any of the received elements.

## Wiring

### Input Endpoints

- `object-ist`: A list containing the objects whose data is to be extracted

### Output Endpoints

- `label-list`: An array containing the element in input data pointed by the `field-path` preference.

## Usage

Connect inline in a wirling of lists of events, and it does extract specific values from the original list, outputting one of those per input element.


## Reference

- [FIWARE Mashup](https://mashup.lab.fiware.org/)
