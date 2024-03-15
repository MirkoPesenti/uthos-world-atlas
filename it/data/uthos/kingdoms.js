let kingdoms_lg = L.layerGroup();

let kingdoms_markers = [
  {
    label: "Confederazione dell'Alba",
    loc: [
      [2128, 980],
      [2165, 943],
      [2217, 1001],
      [2219, 1090],
      [2234, 1152],
      [2268, 1203],
      [2279, 1278],
      [2305, 1331],
      [2285, 1441],
      [2251, 1409],
      [2210, 1409],
      [2162, 1399],
      [2133, 1363],
      [2092, 1343],
      [2051, 1396],
      [2000, 1401],
      [1958, 1414],
      [1897, 1461],
      [1786, 1434],
      [1719, 1475],
      [1661, 1459],
      [1535, 1415],
      [1491, 1508],
      [1402, 1530],
      [1297, 1631],
      [1208, 1542],
      [1175, 1458],
      [1123, 1343],
      [1169, 1154],
      [1218, 974], // Moradin | Enclave
      [1301, 894], // Enclave
      [1305, 757], // Enclave | Elfi
      [1388, 721], // Elfi
      [1484, 741], // Elfi
      [1484, 741], // Elfi
      [1525, 672], // Elfi
      [1572, 604],
      [1622, 579],
      [1663, 613],
      [1692, 658],
      [1795, 634],
      [1829, 657],
      [1853, 726],
      [1898, 711],
      [1975, 755],
      [2097, 874],
      [2110, 917],
      [2054, 955],
      [2072, 1023],
    ],
    pop: "",
    link: "#"
  },
  {
    label: "Teocrazia di Moradin",
    loc: [
      [1297, 1631],
      [1208, 1542],
      [1175, 1458],
      [1123, 1343],
      [1169, 1154],
      [1218, 974],
      [1144, 813], // Elfi
      [1056, 819], // Elfi | Enclave
    ],
    pop: "",
    link: "#"
  },
];

for (let i = 0; i < kingdoms_markers.length; i++) {
  marker = L.polygon(kingdoms_markers[i].loc, {
    className: "kingdom kingdom-" + kingdoms_markers[i].label,
    icon: marker_icon_kingdom
  }).addTo(kingdoms_lg);
  // marker.bindPopup(
  //   kingdoms_markers[i].pop +
  //     '<hr><a href="' +
  //     kingdoms_markers[i].link +
  //     '" target="_blank" rel="noopener">Leggi di più su ' +
  //     kingdoms_markers[i].label +
  //     "</a>"
  // );
  marker.bindTooltip(kingdoms_markers[i].label, {
    className: "kingdoms-tooltip",
    permanent: true,
    direction: "center"
  });
}
