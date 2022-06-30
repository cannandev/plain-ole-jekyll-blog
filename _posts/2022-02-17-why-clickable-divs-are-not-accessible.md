---
layout: post
title:  "Why clickable divs are not accessible"
date:   2022-02-17
category: blog
tags: accessibility design
references:
  - title: Javascript solution to the clickable dev
    url: https://css-tricks.com/block-links-the-search-for-a-perfect-solution/#method-4-sprinkle-javascript-on-the-second-method
  - title: Pitfalls of Card UIs
    url: https://daverupert.com/2018/04/pitfalls-of-card-uis/
---

"Can you make that whole thing clickable?" Here's why you should reconsider.

Is usually the first request I get after making a card of some sort. A card usually consists of a title, a brief description, maybe a category and a call to action in the form of a link or button. And after formatting this data from a dynamic source and styling it per design, the first thing a reviewer says is, "Can you make the whole thing clickable? Not just the call to action?"

Here's why that's a bad idea.

## Screen readers announce everything inside the link

## Users cannot select text

Wrapping blocks of text in links (known as “block links” or “clickable boxes”) prevents users from selecting text. This is an accessibility blocker. Users may need to copy and paste text, highlight it in their browser, or activate their screen reader on selected content.

The existing site uses block links in the “Learn More” blocks and “In this Section” lists (red shows links, yellow shows selected text):


## Forces unsemantic markup for the call to action

Not clear what the call to action is if it's everything. Make it clear.

Best way to know what's useful to your users is watching their behavior during user testing. As a developer, raise this as an area for testing.

