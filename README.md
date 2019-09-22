# resume-html
**Generate a beautiful Résumé using HTML and CSS.**

## Usage

1. **Prerequisites**: You need to install [node.js](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) (included in node installer).
1. Clone the repository.

   ```
   git clone https://github.com/t4nuj/resume-html.git
   ```
1. Install dependencies

   ```
   npm install
   ```
   Note: Chromium (~108 MB) is a dependency for using puppeteer, and rendering the Résumé.
1. View the Résumé in browser.

   ```
   node view-resume.js
   ```
1. Edit your Résumé

   Structure of the repo:
   ```
   .
   ├── content
   │   ├── achievements.html
   │   ├── education.html
   │   ├── experience.html
   │   ├── page.html
   │   ├── projects.html
   │   ├── publications.html
   │   └── skills.html
   ├── css
   │   ├── paper.css
   │   └── resume.css
   ├── generate-resume-pdf.js
   ├── index.html
   ├── js
   │   └── load-resume.js
   ├── package-lock.json
   ├── package.json
   ├── resume.pdf
   └── view-resume.js
   ```

   * All the styles resides in `resume.css` file.
   * The `content` directory has various sections and the main `page.html`.
   * `load-resume.js` is responsible for loading the `page.html` file and all the sections. You can play around with the order of the sections using this file.

1. Once you are happy with it generate a PDF

   ```
   node generate-resume-pdf.js
   ```
1. Check out a 1-column format in the examples directory. You can view it by pointing to `http://localhost:8000/examples/1-column`

## Motivation for making this Repository
All the CS nerds (including me) were using LaTeX to generate their Résumés. It had its benefits: 

* It has the best in class line-breaking algorithm (developed by Donald Knuth himself).
* You can keep sections in separate files.
* You can separate out your content from formatting,
* and also use version control for your resume. 

One day, I decided to modify the [Awesome-CV](https://github.com/posquit0/Awesome-CV) template into a 2-column format, but I found no way of doing it in LaTeX which would give me as much flexibility as using CSS+HTML.  

Hence, this repository was born.

Also, I had not clue what `Underfull \hbox (badness 10000)` meant.

Using web technologies does not mean you need to let go of the good things about using LaTeX:

* You can still use version control with HTML+CSS.
* You can divide your content into sections using a little JS magic.
* CSS will ensure that content is separate from formatting.
* You may not get the best in class line-breaking algorithm, but it will be good enough.
