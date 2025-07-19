
# 🛒 GStore – A Frontend-Only E-Commerce Website

**GStore** is a responsive and visually appealing frontend e-commerce website built entirely with HTML and CSS. This project simulates the user interface of an online shopping platform, covering key components such as the homepage, shop interface, checkout process, login system, and category-specific pages.

This project is ideal for demonstrating frontend development skills, website structuring, and page-specific styling without JavaScript or backend integration.

---

## 📌 Table of Contents

-  Demo Preview  
-  Project Objective  
-  Features  
-  Site Map & Navigation  
-  Tech Stack  
-  Folder Structure  
-  License  

---

## 🔍 Demo Preview

Open the following file to start:
```bash
GStore/html_files/index.html
```

You can explore all the site pages by clicking on links from the homepage or typing the HTML file names directly in your browser path.

---

## 🎯 Project Objective

The goal of this project is to design and implement a **static online store** using only frontend technologies to simulate real-world online shopping flows. It emphasizes:

- Multi-category product navigation
- Minimal and intuitive design
- Functional page flow from browsing → checkout → success
- Modular code using clean folder separation

---

## 🚀 Features

- ✅ Homepage with hero sections and navigation links
- ✅ Shop interface with product display
- ✅ Category-specific product pages:
  - Electronics
  - Fashion
  - Stationery
  - Accessories
- ✅ User authentication simulation (login & account pages)
- ✅ Checkout and order confirmation (success page)
- ✅ Separate CSS for each HTML page to maintain design modularity
- ✅ Image-driven UI for engaging product layouts

---

## 🗺️ Site Map & Navigation

| Page Name         | File Path                            | Description                                |
|------------------|--------------------------------------|--------------------------------------------|
| Home             | `html_files/index.html`              | Entry point of the site                    |
| Shop             | `html_files/shop.html`               | Lists multiple product types               |
| Login            | `html_files/login.html`              | Simulated login page                       |
| Account          | `html_files/account.html`            | User details overview                      |
| Checkout         | `html_files/checkout.html`           | Shopping cart and payment section          |
| Order Success    | `html_files/success.html`            | Thank you page after checkout              |
| Fashion          | `html_files/fashion.html`            | Fashion category page                      |
| Electronics      | `html_files/electronics.html`        | Electronics category page                  |
| Stationery       | `html_files/stationery.html`         | Stationery category page                   |
| Accessories      | `html_files/acc.html`                | Accessories category page                  |

---

## 🛠️ Tech Stack

| Technology | Purpose                  |
|------------|--------------------------|
| **HTML5**  | Content structure         |
| **CSS3**   | Styling and layout design |
| **Images** | Product and background visuals |

No frameworks or libraries are used. The project is kept minimal for educational clarity and portability.

---

## 📁 Folder Structure

```
GStore/
│
├── css_files/
│   ├── index.css
│   ├── shop.css
│   ├── login.css
│   ├── account.css
│   ├── checkout.css
│   ├── success.css
│   └── shop_pages.css
│
├── html_files/
│   ├── index.html
│   ├── shop.html
│   ├── login.html
│   ├── account.html
│   ├── checkout.html
│   ├── success.html
│   ├── fashion.html
│   ├── electronics.html
│   └── stationery.html
│
├── img/
│   ├── backpack.jpg
│   ├── badges.jpg
│   ├── beige_tee.jpg
│   └── ... more product images
│
├── js_files/
│ ├── login.js
│ ├── account.js
│ ├── checkout.js
│ ├── shop_pages.js
│ └── success.js
```

---

## 🧠 JavaScript & Form Validation

This project leverages JavaScript for client-side interactivity and basic form validation.

### 🔐 Form Validations:
- `login.html`:  
  - `<form id="loginForm" onsubmit="handleLogin(event)">`  
  - Validates username and password locally.

- `checkout.html`:  
  - `<form id="checkoutForm" onsubmit="confirmPurchase(event)">`  
  - Ensures all required fields are filled before proceeding.

### 🧠 Major JS Functionalities:
- `login.js`: Handles login form logic.
- `checkout.js`: Handles order validation and displays a confirmation.
- `account.js`: Manages user account info and data.
- `shop_pages.js`: Populates product data and manages cart interactions.
- `success.js`: Displays success animations or text after purchase.

---

## 📄 License

This project is licensed for **personal and academic use only**. For commercial use, please contact the author.
