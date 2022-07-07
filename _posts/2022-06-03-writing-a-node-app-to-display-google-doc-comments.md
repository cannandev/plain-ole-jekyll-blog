---
layout: post
title:  "Build with me! Writing a Node app to display Google Doc comments"
tags: automation nodejs
category: tutorial
references:

---

Every once in a while you come across a ridiculous request from a client. Automation usually makes me feel better, knowing that I spent time writing code and not repeating a manual task. This is one of those situations.

## Getting the comments

1. Go to the Drive API **Comments list** and use the API Explorer.
1. Enter **fileId** of the google doc you’d like to lookup (the ID is between the `/d/` and the `/edit` parameters in the url.
1. Enter `comments` as the fields string. Enter `*` to get back all fields and  narrow down the results later.
1. Under **Credentials**, Google Auth and API should be selected by default.
1. Click **Execute**. This will launch a popup window asking you to use your gmail account for authentication and API access. Important: Use the organization account where the document lives. For example, I have a Developer account with my personal gmail account, but the document I want to check is with my employment organization. You don't need a developer account with the organization, but you do need to authenticate. This was an issue I ran into.
1. If successful, you’ll see a a ‘200’ result with an array of comments :slightly_smiling_face: If not, you'll see an error description.
![image](https://user-images.githubusercontent.com/381122/170580520-5c7fdd3f-87d6-4af9-b2c7-6c0cd085401b.png)
1. Copy the entire result into a new file locally and save it as **comments.json**.

## Writing the Node app

First, if you're new to Node, check out my tutorial Getting Started with NodeJS. Then come back here.

Create a new file and name it **comments-reader.js**. We'll use JavaScript to:

1. Read the contents of the file **comments.json.**
2. Convert the contents into a JSON object.
3. Loop through the data to print the actual comments in our terminal.

```javascript
'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('comments.json');
let data = JSON.parse(rawdata);

for (let i in data.comments)
{
	console.log(`${ [i] } => ${ data.comments[i].content } `);
}
```

Now, let's run this application. Open your terminal in the same directory as these two files and run

```
node comments-reader.js
```

You should see a gratifying list of numbered comments.
![image](https://user-images.githubusercontent.com/381122/170583537-8f2908f6-0dd8-44e1-ae48-fbcf9ffd8457.png)

## Next steps

Next, we'll get a little fancy and add some more helpful information. Let me think about my client first to identify what is "helpful". My client, although requesting that my team use this spreadsheet, refuses to actually look at it. So sheet names (tabs) and column names will have no real value without context. My client wants to know, "if I go to page X, what's different"?

So let's tweak our app to display a statement:

_On the beta site **[Title]** page, the **[Column name]** is different from the existing site. **[Comment content]**_

which should translate to:

_On the beta site **Understanding Resources** page, the **Header** is different from the existing site. **The navigation links on the beta site are all on one line.**_

We'll also want to filter comments to avoid repeating the same comment that applied to multiple rows.

Come back for the next article in this series where we'll tackle this output.

## Conclusion

Will I ever use this application again? Probably not. Would this time have been better spent actually fixing bugs intstead of formatting them into a format the client will actually read. Sure. But the skill of using code to automate ridiculous tasks is timeless.
