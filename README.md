# Arasaka Biomedical

A front-end concept for a prescription-delivery service. The site presents a sample medicine ordering interface, NHS ID input, and a Google Map showing a demonstration drone route.

> **Prototype notice:** This is a static demonstration website, not a real ordering, pharmacy, identity-verification, or delivery service. It does not process orders, verify NHS IDs, upload prescriptions, or store personal information.

## Features

- Arasaka Biomedical landing page with responsive layout
- Medicine category selector for over-the-counter and prescription medicines
- Basket/sidebar area for displaying order information
- NHS ID form with basic empty-field validation
- Google Maps view with a sample pharmacy-to-home route
- Responsive layout for smaller screens
- Separate example page at [`docs/page2.html`](docs/page2.html)

## Technologies

- HTML
- CSS
- JavaScript
- Google Maps JavaScript API

## Project structure

```text
docs/
├── index.html              # Main prototype page
├── index.css               # Layout and visual styling
├── index.js                # NHS ID form feedback
├── page2.html              # Additional example page
└── images/
    └── computer-retro.png  # Site icon and sidebar image
```

## Google Maps

The main page loads the Google Maps JavaScript API and uses placeholder coordinates to draw a direct demonstration route. If you reuse this project, configure your own Google Maps API key and restrict it to the domains where the site is hosted.

## Safety and scope

Controlled medicines are not intended to be delivered by drone. The map, medicine categories, NHS ID field, and delivery messaging are illustrative only and must not be used for real medical or delivery decisions.

## Links

- [Live website](https://meddrone-w.github.io/Drone-Ordering-System-HTML/)
- [Project repository](https://github.com/MedDrone-W/Drone-Ordering-System-HTML)

## Tutorials and references

### Website

- [Google Maps geolocation sample](https://developers.google.com/maps/documentation/javascript/examples/map-geolocation)
- [Google Maps JavaScript API guide](https://developers.google.com/maps/documentation/javascript/demo-key)
- [Google Maps Directions panel sample](https://github.com/googlemaps/js-samples/tree/main/samples/directions-panel)
- [Google Maps JavaScript API endpoint](https://maps.googleapis.com/maps/api/js?loading=async&libraries=maps,marker)
- [NHS ID form tutorial](https://www.youtube.com/watch?v=JeXqaKeJSRI&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv&index=5)
- [CSS tutorial](https://www.youtube.com/watch?v=HGTJBPNC-Gw&t=2991s)

## License

No license is currently specified.
