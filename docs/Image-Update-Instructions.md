# DCSS Website - Image Update Instructions

This guide explains how to update images on the Deer Creek Sharp Shooters website using Replit Agent.

---

## How It Works

You provide Google Drive image links in a chat prompt, and Replit Agent handles all the code changes, building, and deployment for you.

---

## Step 1: Prepare Your Images on Google Drive

### Upload Your Image
1. Go to [Google Drive](https://drive.google.com)
2. Upload your image to the DCSS media folder

### Make It Shareable
1. Right-click on the image
2. Click **Share**
3. Change access to **"Anyone with the link"** can view
4. Click **Copy link**

Your link will look like this:
```
https://drive.google.com/file/d/1ABC123DEF456XYZ/view?usp=sharing
```

---

## Step 2: Send a Chat Prompt

Copy one of the prompt templates below, fill in your Google Drive link(s), and send it in the Replit Agent chat.

---

## Prompt Templates

### Update the Homepage Hero Background
```
Update the homepage hero background image to this Google Drive link:
[paste your link here]
```

### Update the Homepage "Festival Tested" Section Image
```
Update the "Festival Tested" highlights section image on the homepage to this Google Drive link:
[paste your link here]
```

### Update the About Page Band Photo
```
Update the About page band photo to this Google Drive link:
[paste your link here]
```

### Update the Contact Page Band Photo
```
Update the Contact page band photo to this Google Drive link:
[paste your link here]
```

### Update the Footer Logo
```
Update the footer logo to this Google Drive link:
[paste your link here]
```

### Add New EPK Press Photos
```
Add these new press photos to the EPK gallery:
1. [paste Google Drive link]
2. [paste Google Drive link]
3. [paste Google Drive link]
```

### Replace All EPK Press Photos
```
Replace all EPK press photos with these Google Drive links:
1. [paste link] - filename: DCSS_Press_Photo_1.jpg
2. [paste link] - filename: DCSS_Press_Photo_2.jpg
3. [paste link] - filename: DCSS_Press_Photo_3.jpg
(continue for all photos)
```

### Update EPK Logos
```
Update the EPK downloadable logos to these Google Drive links:
1. [paste link] - filename: DCSS_Logo_1.png
2. [paste link] - filename: DCSS_Logo_2.png
```

### Update Multiple Images at Once
```
Update the following images:

Homepage hero background:
[paste link]

About page band photo:
[paste link]

Contact page band photo:
[paste link]
```

---

## Step 3: Deploy Changes

After the Agent makes the code changes, send this prompt:

```
Build the website and prepare it for deployment
```

Then use the Git tab in Replit to push your changes to GitHub. Porkbun will automatically update the live site within a minute.

---

## Quick Reference: What Each Image Controls

| Image Name | Where It Appears |
|------------|------------------|
| Hero background | Large background on homepage |
| Highlights/Festival image | "Festival Tested" section on homepage |
| About band photo | Main photo on About page |
| Contact band photo | Main photo on Contact page |
| Footer logo | Logo in the website footer |
| EPK press photos | Photo gallery on EPK page + downloadable ZIP |
| EPK logos | Downloadable logos ZIP on EPK page |

---

## Troubleshooting

### Image Not Showing
- Make sure Google Drive sharing is set to "Anyone with the link"
- Ask the Agent to check the image link is formatted correctly

### Changes Not on Live Site
- Make sure you pushed to GitHub using the Git tab
- Wait about 1 minute for Porkbun to update
- Do a hard refresh in your browser (Ctrl+Shift+R or Cmd+Shift+R)

---

## Example Prompt

Here's a complete example of updating multiple images:

```
Please update these website images:

1. Homepage hero background:
https://drive.google.com/file/d/1ABCxyz123/view?usp=sharing

2. About page band photo:
https://drive.google.com/file/d/1DEFabc456/view?usp=sharing

3. Add these new EPK press photos to the gallery:
https://drive.google.com/file/d/1GHIjkl789/view?usp=sharing
https://drive.google.com/file/d/1MNOpqr012/view?usp=sharing

Then build the site for deployment.
```

The Agent will handle extracting the file IDs, updating the code, and building the site.
