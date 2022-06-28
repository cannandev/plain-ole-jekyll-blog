---
layout: post
title:  "Build with me! Slugify text with a bash script"
tags: bash
category: tutorial
references:
---

A small script that turns an article title into a filename.

## What's a slug, anyway?

A slug is a human-readable, unique identifier, used to identify a resource such as a blog article or a file name. Good slugs are search-engine optimized, which means they can be parsed to quickly indicate what the resource is all about. It's usally the same as the resource title, but lowercased and snake-cased.

This tiny script is great for blog writing, but for creating system filenames too. Similar to Wordpress or other content management system that does this automatically when saving a file. Yes, I'm sure there are plugins that do this for Jekyll. But I wanted to write a bash script.

## The script

<script src="https://gist.github.com/cannandev/94781e818d62abca7e67b339725dd192.js"></script>

## Create an alias

If I'm in the same directory as the script, I can run `sh slugify.sh` from the command line. But that's not convenient. So I'll add an alias in my bash profile:

`alias slugify="sh slugify.sh"`

I'll start a new session to pick up the file change. Now, I can just type `slugify` to execute the script.

## Make it available everywhere

Navigating to the directory where I created the script isn't convenient either. So I'll move slugify.sh to my When I save this script to `/usr/local/bin`. This directory is already added to my Bash $PATH. Now, I can access this script from any directory. From the command line, when I run
`slugify`, it gives me the following prompts:

`Hi, clairefannan! Please enter the string you want to slugify:`
hello sweet world
`hello-sweet-world was copied to your clipboard.`

That's it! Now I can paste the slug into my code editor. What will you use it for?
