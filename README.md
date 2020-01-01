<h3 align="center">Text Transformations</h3>
<p align="center">A simple library for text transformations (capitalization, spaces removal, etc.)</p>
<br />
<p align="center">
  <a href="https://www.npmjs.org/package/text-transformations">
    <img src="https://img.shields.io/npm/v/text-transformations" alt="NPM Version" />
  </a>
</p>

## Installation

    npm install text-transformations

## Usage

Using `require`

    const TextTransformation = require('text-transformations')

Using `import`

    import TextTransformations from "text-transformations"

## Available Transformations

Capitalize each word of a string

    console.log(TextTransformations.CapitalizeEach("hello world"));
    // Hello World

Clear uncommon spaces (like multiple spaces between words / spaces at the end or start of the string)

    console.log(TextTransformations.ClearSpaces("Hello   World "));
    // Hello World

Replace all occurrences of an array of matches

    console.log(TextTransformations.ReplaceAll("(889) (849)-(8495)", "", ["(", ")", "-", " "]));
    // 8898498495
