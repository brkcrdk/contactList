
#### What is this?

This app goes to x webpage and search through given cities details and collects contact informations and creates excel file with those infomations.

#### How it works?

Firstly, x webpage obvioulsy dont let you crawl. To accomplish this, instead of adding informations with html elements they used images. This way you cant crawl images. To get around this we will take that image and use tesseract.js to get text from image.

NOTE: x is some random webpage that i keep secret for obvious reasons.

#### Steps:

* [x] Go to page and collect pages that matches given country names.
* [x] Collect city names from countries.
* [x] Test getting otel details with one city.
* [ ] Get all available otels details.