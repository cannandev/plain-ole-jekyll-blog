---
layout: post
title:  "Alternative text for images - Stop when you're overthinking it"
tags: accessibility images
category: blog
references:
  title: W3C Alt Decision Tree
  url: https://www.w3.org/WAI/tutorials/images/decision-tree/
  title: Decorative images tutorial
  url: https://www.w3.org/WAI/tutorials/images/decorative/
---

How many times have I sat staring at an image wondering, _How do I describe this thing?_. I was trying to come up with alternative text for an image. But I was missing a key step in "thinking accessibly".

I'm not alone. I've come across situations in engineering where the developer is left wondering, "What am I supposed to write as alt text for this image?" That's actually a great sign! The developer has incorporated good accessibility practices in their workflow. But when you're having trouble describing an image, that's actually an indicator that you should change your approach.

## What is `alt` text?

Alternative text, or `alt` text, is an HTML image attribute.

```
<img src="/src/img/logo-black.png" alt="Site logo for @cannandev" />
```

Alternative text describes the image. It is read out loud by screen-readers, which makes this attribute critical for vision-impaired users. To be effective, `alt` text should help the user understand the surrounding content.

>One thing to consider is whether your images have meaning inside your content, or whether they are purely for visual decoration, and thus have no meaning.
  <cite>Mozilla Developer</cite>

## Use an _alternative_ approach to _alternative_ text

> Where possible, decorative images should be provided using CSS background images instead.
  <cite>W3C</cite>

For some types of images, there are alternative approaches, such as using CSS background images for decorative images or web fonts instead of images of text.

### Background image example:

```<div class="billboard-media-image" style="background-image: url(https://assetsnffrgf-a.akamaihd.net/assets/m/502000143/univ/art/502000143_univ_lss_lg.jpg)"></div>
```
JW.org

### Web font example:

Cassie Blog[4^]

## Use an `alt` Decision tree

If your image must be coded as an inline image (using the `img` tag), use the [W3C decision tree](W3C decision tree) to determine what to do with that `alt`. The

## Considerations for Content Management Systems

* Allow content managers to choose and upload images.
* Allow content managers to add alt text.
* Handle styling (positioning, height, width, etc.) in stylesheets. Assume your content managers don't know code.
* Automate generating responsive images per breakpoint.
* Optimize your images.


## Designing for Devs

A colleague, commenting on a competitor site, said "Their descriptions are written in developer-speak instead of plain language." I responded, "That's probably because no one gave the developer a plain language description."

If you are a designer (content design, UX design, visual design), let the development team know what kind of alternative text to use for the images you select. Is it decorative, functional or informative? You can indicate the image type in your design tools. You should also provide the alternative text based on the specific context the image is being used in and its purpose. Designers, you play a key role in the user's experience. If you don't provide direction for developers, they will take matters into their own hands.

Consider hiding decorative images for smaller viewport sizes (mobile, small tablets). It will improve performance and your users will thank you! If you'd like to curate images for different viewport sizes, talk to the development team about different options. Implementing a responsive image workflow takes time and should be included in project planning.

## Conclusion

Context matters. First, determine what type of image you have - informative, decorative or functional. Then, use an image decision tree to determine what to do with the `alt` text. If you find yourself thinking of an elaborate description, or leaving it blank, you're probably better off using a background image approach.
