# Project Oba
Een project die de "Mijn Oba" omgeving uitbreidt door middel van een reserveringspagina voor studenten om te studeren. 

## Inhoudsopgave 


- Beschrijving
- Kenmerken
- Bronnen

## Beschrijving
Dit beginnend project bestaat uit 1 HTML-bestand, 1 CSS-bestand en 1 Javascript-bestand.
Deze versie is te zien in Set-up 1, set-up2 wordt de uiteindelijke realisatie.

![Project Oba site](project-oba\images\oba.jpg)

## Kenmerken

De website is gebouwd in HTML, CSS en een klein beetje javascript.

### Structuur

De structuur bevat 2 nav bars, een linkbar (de breadcrumbs) en de tabel, javascript is gebruikt om tijd te laten zien bij on-click.
!(project-oba\images\timetable.jpg)

### nav bar 1 - de hoogste:
><div class="up-menu">
      <ul id="horizontal-list-2">
        <li>a→A |</li>
        <li>Hoog contrast |</li>
        <li>Zet voorlezen aan 🔈|</li>
        <li>&#x1F1F3; &#x1F1F1;</li>
      </ul>
    </div>
 >.up-menu {
  display: flex;
  float: right;
  height: 8em;
  border-bottom: solid 1px #000000;
}

### nav bar 2 - Main Menu:

> <div class="menu-outer">
          <div class="table">
            <ul id="horizontal-list">
              <li>
                <div class="header_nav">
                  <button id="mijn-bibliotheek">
                    <a href="#">Mijn bibliotheek</a>
                  </button>
                </div>
              </li>
              <li>
                <div class="header_nav">
                  <button id="persoonlijke-gegevens">
                    <a href="#">Persoonlijke gegevens</a>
                  </button>
                </div>
              </li>
              <li>
                <div class="header_nav">
                  <button id="contact"><a href="#">Contact</a></button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
  > ul#horizontal-list-2 li {
  color: black;
  list-style: none;
  display: inline;
  font-family: Arial, Helvetica, sans-serif;
}
  > #menu-outer {
  height: 84px;
  padding-bottom: 200px;
}

### Javascript

> console.log("up")

document
  .querySelector(".free-availability-on")
  .addEventListener("click", () => {
    document.querySelector(".time-table").classList.toggle("time-table-active")
  })

document.querySelector(".early").addEventListener("click", () => {
  document.querySelector(".next").classList.toggle("next-active")
})

(Credit where it's due; Ju5tu5 on github)

## Bronnen
Voor oplossingen en informatie over HTML, CSS en JS heb ik gebruik gemaakt van de volgende websites:
- [stackoverflow.com](https://stackoverflow.com/)
- [css-tricks.com](https://css-tricks.com/)
- [MDN web docs](https://developer.mozilla.org/en-US/).
- [Markdown tips] (https://www.markdownguide.org/basic-syntax/)

## Live Preview

https://lunarphoenix-judith.github.io/project-oba/
