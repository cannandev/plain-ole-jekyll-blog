---
layout: post
title:  "Adding pa11y to your workflow"
tags: accessibility, ci/cd
category: blog
references:

---

Pa11y CI is an accessibility test runner built using Pa11y. Keep reading to find out how to run it on Continuous Integration environments and during local development.

Pa11y CI runs accessibility tests against multiple URLs and reports on any issues. This is best used during automated testing of your application and can act as a gatekeeper to stop a11y issues from making it to live.

There's no doubt that checking accessibility as you develop is important. But what about when you have a large number of pages you want to check?

## False positives - suppress or address?

We already knew we had to suppress the warning about insufficient color contrast for disabled buttons. But another false positive comes up for text with background images - like the state selector dropdown arrows and usa-alert information icon. So I suppressed these elements in the pa11y config.

"hideElements": "#state-resource-link, #states-dropdown, #language-picker-dropdown-description, #covid-banner > div > h3 > a"
According to the axe docs, "Color transparency and opacity in the foreground is more difficult to detect and account for due to...Background colors in CSS pseudo-elements."

For this project, I created a spreadsheet of all the errors and their components. This helped me keep track of which ones I needed to suppress and come back to, fix, or review.

## sitemap.xml

We were hardcoding the urls into the pa11y-ci configuration. Let's automate that using jekyll-sitemap gem. The config file .pa11yci still runs first, so we could add pages to it if we wanted to. After the config, it will look at the sitemap.xml tag for site urls, except for pdfs.

## htmlcs vs axe

Using axe as the test runner still has issues for large sites. On a small number of urls, it works fine. But on this site (554 urls), it throws a "Failed to run" error signaling a closed connection. See conversations. Suggestions were to increase the timeout, change the concurrency and use the latest version of pa11y (we're running the latest 3.0.1) -- did not help. One suggestion was to use Code Sniffer, which is the default runner for pa11y.

So I switched to Code Sniffer (htmlcs) as the test runner. It flags a few different issues, but still the WCAG 2.0 AA standard.

## Local vs Sitemap urls

Now there are two commands to run pa11y tests:
npm run pa11y-ci:local will look at the urls array in .pa11yci config file. This is great for just a few urls.
pa11y-ci will review every site url in the sitemap (554 urls) except pdfs. This is the command the GitHub Action fires at each pull request.
