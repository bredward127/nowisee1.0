# Now I See — Bookstore & Memoir Platform

Welcome to the **Now I See** bookstore and memoir web application! This document provides complete, 100% detailed instructions on how to easily update the product images, change descriptions, prices, or add new items to your bookstore catalog.

---

## 📖 Table of Contents
1. [Where Bookstore Products are Defined](#1-where-bookstore-products-are-defined)
2. [How to Update Product Images (Step-by-Step)](#2-how-to-update-product-images-step-by-step)
   - [Method A: Using Online Web URLs (Easiest & Recommended)](#method-a-using-online-web-urls-easiest--recommended)
   - [Method B: Using Your Own Local Image Files](#method-b-using-your-own-local-image-files)
3. [How to Update Prices, Titles, or Descriptions](#3-how-to-update-prices-titles-or-descriptions)
4. [How to Add New Products to the Store](#4-how-to-add-new-products-to-the-store)

---

## 1. Where Bookstore Products are Defined

All bookstore products are stored in a single, well-organized file:
👉 **`/src/data.ts`**

This file contains an array named `PRODUCTS` that lists all 50+ of your beautiful, faith-centered products. Each product is a structured block of information that looks like this:

```typescript
{
  id: 'prod-1',
  title: 'Scripture Verse Soy Candle',
  price: 17.31,
  category: 'Candles',
  image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80',
  description: 'Hand-poured soy candle in a clear jar printed with a rotating scripture verse...',
  features: [
    'Hand-poured 100% natural soy wax',
    'Soothing clean-burning cotton wick',
    'Rotating selection of inspiring scripture verses',
    '40+ hours of tranquil burn time'
  ],
  inStock: true
}
```

---

## 2. How to Update Product Images (Step-by-Step)

There are two highly effective methods for updating the images of your products.

### Method A: Using Online Web URLs (Easiest & Recommended)
If your product images are already uploaded to a website, an e-commerce platform (like Shopify, WooCommerce, Amazon), or an image host (like Imgur, Cloudinary, or postimg), you can use their direct links immediately!

1. **Find your image URL online**:
   - Go to the webpage containing your product image.
   - **Right-click** on the image and select **"Copy Image Address"** (or "Copy Image Link").
   - The URL should look something like: `https://example.com/images/my-necklace.jpg`.

2. **Open `/src/data.ts`**:
   - Locate the product you want to update (e.g., `"Cross Pendant Necklace, Silver-Plated"`).

3. **Replace the `image` string**:
   - Change the existing image URL to your new copied URL.
   ```typescript
   // BEFORE:
   image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=600&q=80',

   // AFTER:
   image: 'https://yourwebsite.com/images/my-beautiful-necklace.jpg',
   ```

4. **Save and Build**:
   - Save the file. Your online image will load instantly in the bookstore!

---

### Method B: Using Your Own Local Image Files
If you have image files saved on your computer (e.g., `necklace.jpg`, `mug.png`), you can place them directly into the website's project folder.

1. **Move your image files to the project folder**:
   - Place your new product image files inside the directory:
     📂 **`/src/assets/images/`**
   - Give them simple, lowercase, and unique filenames (e.g., `silver_necklace.jpg` or `prayer_candle.png`).

2. **Open `/src/data.ts` and import your image**:
   - Scroll to the very top of `/src/data.ts` where you see other imports.
   - Add a line to import your new image file. Give it a unique nickname (e.g., `silverNecklaceImg`).
   ```typescript
   // At the top of /src/data.ts:
   import coverImg from './assets/images/now_i_see_cover_1784594781418.jpg';
   import silverNecklaceImg from './assets/images/silver_necklace.jpg'; // <-- Your new import!
   ```

3. **Assign the imported image to the product**:
   - Find the specific product inside the list and replace the `image` property with your new nickname variable (without quotes).
   ```typescript
   // Find the necklace product in /src/data.ts:
   {
     id: 'prod-4',
     title: 'Cross Pendant Necklace, Silver-Plated',
     price: 19.35,
     category: 'Jewelry',
     image: silverNecklaceImg, // <-- Use the nickname variable here (no quotes!)
     description: 'Classic cross pendant on an 18-inch chain...',
     // ...
   }
   ```

4. **Save and Build**:
   - Save the file. The build system will automatically optimize, package, and display your local image.

---

## 3. How to Update Prices, Titles, or Descriptions

Updating product details takes only a few seconds!

1. Open **`/src/data.ts`**.
2. Find the product card you wish to modify.
3. Edit the properties:
   - **`title`**: Change the text in quotes to rename your product.
   - **`price`**: Change the number (do *not* include a dollar sign `$`).
   - **`description`**: Update the text describing your product.
   - **`features`**: Add or remove items inside the square brackets `[...]` to update the bullet points on the product details page.

**Example of changing a price and description:**
```typescript
{
  id: 'prod-1',
  title: 'Scripture Verse Soy Candle',
  price: 19.99, // <-- Updated from 17.31
  category: 'Candles',
  image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=600&q=80',
  description: 'Our signature organic lavender and vanilla soy candle hand-poured in the USA.', // <-- Updated description
  // ...
}
```

---

## 4. How to Add New Products to the Store

To add a completely new product:

1. Open **`/src/data.ts`**.
2. Scroll to the very end of the `PRODUCTS` list.
3. Paste a new product block inside the array, making sure it has a unique `id` (e.g., `prod-51`):

```typescript
  {
    id: 'prod-51',
    title: 'Your Brand New Faith Gift',
    price: 14.99,
    category: 'Keepsakes',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=600&q=80',
    description: 'A detailed description of your new beautiful faith-centered product item.',
    features: [
      'High-quality hand selection',
      'Encouraging scriptural theme'
    ],
    inStock: true
  }
```

4. The store category filters will automatically update to include any new category names you use!

---

💡 **Need Help?**
If you run into any formatting or compilation issues, verify that every product block is separated by a comma `,` and that all curly braces `{}` and square brackets `[]` are properly closed. Happy publishing!
