
#### What is this?

This app goes to x webpage and search through given cities details and collects contact informations and creates excel file with those infomations.

#### How it works?

Firstly, x webpage obvioulsy dont let you crawl. To accomplish this, instead of adding informations with html elements they used images. This way you cant crawl images. To get around this we will take that image and use tesseract.js to get text from image.

NOTE: x is some random webpage that i keep secret for obvious reasons.

#### Steps:

* [x] Go to page and collect pages that matches given country names.
* [x] Collect city names from countries.
* [x] Test getting all otels available with one city.
* [x] Test getting otel informations with one otel.
* [x] Test getting text from images with taken img.
* [x] Test getting text from base64 string. NOTE: Didn't have to use it.
* [x] Instead of converting image and text seperately, get text from image in one go.
* [x] Delete images after took text from it.
* [x] Fix getCityLinks returning nodeList instead of array of city url strings.
* [x] Fix getOtelLinks returning nodeList instead of array of city url strings.
* [x] Get all available otels details.
* [x] Convert data into xlsx file
* [x] Instead of returning text, return info object from getOtelDetail function
* [x] Take email and phone numbers by regexp and return more beautiful object
* [x] Convert all informations into excel file.

### V2 Goal: Instead of getting one city otel contacts, get all available otel informations
#### V2 Steps:
* [x] Firstly, we have to know all available city names. For that we have to scrape through index to get all available ones.
* [ ] Our function works one city at a time, so it has to get city name as parameter.
* [ ] It should creates new page on start, after getting informations should remove that page on close.