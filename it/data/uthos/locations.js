let locations_lg = L.layerGroup();

let locations_markers = [
  {
    label: "Location 1",
    loc: [1606, 699],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
    // copy: "https://www.deviantart.com/butteredbap/art/Peak-393505404",
    // copyBy: "butteredbap",
    // link: "https://www.aumyr.world/geography/nordavind.html#picco-di-kharnat"
  },
  {
    label: "Location 2",
    loc: [2337, 1383],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 3",
    loc: [1766, 695],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 4",
    loc: [1119, 1016],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 5",
    loc: [1041, 763],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 6",
    loc: [506, 523],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 7",
    loc: [772, 1252],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 8",
    loc: [2047, 2045],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 9",
    loc: [1583, 3084],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 10",
    loc: [1443, 1369],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 11",
    loc: [943, 1664],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 12",
    loc: [357, 3263],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 13",
    loc: [1353, 3163],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
  {
    label: "Location 14",
    loc: [1684, 3454],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/locations/picco-di-karnat.jpg",
  },
];

for (let i = 0; i < locations_markers.length; i++) {
  let template = "";
  marker = L.marker(locations_markers[i].loc, {
    icon: marker_icon_location
  }).addTo(locations_lg);

  template += "<div class='card is-keep'><div class='card-bg' style='background-image:url(" + locations_markers[i].img + ")'><div class='card-overlay'></div>";

  if ( locations_markers[i].copy !== undefined ) {
    template += "<a class='badge badge-right badge-secondary badge-sm' href='" + locations_markers[i].copy + "' target='_blank' rel='noopener'>&copy; " + locations_markers[i].copyBy + "</a>";
  }

  template += "</div><div class='card-body'><p>" + locations_markers[i].pop + "</p>";

  if ( locations_markers[i].link !== undefined ) {
    template += "<a href='" + locations_markers[i].link + "' class='link-text' target='_blank'>Continua su aumyr.world</a></div>";
  }

  template += "</div>";

  marker.bindPopup(template);
  marker.bindTooltip(locations_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
