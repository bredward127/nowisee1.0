# Now I See | From God 2 U Ministries — Web & Bookstore Platform

Welcome to the **Now I See | From God 2 U Ministries** website and bookstore application! This document provides clear, step-by-step instructions on how to easily update the **Author Image**, **Book Cover Images**, **Metadata Title**, and **Every Product Image** directly on GitHub using just your web browser.

---

## 📖 Table of Contents
1. [How to Update Website Title & Metadata](#1-how-to-update-website-title--metadata)
2. [How to Update the Author Photo](#2-how-to-update-the-author-photo)
3. [How to Update the Book Cover Image & Bottom Footer Thumbnail](#3-how-to-update-the-book-cover-image--bottom-footer-thumbnail)
4. [How to Add or Update PDF Study Guides & Store Products](#4-how-to-add-or-update-pdf-study-guides--store-products)
5. [How to Update All Product Images in the Store](#5-how-to-update-all-product-images-in-the-store)
6. [How to Update Product Prices, Titles, and Descriptions](#6-how-to-update-product-prices-titles-and-descriptions)
7. [Quick Reference Guide for Store Files](#7-quick-reference-guide-for-store-files)

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

## 3. How to Update the Book Cover Image & Bottom Footer Thumbnail

The book cover image appears in **three places** across the website:
1. The **3D interactive book mockup** on the homepage hero section.
2. The **main book product listings** in the bookstore.
3. The **small book thumbnail icon** inside the sticky floating bottom bar that appears at the bottom of the screen when scrolling on mobile and tablet devices (`/src/components/StickyCTA.tsx`).

### 🌟 Easy Method: Overwrite the Cover File on GitHub
1. Prepare your new book cover image on your computer and name the file **`book_cover.jpg`**.
2. Go to your repository on GitHub.com and navigate to:
   📂 **`src`** ➔ **`assets`** ➔ **`images`**
3. Click **Add file** ➔ **Upload files**.
4. Drag and drop your **`book_cover.jpg`** into the box.
5. Click **Commit changes**.
6. **All three locations** (3D showcase, store products, and the little bottom scrolling footer bar thumbnail) will update automatically!

---

## 4. How to Add or Update PDF Study Guides & Store Products

The bookstore includes a dedicated **PDF Study Guides** category with digital companions, workbooks, prayer journals, and curriculum guides.

All store products are defined in:
👉 **`src/data.ts`**

### To Add or Edit a PDF Study Guide in `src/data.ts`:
1. Open **`src/data.ts`** on GitHub and click the **Pencil icon** (Edit).
2. Scroll to the bottom of the file under `CATEGORY 9: PDF Study Guides`.
3. Add or edit a product block like this:
   ```typescript
   {
     id: 'pdf-my-new-study-guide',
     title: 'My Custom Bible Study Guide (PDF)',
     price: 6.99,
     category: 'PDF Study Guides', // <-- Keeps it in the PDF Study Guides tab
     image: 'https://raw.githubusercontent.com/YourUsername/YourRepository/main/src/assets/images/my_pdf_cover.jpg',
     description: 'A custom printable study guide for small groups and quiet time.',
     features: [
       'Instant digital PDF download',
       'Includes reflection questions & prayer prompts',
       'Printable 30-page workbook layout'
     ],
     inStock: true
   }
   ```
4. Click **Commit changes**.

---

## 5. How to Update All Product Images in the Store

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

---

## 8. AliExpress API Response Data Format

When testing the AliExpress API integration or modifying how products are pulled into the store, you can expect the API to return data in the following JSON format:

```json
{
  "success": true,
  "message": "AliExpress Connection Successful!",
  "promos_count": 124,
  "sample_data": [
    {
      "promo_name": "AEB_ ComputerAccessories_EG",
      "promo_desc": "AEB_ ComputerAccessories_EG",
      "product_num": 7773
    },
    {
      "promo_name": "AEB_ PhoneAccessories_EG",
      "promo_desc": "AEB_ PhoneAccessories_EG",
      "product_num": 8049
    },
    {
      "promo_name": "AEB_ SummerProducts_EG",
      "promo_desc": "AEB_ SummerProducts_EG",
      "product_num": 3033
    }
  ]
}
```

This format ensures that product listings are structured correctly and can flow naturally into the storefront components. Use this as a reference if you plan to integrate dynamic AliExpress pulling in the future!

---

## 9. How to Add and Host Digital Downloads (eBooks, PDFs)

If you are selling digital products (like PDF study guides, devotionals, or printables), the store supports an `isDigital: true` and `downloadUrl` property in `src/data.ts`.

Since dropshipping services (like AliExpress) and physical product fulfillment do not handle digital delivery, you must host these files yourself.

### Where to Host Digital Files for Free
To make files downloadable without paying for server storage, here are the best free options:

1. **Google Drive (Recommended)**
   - Upload your PDF to Google Drive.
   - Right-click the file -> **Share** -> **Share**.
   - Under "General access", change it to **Anyone with the link**.
   - Copy the link. 
   - *Tip*: To make it a direct download link, change `https://drive.google.com/file/d/FILE_ID/view?usp=sharing` to `https://drive.google.com/uc?export=download&id=FILE_ID`.

2. **GitHub Releases**
   - In your GitHub repository, go to **Releases** on the right side.
   - Create a new release and attach your PDFs to the "Assets" section.
   - Once published, right-click the file and copy the direct link.

3. **Dropbox**
   - Upload your PDF to Dropbox.
   - Click "Share" and "Copy Link".
   - To make it a direct download, change the end of the link from `?dl=0` to `?dl=1`.

### How to Link Your Hosted Files in the Store
Once you have your direct download link, open **`src/data.ts`** in GitHub, find the digital product, and add the `downloadUrl` property:

```typescript
{
  id: '30-day-prayer-challenge-guide-pdf',
  title: '30-Day Prayer Challenge Guide (PDF)',
  price: 4.99,
  category: 'Digital Guides',
  image: '...',
  description: 'A comprehensive 30-day prayer guide...',
  features: [
    'Instant digital PDF download'
  ],
  inStock: true,
  isDigital: true, // Marks it as a digital product
  downloadUrl: 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID' // Paste your link here
}
```

This will allow users to access the file once they have purchased it. Ensure that your checkout flow or order confirmation page is wired to provide this link upon a successful purchase!

---

## 10. How to Add or Update the Free Audio Snippet

If you want to feature a free audio snippet (for example, an excerpt read by your grandma), you can easily upload and update the audio file without needing to change any code!

### Step 1: Prepare the Audio File
1. Record your audio and make sure it is saved as an **MP3** file.
2. Name the file **exactly** like this: `free_snippet.mp3`

### Step 2: Upload the File to GitHub
The easiest place to store files like this so they load automatically is the **`public`** folder.

1. Go to your repository on GitHub.com and navigate to the 📂 **`public`** folder.
2. Click the **Add file** button in the top right corner, then choose **Upload files**.
3. Drag and drop your `free_snippet.mp3` file into the box.
4. Scroll down and click the green **Commit changes** button.

*(Note: Whenever you want to change the audio later, just repeat these steps. Uploading a new file named `free_snippet.mp3` will safely overwrite the old one and automatically update the website!)*

### Step 3: Adding the Audio Player to the Site
If you want to add an audio player so visitors can listen to it on the page, you can use a simple HTML audio player in your components (like in `src/App.tsx` or the Book section). 

Because the file is in the `public` folder, you can reference it simply by using `/free_snippet.mp3`:

```tsx
<div className="mt-6 p-4 bg-gray-50 rounded-lg text-center">
  <h3 className="text-lg font-semibold text-gray-800 mb-2">Listen to a Free Snippet</h3>
  <audio controls className="w-full max-w-md mx-auto">
    <source src="/free_snippet.mp3" type="audio/mpeg" />
    Your browser does not support the audio element.
  </audio>
</div>
```
You can drop this snippet anywhere in your React code!

---

## 11. How to Bulk-Export Product IDs to a Spreadsheet

If you want to quickly gather a list of AliExpress Product IDs to feed into the store (without manually copying and pasting hundreds of URLs), here are the most efficient ways to build your spreadsheet:

### Method 1: Use a Free Chrome Extension (Easiest)
There are free Chrome extensions designed specifically for dropshippers that allow you to export AliExpress search results or category pages directly to a CSV/Excel file.
1. Install an extension like **AliScraper**, **Asify**, or **AliExpress Product Exporter**.
2. Go to AliExpress or the **AliExpress Dropshipping Center**.
3. Search for your niche (e.g., "Christian home decor").
4. Click the extension button to "Export to CSV".
5. The resulting spreadsheet will have a column for the **Product URL** or **Product ID**. (The ID is just the long number in the URL, e.g., `1005001234567890`).

### Method 2: AliExpress Dropshipping Center
If you have access to the AliExpress Dropshipping Center (DS Center):
1. Navigate to **Find Products to Sell**.
2. Filter by your criteria (e.g., ships from US, high sales volume, rating > 4.5).
3. While the DS Center itself doesn't have a native "Download CSV" button, pairing it with the Chrome extensions mentioned in Method 1 allows you to export the highly-curated winning products straight to a spreadsheet.

### Method 3: Grab the IDs from URLs
If you are curating manually into a Google Sheet, you only need the numbers from the URL. 
- Example URL: `https://www.aliexpress.com/item/1005006364595887.html`
- The Product ID is **1005006364595887**.
- You can paste full URLs into a Google Sheet and use a quick formula to extract just the number:
  `=REGEXEXTRACT(A2, "/item/(\d+)\.html")`

Once you have a spreadsheet with the titles, categories, and Product IDs, you can easily share that data (like you did with the PDF), and it can be bulk-imported directly into this store via the API!

### The Perfect Spreadsheet Format for Import
Technically, the API **only requires the Product ID** to fetch the images, cost, and stock status. However, for the script to build a beautiful store, we highly recommend your spreadsheet has these three columns:

1. **Product ID** (Required for the API)
2. **Title** (Highly Recommended) - AliExpress titles are notoriously long and spammy (e.g., *"2024 New Fashion Jesus Cross Pendant Titanium Steel..."*). Providing a clean, custom title in your spreadsheet makes your store look professional.
3. **Category** (Highly Recommended) - AliExpress categorizes things weirdly on their backend. Giving it a clean category (like "Jewelry & Accessories") ensures it goes to the exact right page on your store.

If you just give us a list of Product IDs, we can still pull them, but it will use the messy AliExpress titles by default!
