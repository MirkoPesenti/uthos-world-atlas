let cities_lg = L.layerGroup();

let cities_markers = [
  // Confederazione dell'Alba
  {
    label: "Kart",
    loc: [1791, 743],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Relarian",
    loc: [1618, 1259],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Tirism",
    loc: [1261, 1078],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 1",
    loc: [1915, 1085],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 2",
    loc: [1535, 740],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 3",
    loc: [1342, 964],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 4",
    loc: [1258, 1418],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 5",
    loc: [2231, 1190],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  // Enclave di Smeraldo
  {
    label: "Altopasso",
    loc: [929, 715],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Dirupia",
    loc: [669, 1577],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Ferracava",
    loc: [646, 924],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 1",
    loc: [769, 609],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 2",
    loc: [588, 620],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 3",
    loc: [363, 660],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  // Lar Bane
  {
    label: "Città 1",
    loc: [96, 2145],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 2",
    loc: [535, 2543],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  // Melidor
  {
    label: "Lithoria",
    loc: [2026, 2250],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Roccargento",
    loc: [1869, 1872],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 1",
    loc: [1658, 2036],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 2",
    loc: [2043, 2631],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 3",
    loc: [2236, 2418],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  // Regno degli Elfi
  // {
  //   label: "Lorem Ipsum",
  //   loc: [1340, 342],
  //   pop: "Lorem ipsum dolor sit amet",
  //   link: "#"
  // },
  // Teocrazia di Moradin
  {
    label: "Anticatorre",
    loc: [1172, 1599],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 1",
    loc: [661, 1324],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 2",
    loc: [843, 1063],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 3",
    loc: [1058, 1054],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  // Tolidor
  {
    label: "Approdo Crepuscolare",
    loc: [1333, 2781],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Feralian",
    loc: [855, 3046],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 1",
    loc: [1080, 3259],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 3",
    loc: [1685, 3116],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 4",
    loc: [1590, 3404],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 5",
    loc: [1769, 2973],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
  {
    label: "Città 6",
    loc: [2027, 3321],
    pop: "Lorem ipsum dolor sit amet",
    link: "#"
  },
];

for (let i = 0; i < cities_markers.length; i++) {
  marker = L.marker(cities_markers[i].loc, { icon: marker_icon_city }).addTo(
    cities_lg
  );
  // marker.bindPopup(
  //   cities_markers[i].pop +
  //     '<hr><a href="' +
  //     cities_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     cities_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(cities_markers[i].label, {
    // permanent: true,
    direction: "bottom"
  });
}
