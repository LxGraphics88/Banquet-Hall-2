# Old Town Banquet Hall Website

An elegant and modern single-page website for the Old Town Banquet Hall, designed with a Navy Blue and Gold color scheme.

## 🚀 Quick Deployment

This project is structured for easy deployment on **GitHub Pages**.

1.  **Create a New Repository:** On GitHub, create a new repository (e.g., `old-town-banquet-hall`).
2.  **Upload Files:** Upload the four files (`index.html`, `style.css`, `script.js`, and `README.md`) to the root of your new repository.
3.  **Enable GitHub Pages:**
    * Go to your repository's **Settings** tab.
    * Navigate to **Pages** on the left sidebar.
    * Under 'Build and deployment', select **Deploy from a branch**.
    * Select your primary branch (usually `main` or `master`) and the `/ (root)` folder.
    * Click **Save**.
4.  **Access Site:** Your site will be live at a URL like `https://[your-username].github.io/[repository-name]/` within a few minutes.

## 🎨 Customization Instructions

### 1. Color Scheme (`style.css`)

The core colors are defined using CSS variables for easy changes:

| Variable | Description | Current Value |
| :--- | :--- | :--- |
| `--color-navy` | Deep primary background color | `#001F3F` |
| `--color-gold` | Primary accent color (CTA, Headings) | `#FFD700` |
| `--color-light-gold` | Secondary accent color (Subtitles, Footer) | `#F0E68C` |

To change the scheme, simply update the hex codes in the `:root` block of `style.css`.

### 2. Fonts (`index.html` & `style.css`)

* **Hero Title (Elegant Cursive):**
    * **Font:** `Playfair Display` (set to `font-style: italic;` in CSS for the cursive-like elegance).
    * **To Change:** Update the font name in the `<link>` tag in `index.html` and the `.hero-title` selector in `style.css`.
* **Body & Headings (Modern):**
    * **Font:** `Cormorant Garamond`.
    * **To Change:** Update the font name in the `<link>` tag in `index.html` and the `body` selector in `style.css`.

### 3. Hero Background Image (`style.css`)

The current background is a placeholder. To add your own image:

1.  Add your image file (e.g., `hall-photo.jpg`) to the root of your repository.
2.  In `style.css`, update the `.hero` selector:
    ```css
    .hero {
        /* Replace 'hero-bg-placeholder.jpg' with your image file name */
        background: url('hall-photo.jpg') center/cover no-repeat;
        /* ... other styles ... */
    }
    ```

### 4. Content and Sections (`index.html`)

* **Navigation Links:** Edit the text and the `#id` attributes within the `<li>` tags in the `<nav>` element.
* **Services:** Modify the `<h3>` titles and `<p>` descriptions within the `<div class="card">` elements in the `<section id="services">`.
* **Gallery:** Replace the `div.gallery-placeholder` element with actual `<img>` tags for your hall photos, wrapped in a responsive grid container (requires additional CSS not included here).
* **Contact Form:** While the HTML form structure is present, remember that the form itself **will not send emails** without a server-side script or a third-party service (like Formspree or Netlify Forms).

---
## 

Would you like me to find a royalty-free image description you could use for the placeholder images (hero background and gallery)?