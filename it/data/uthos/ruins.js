let ruins_lg = L.layerGroup();

let ruins_markers = [
  {
    label: "Rovina 1",
    loc: [2152, 485],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
    // copy: "https://www.deviantart.com/lostsoul12a1/art/Underwater-City-50119438",
    // copyBy: "lostsoul121",
    // link: "https://www.aumyr.world/geography/#valimar"
  },
  {
    label: "Rovina 2",
    loc: [2302, 1201],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 3",
    loc: [1577, 1021],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 4",
    loc: [981, 449],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 5",
    loc: [1346, 566],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 6",
    loc: [554, 861],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 7",
    loc: [1017, 2899],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 8",
    loc: [2333, 2334],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 9",
    loc: [2261, 2820],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 10",
    loc: [1930, 3019],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 11",
    loc: [1902, 3271],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 12",
    loc: [1848, 2272],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 13",
    loc: [439, 2880],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 14",
    loc: [1384, 3389],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 15",
    loc: [1164, 1290],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
  {
    label: "Rovina 16",
    loc: [1954, 888],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/ruins/valimar.jpg",
  },
];

for (let i = 0; i < ruins_markers.length; i++) {
  let template = "";
  marker = L.marker(ruins_markers[i].loc, {
    icon: marker_icon_ruin
  }).addTo(ruins_lg);

  template += "<div class='card is-ruin'><div class='card-bg' style='background-image:url(" + ruins_markers[i].img + ")'><div class='card-overlay'></div>";

  if ( ruins_markers[i].copy !== undefined ) {
    template += "<a class='badge badge-right badge-secondary badge-sm' href='" + ruins_markers[i].copy + "' target='_blank' rel='noopener'>&copy; " + ruins_markers[i].copyBy + "</a>";
  }

  template += "</div><div class='card-body'><p>" + ruins_markers[i].pop + "</p>";

  if ( ruins_markers[i].link !== undefined ) {
    template += "<a href='" + ruins_markers[i].link + "' class='link-text' target='_blank'>Continua su aumyr.world</a>";
  }

  template += "</div>";

  marker.bindPopup(template);
  marker.bindTooltip(ruins_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
