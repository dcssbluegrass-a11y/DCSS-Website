# DCSS Website - Image Update Instructions

This guide explains how to add, update, or remove images on the Deer Creek Sharp Shooters website.

---

## Overview

The website uses images hosted on Google Drive. When you want to change an image, you need to:
1. Upload the new image to Google Drive and get its link
2. Update the image reference in the code
3. Build and push the changes to make them live

---

## Step 1: Prepare Your Google Drive Image

### Upload to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Upload your image to the DCSS media folder

### Get the Shareable Link
1. Right-click on the image
2. Click **Share**
3. Change access to **"Anyone with the link"** can view
4. Click **Copy link**

### Extract the File ID
Your link will look like this:
```
https://drive.google.com/file/d/1ABC123DEF456XYZ/view?usp=sharing
```

The **File ID** is the long string between `/d/` and `/view`:
```
1ABC123DEF456XYZ
```

---

## Step 2: Update the Code

### Open the Images File
1. In Replit, open: `client/src/lib/images.ts`

### Find the Image You Want to Change

The file contains different sections:

**Main Page Images:**
- `heroBackground` - The large background image on the homepage
- `highlightsImage` - The "Festival Tested" section on homepage
- `aboutBandPhoto` - The photo on the About page
- `contactBandPhoto` - The photo on the Contact page
- `logoText` - The band logo

**EPK Press Photos:**
- `pressPhoto1` through `pressPhoto17` - Gallery photos on EPK page

**EPK Logos:**
- `logo1` through `logo4` - Downloadable logos on EPK page

### Update the Image URL
Replace the File ID in the URL. For example, change:
```javascript
heroBackground: "https://lh3.googleusercontent.com/d/OLD_FILE_ID",
```
To:
```javascript
heroBackground: "https://lh3.googleusercontent.com/d/YOUR_NEW_FILE_ID",
```

### Adding New EPK Photos
To add more photos to the EPK gallery:

1. Add a new line in `images.ts`:
```javascript
pressPhoto18: "https://lh3.googleusercontent.com/d/YOUR_FILE_ID",
```

2. Open `client/src/pages/EPK.tsx`

3. Find the `pressPhotos` array and add:
```javascript
{ url: googleDriveImages.pressPhoto18, name: 'DCSS_Press_Photo_18.jpg' },
```

### Removing EPK Photos
To remove a photo from the EPK gallery:

1. Delete the line from the `pressPhotos` array in `EPK.tsx`
2. Optionally remove the unused URL from `images.ts`

---

## Step 3: Build the Website

1. Open the **Shell** tab in Replit (bottom panel)

2. Run the build command:
```
npm run build
```

3. Copy the built files to the root:
```
cp dist/public/index.html index.html && cp -r dist/public/assets/* assets/
```

---

## Step 4: Push to GitHub (Deploy)

### Using the Git Tab (Recommended)
1. Click the **Git** tab in the left sidebar
2. Review your changes
3. Click **Commit** and add a message like "Update images"
4. Click **Push**

### Using Shell Commands (Alternative)
```
git add index.html assets/ client/src/lib/images.ts
git commit -m "Update images"
git push origin main
```

---

## Step 5: Verify the Changes

1. Wait about 1 minute for Porkbun to update
2. Go to your website: **dcssbluegrass.com**
3. Do a **hard refresh**:
   - Windows: Ctrl + Shift + R
   - Mac: Cmd + Shift + R
4. Check that the new images appear correctly

---

## Quick Reference: Image Locations

| Image | File | What It Affects |
|-------|------|-----------------|
| `heroBackground` | images.ts | Homepage main background |
| `highlightsImage` | images.ts | Homepage "Festival Tested" section |
| `aboutBandPhoto` | images.ts | About page band photo |
| `contactBandPhoto` | images.ts | Contact page band photo |
| `logoText` | images.ts | Footer logo |
| `pressPhoto1-17` | images.ts + EPK.tsx | EPK gallery and ZIP download |
| `logo1-4` | images.ts + EPK.tsx | EPK logo ZIP download |

---

## Troubleshooting

### Image Not Showing
- Make sure the Google Drive sharing is set to "Anyone with the link"
- Check that you copied the correct File ID
- Try a hard refresh in your browser

### Changes Not Appearing on Live Site
- Make sure you ran `npm run build`
- Make sure you copied the files to the root folder
- Make sure you pushed to GitHub
- Wait a minute and do a hard refresh

### Git Push Errors
- Use the Git tab in Replit (it handles authentication automatically)
- Make sure you committed your changes before pushing

---

## Need Help?

Contact your web developer or refer to this document for step-by-step guidance.
