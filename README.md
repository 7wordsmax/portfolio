# Portfolio Site

A simple, maintainable portfolio built with vanilla HTML, CSS, and JavaScript.

## Structure

```
portfolio/
├── index.html          # Home page
├── about.html          # About page
├── work.html           # Work/projects page
├── css/
│   └── styles.css      # All styling
├── js/
│   └── gallery.js      # Gallery rendering logic
├── data/
│   └── projects.js     # Single source of truth for all projects
└── images/             # Add your project images here
```

## How It Works

1. **Add projects** by editing `data/projects.js`
2. **Gallery automatically updates** on all pages that include the gallery script
3. **No build step needed** — just open the HTML files in your browser

## Adding a New Project

Edit `data/projects.js` and add a new object to the `projects` array:

```javascript
{
    id: 4,
    title: "My New Project",
    description: "What this project does.",
    image: "images/project-4.jpg",
    link: "https://example.com",
    tags: ["react", "web design"]
}
```

Save the file, and the gallery will update everywhere it appears.

## Customizing

- Edit `css/styles.css` to change colors, fonts, and layout
- Edit the HTML files to add more content or sections
- Update `data/projects.js` to manage all your projects from one place

## Deploying to GitHub Pages

1. Create a repository on GitHub (e.g., `portfolio`)
2. Push this folder to GitHub
3. Go to Settings → Pages and select "Deploy from a branch"
4. Your site will be live at `https://yourusername.github.io/portfolio`

## Next Steps

- Add your project images to the `images/` folder
- Fill in the about page with your bio
- Update the hero section with your tagline
- Customize the color scheme in `css/styles.css`
