<h3 align="center">Text Transformations</h3>
<p align="center">A simple library for text transformations (capitalization, spaces removal, etc.)</p>
<br />
<p align="center">
  <a href="https://www.npmjs.org/package/text-transformations">
    <img src="https://img.shields.io/npm/v/text-transformations" alt="NPM Version" />
  </a>
  <a href="https://www.codacy.com/manual/ypk46/text-transformations?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ypk46/text-transformations&amp;utm_campaign=Badge_Grade">
    <img src="https://api.codacy.com/project/badge/Grade/8bbf5f0beb2c4db9b93f19f387754c7a"/>
  </a>
  <a href="https://www.codacy.com/manual/ypk46/text-transformations?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ypk46/text-transformations&amp;utm_campaign=Badge_Coverage">
    <img src="https://api.codacy.com/project/badge/Coverage/8bbf5f0beb2c4db9b93f19f387754c7a"/>
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
