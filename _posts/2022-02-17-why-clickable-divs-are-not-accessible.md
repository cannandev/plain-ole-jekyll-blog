---
layout: post
title:  "Why clickable divs are not accessible"
date:   2022-02-17
category: design-for-devs
tags: accessibility, design
references:
  - title: Javascript solution to the clickable dev
    url: https://css-tricks.com/block-links-the-search-for-a-perfect-solution/#method-4-sprinkle-javascript-on-the-second-method
---

"Can you make that whole thing clickable?" Here's why you should reconsider.

Is usually the first request I get after making a card of some sort. A card usually consists of a title, a brief description, maybe a category and a call to action in the form of a link or button. And after formatting this data from a dynamic source and styling it per design, the first thing a reviewer says is, "Can you make the whole thing clickable? Not just the call to action?"

Here's why that's a bad idea.

## Screen readers announce everything inside the link

## Users cannot select text

## Forces unsemantic markup for the call to action

Not clear what the call to action is if it's everything. Make it clear.

Best way to know what's useful to your users is watching their behavior during user testing. As a developer, raise this as an area for testing.

