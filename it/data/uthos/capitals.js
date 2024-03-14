let capitals_lg = L.layerGroup();

let capitals_markers = [
  // Confederazione dell'Alba
  {
    label: "Approdo Crepuscolare",
    loc: [1333, 2781],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
    // copy: "https://www.deviantart.com/memod/art/Frogster-game-concept-05-318588125",
    // copyBy: "lorem ipsum",
    // link: "https://www.aumyr.world/geography/nordavind.html#dunmere",
    // linkMap: "baleria.html"
  },
  {
    label: "Baleria",
    loc: [1853, 1404],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Feralian",
    loc: [855, 3046],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Kart",
    loc: [1791, 743],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Relarian",
    loc: [1618, 1259],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Tirism",
    loc: [1261, 1078],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  // Enclave di Smeraldo
  {
    label: "Altopasso",
    loc: [929, 715],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Anticatorre",
    loc: [1172, 1599],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Bassoporto",
    loc: [1819, 2429],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Dirupia",
    loc: [669, 1577],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Ferracava",
    loc: [646, 924],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Lithoria",
    loc: [2026, 2250],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Minas Bane",
    loc: [187, 2476],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Mirs",
    loc: [446, 226],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Sicariad",
    loc: [870, 1705],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  {
    label: "Roccargento",
    loc: [1869, 1872],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  // Regno degli Elfi
  {
    label: "Ylhanor",
    loc: [1340, 342],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
];

for (let i = 0; i < capitals_markers.length; i++) {
  let template = "";
  marker = L.marker(capitals_markers[i].loc, {
    icon: marker_icon_capital
  }).addTo(capitals_lg);
  template += "<div class='card is-capital'><div class='card-bg' style='background-image:url(" + capitals_markers[i].img + ")'><div class='card-overlay'></div>";

  if ( capitals_markers[i].copy !== undefined ) {
    template += "<a class='badge badge-right badge-secondary badge-sm' href='" + capitals_markers[i].copy + "' target='_blank' rel='noopener'>&copy; " + capitals_markers[i].copyBy + "</a>";
  }
  
  template += "</div><div class='card-body'><p>" + capitals_markers[i].pop + "</p>";
  
  if ( capitals_markers[i].link !== undefined ) {
    template += "<hr><a href='" + capitals_markers[i].link + "' class='link-text' target='_blank'>Continua su aumyr.world</a></div>";
  }

  marker.bindPopup(template);
  marker.bindTooltip(capitals_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
