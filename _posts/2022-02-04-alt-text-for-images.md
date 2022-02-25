---
layout: post
title:  "Alternative text for images - Stop when you're overthinking it"
tags: accessibility, images
category: design-for-devs
references:
  title: The case for describing race in alternative text attributes
  url: https://ux.shopify.com/the-case-for-describing-race-in-alternative-text-attributes-a093380634f2
  title: W3C Alt Decision Tree
  url: https://www.w3.org/WAI/tutorials/images/decision-tree/
  title: Decorative images tutorial
  url: https://www.w3.org/WAI/tutorials/images/decorative/
---

I recently came across an article explaining the case for describing race in alternative text attributes. This is my counter article.

Why am I countering? I've come across situations in engineering where the developer is left wondering, "What am I supposed to write as alt text for this image?" This is actually a leading indicator you've missed a step in the accessibility [consideration]. If you've found yourself asking this question, read on.

## What is `alt` text?

## Use an _alternative_ approach to _alternative_ text

> Where possible, decorative images should be provided using CSS background images instead.
  <cite>[w3.org](https://www.w3.org/WAI/tutorials/images/decorative/)</cite>
  
For some types of images, there are alternative approaches, such as using CSS background images for decorative images or web fonts instead of images of text. 

## Use an `alt` Decision tree

If your image must be coded as an inline image (using the `img` tag), use the w3.org decision tree to determine what to do with that `alt`. 

### Considerations for Content Management Systems

## The case for describing race in `alt` text attributes

I recently came across this article by Tolu Adegbite [^3]. In this article, they give three examples in which describing race was important. And I agree with them - for those three examples. Because each of those examples depicted race in a historical setting. The image was not decorative, but informative - it conveyed meaning to the text.

Here is a comment I found regarding the article.

>This is very timely, thanks! I’m currently trying to describe two photos in alt text. One is easier - a young black girl wearing a backpack adjusting her surgical mask. Her dad is leaning down to talk to her - but most of the dad is out of frame. Should I include him?

If I'm listening to my screen reader, visiting a site to get information about COVID-19 resources near me, do I really need to know that there's an image on the page depicting a "a young black girl wearing a backpack adjusting her surgical mask with her [insert ethnicity] dad leaning down to talk to her"? How does this information get me closer to finding the resource I need on this page?

On the other hand, if this image is being added to a media library, this text would be helpful for someone looking specifically looking for a "young black girl". In this context, the description is informative. I definitely took advantage of this type of detail for my homepage image. 
  
Here's another comment...
  
>...In another photo, there’s a couple sitting in airport chairs, the woman is resting her head on the man’s shoulder. The man is white, but to be honest I can’t see enough of the woman’s face to tell - she may be middle eastern, west asian, or east asian? What should I include if I can’t be thorough?

You're making a lot of assumptions there, my friend. How do you he's white? If this is an ad for an airline, does it really matter her ethnicity? Does this detailed description help me understand the context? Are they even necessary?

Probably not. Describe race in `alt` text when race is part of the context. And please make sure it's accurate. If you have to guess, leave it out.

## Designing for Devs

Tolu Adegbite[^3] gives a great suggestion:

>If you are a designer (content design, UX design, visual design), you should let the developer team know what kind of alternative text attribute to use for the images you select (are the images decorative or not?). You should also provide alt text based on the specific context the image is being used in and its purpose. Designers need to have an active part in writing alternative text because it’s part of the user’s experience and shapes their understanding of the content.

I couldn't agree more with you, Tolu. That's why you get a ⭐ in the **Designing for Devs** series.

## Conclusion

Context matters. First, determine what type of image you have - informative, decorative or functional. Then, use an image decision tree to determine what to do with the `alt` text. If you find yourself thinking of an elaborate description, or leaving it blank, you're probably better off using a background image approach.
