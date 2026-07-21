# Now I See | From God 2 U Ministries — Web & Bookstore Platform

Welcome to the **Now I See | From God 2 U Ministries** website and bookstore application! This document provides clear, step-by-step instructions on how to easily update the **Author Image**, **Book Cover Images**, **Metadata Title**, and **Every Product Image** directly on GitHub using just your web browser.

---

## 📖 Table of Contents
1. [How to Update Website Title & Metadata](#1-how-to-update-website-title--metadata)
2. [How to Update the Author Photo](#2-how-to-update-the-author-photo)
3. [How to Update the Book Cover Image](#3-how-to-update-the-book-cover-image)
4. [How to Update All Product Images in the Store](#4-how-to-update-all-product-images-in-the-store)
5. [How to Update Product Prices, Titles, and Descriptions](#5-how-to-update-product-prices-titles-and-descriptions)
6. [Quick Reference Guide for Store Files](#6-quick-reference-guide-for-store-files)

---

## 1. How to Update Website Title & Metadata

When the site is live, the browser tab title and search metadata display the ministry name: **Now I See | From God 2 U Ministries**.

If you ever want to change this:

1. **Browser Tab Title**:
   - Navigate to **`index.html`** on GitHub.
   - Click the **Pencil icon** (Edit this file).
   - Change line 6:
     ```html
     <title>Now I See | From God 2 U Ministries</title>
     ```
   - Click **Commit changes**.

2. **Metadata Name & Description**:
   - Navigate to **`metadata.json`** on GitHub.
   - Click the **Pencil icon** (Edit this file).
   - Update the `"name"` or `"description"` fields:
     ```json
     {
       "name": "Now I See | From God 2 U Ministries",
       "description": "The official bookstore and memoir hub for 'Now I See' by Toni ME Taylor - From God 2 U Ministries."
     }
     ```
   - Click **Commit changes**.

---

## 2. How to Update the Author Photo

The author photo (Toni ME Taylor) is displayed in the **"Meet the Author"** section.

### 🌟 Easy Method: Overwrite the Image File on GitHub
1. Prepare your new author picture on your computer and name the file **`author_photo.jpg`**.
2. Go to your repository on GitHub.com and navigate to:
   📂 **`src`** ➔ **`assets`** ➔ **`images`**
3. Click **Add file** in the top right ➔ **Upload files**.
4. Drag and drop your **`author_photo.jpg`** file into the box.
5. Scroll down and click **Commit changes**.
6. **That's it!** Because the code already points to `src/assets/images/author_photo.jpg`, the website will automatically display your new picture!

---

## 3. How to Update the Book Cover Image

The 3D interactive book mockup on the homepage hero section and the main product listings use the main book cover image.

### 🌟 Easy Method: Overwrite the Cover File on GitHub
1. Prepare your new book cover image on your computer and name the file **`book_cover.jpg`**.
2. Go to your repository on GitHub.com and navigate to:
   📂 **`src`** ➔ **`assets`** ➔ **`images`**
3. Click **Add file** ➔ **Upload files**.
4. Drag and drop your **`book_cover.jpg`** into the box.
5. Click **Commit changes**.
6. Both the 3D book cover showcase and the main book products in the store will update immediately!

---

## 4. How to Update All Product Images in the Store

All store products are defined in:
👉 **`src/data.ts`**

You have two simple options for attaching images to any product in your store:

### 🚀 Option A: Using Direct Web Image URLs or GitHub Raw Links (No code imports needed!)
If you have an image hosted online (or uploaded to GitHub), you can paste its URL directly into the product.

#### Step 1: Upload your image file to GitHub
1. Go to **`src/assets/images/`** on GitHub.
2. Click **Add file** ➔ **Upload files**, drag your product photo (e.g., `haitian_creole_bible.jpg`), and click **Commit changes**.

#### Step 2: Get the "Raw Link" of the uploaded image
1. Click on the uploaded image file in GitHub (`src/assets/images/haitian_creole_bible.jpg`).
2. Click the **"Raw"** button (or **Download** button) near the top right of the image preview.
3. Copy the URL from your browser address bar. It looks like:
   `https://raw.githubusercontent.com/YourUsername/YourRepository/main/src/assets/images/haitian_creole_bible.jpg`

#### Step 3: Paste the URL into `src/data.ts`
1. Go to **`src/data.ts`** on GitHub and click the **Pencil icon** (Edit).
2. Find the product you want to change (use `Ctrl + F` or `Cmd + F` to search for the product name).
3. Replace the `image:` value with your copied link:
   ```typescript
   {
     id: 'haitian-creole-bible-standard',
     title: 'Haitian Creole Bible (La Bib La) — Standard Hardcover',
     price: 14.99,
     category: 'Haitian Creole Bibles',
     image: 'https://raw.githubusercontent.com/YourUsername/YourRepository/main/src/assets/images/haitian_creole_bible.jpg',
     // ...
   }
   ```
4. Click **Commit changes**.

---

### 🛠️ Option B: Importing Asset Files inside `src/data.ts`
If you prefer bundling local images directly into the website's build:

1. Upload your image (e.g., `esv_study_bible.jpg`) to **`src/assets/images/`**.
2. Edit **`src/data.ts`** on GitHub.
3. At the top of `src/data.ts`, add an import line giving your image a unique nickname:
   ```typescript
   import esvStudyBibleImg from './assets/images/esv_study_bible.jpg';
   ```
4. Scroll down to the product in `src/data.ts` and set `image:` to your nickname (**without single quotes**):
   ```typescript
   image: esvStudyBibleImg,
   ```
5. Click **Commit changes**.

---

## 5. How to Update Product Prices, Titles, and Descriptions

To change product information:

1. Open **`src/data.ts`** on GitHub and click the **Pencil icon**.
2. Find the product block:
   ```typescript
   {
     id: 'now-i-see-hardcover',
     title: 'Now I See — Hardcover Edition',
     price: 24.99, // <-- Change price here (do not add dollar sign $)
     category: 'Books',
     image: coverImg,
     description: 'The premium hardcover edition of Toni ME Taylor’s spiritual memoir.', // <-- Change text here
     features: [
       'Gold foil display highlights',
       'Elegant cream-colored archival pages',
       'Durable library-quality binding'
     ],
     inStock: true
   }
   ```
3. Click **Commit changes** at the bottom of the page when done.

---

## 6. Quick Reference Guide for Store Files

- **Website Header & Browser Title**: `/index.html` (Line 6)
- **Ministry App Metadata**: `/metadata.json`
- **Author Photo**: `/src/assets/images/author_photo.jpg` (Used in `/src/components/MeetAuthor.tsx`)
- **Book Cover Image**: `/src/assets/images/book_cover.jpg` (Used in `/src/components/BookMockup.tsx` & `/src/data.ts`)
- **Bookstore Catalog Products**: `/src/data.ts`

---

💡 **Need Help?**
If you run into any build or formatting errors, ensure that every product block in `src/data.ts` is separated by a comma `,` and that all single quotes `'` and curly braces `{}` are properly closed. God bless!
