let capitals_lg = L.layerGroup();

let capitals_markers = [
  // Confederazione dell'Alba
  {
    label: "Baleria",
    loc: [1853, 1404],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
    // copy: "https://www.deviantart.com/memod/art/Frogster-game-concept-05-318588125",
    // copyBy: "lorem ipsum",
    // link: "https://www.aumyr.world/geography/nordavind.html#dunmere",
    // linkMap: "baleria.html"
  },
  // Enclave di Smeraldo
  {
    label: "Mirs",
    loc: [446, 226],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  // Lar Bane
  {
    label: "Minas Bane",
    loc: [187, 2476],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  // Melidor
  {
    label: "Bassoporto",
    loc: [1819, 2429],
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
  // Teocrazia di Moradin
  {
    label: "Sicariad",
    loc: [870, 1705],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/capitals/dunmere.jpg",
  },
  // Tolidor
  {
    label: "Città 2",
    loc: [1224, 3131],
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
