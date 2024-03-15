let keeps_lg = L.layerGroup();

let keeps_markers = [
  {
    label: "Forte 1",
    loc: [2116, 1198],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
    // copy: "https://www.deviantart.com/behindspace99/art/EVER-ROCK-KEEP-694969710",
    // copyBy: "behindspace99",
    // link: "https://www.aumyr.world/geography/nordavind.html#torregrigia"
  },
  {
    label: "Forte 2",
    loc: [2029, 1339],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 3",
    loc: [1959, 1266],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 4",
    loc: [1080, 1760],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 5",
    loc: [791, 1705],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 6",
    loc: [573, 1570],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 7",
    loc: [1588, 3167],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 8",
    loc: [395, 2419],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 9",
    loc: [2023, 2115],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 10",
    loc: [2109, 2840],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 11",
    loc: [1104, 893],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 12",
    loc: [643, 740],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 13",
    loc: [1425, 677],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
  {
    label: "Forte 14",
    loc: [315, 2670],
    pop: "Lorem ipsum dolor sit amet",
    img: "/images/keeps/torregrigia.jpg",
  },
];

for (let i = 0; i < keeps_markers.length; i++) {
  let template = "";
  marker = L.marker(keeps_markers[i].loc, { icon: marker_icon_keep }).addTo(
    keeps_lg
  );
  
  template += "<div class='card is-keep'><div class='card-bg' style='background-image:url(" + keeps_markers[i].img + ")'><div class='card-overlay'></div>";

  if ( keeps_markers[i].copy !== undefined ) {
    template += "<a class='badge badge-right badge-secondary badge-sm' href='" + keeps_markers[i].copy + "' target='_blank' rel='noopener'>&copy; " + keeps_markers[i].copyBy + "</a>"
  }

  template += "</div><div class='card-body'><p>" + keeps_markers[i].pop + "</p>";

  if ( keeps_markers[i].link !== undefined ) {
    template += "<a href='" + keeps_markers[i].link + "' class='link-text' target='_blank'>Continua su aumyr.world</a>";
  }

  template += "</div>";

  marker.bindPopup(template);
  marker.bindTooltip(keeps_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
