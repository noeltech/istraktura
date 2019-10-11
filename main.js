mapboxgl.accessToken =
  "pk.eyJ1Ijoibm9lbHRlY2giLCJhIjoiY2o2azRiazZ2MTVlZDMxbXdvdTU1OW03YSJ9.eYd9NVbg2cgcrAqs0da8eA";
//Initiate map
var map = new mapboxgl.Map({
  container: "map", // container id
  //  style: 'mapbox://styles/mapbox/light-v9',
  style: "mapbox://styles/noeltech/cj6zr2fda9jyz2smst427o4gb", // stylesheet location
  //maxBounds: [[122.4230575562,10.6292284096],[ 122.6853561401,10.808014608]],
  //maxBounds: [[119.9902,9.119],[ 125.3564,13.0414]],
  //122.4230575562,10.6292284096,122.6853561401,10.808014608

  center: [122.568369, 10.702864],
  pitch: 60, // pitch in degrees
  bearing: -30,
  //maxZoom: 18
  zoom: 16
});
// Zoom out map after map loads
map.on("load", function() {
  map.flyTo({
    // These options control the ending camera position: centered at
    // the target, at zoom level 9, and north up.
    zoom: 14,
    // These options control the flight curve, making it move
    // slowly and zoom out almost completely before starting
    // to pan.
    speed: 0.9, // make the flying slow
    curve: 1 // change the speed at which it zooms out
    // This can be any easing function: it takes a number between
    // 0 and 1 and returns another number between 0 and 1.
  });
});
// classify the building
function ShowLayer(x) {
  var BuildingClassify = [
    "Buildings RCI",
    "Buildings Age",
    "Building Storey",
    "Buildings Concrete",
    "Buildings Earthquake Proof",
    "Buildings Hurricane Proof",
    "Buildings Tax",
    "Buildings Base Color"
  ];
  for (i = 0; i < 8; i++) {
    if (i == x) {
      map.setLayoutProperty(BuildingClassify[i], "visibility", "visible");
    } else {
      map.setLayoutProperty(BuildingClassify[i], "visibility", "none");
    }
  }
}
// change menu style and show info
$("#classify-list li").on("click", function() {
  $(".click-list")
    .removeClass("click-list")
    .addClass("not-click");
  $(this).toggleClass("click-list");
  var ClickValue = $(this).val();

  //loop through classify info div
  $(".classify-info").each(function(i) {
    if (i == ClickValue) {
      $(this)
        .animate({ left: "5px" }, "fast")
        .css("display", "block");
    } else {
      $(this)
        .animate({ left: "-250px" }, "fast")
        .css("display", "none");
    }
  });
});
// Create Charts for RCI Classification
function CreateRCIChart() {
  console.log("creating RCI Chart");

  new Chart(document.getElementById("rci-chart"), {
    type: "pie",
    data: {
      labels: ["Residential", "Commercial", "Industrial", "City Services"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#137c3d", "#197ba9", "#c3c032", "#cd8c3c"],
          data: [10000, 3156, 2987, 956]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: false,
        text: "Predicted world population (millions) in 2050"
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          fontColor: "#050505"
        }
      }
    }
  });
  new Chart(document.getElementById("rci-chart_2"), {
    type: "bar",
    data: {
      labels: ["2005", "2010", "2015"],
      datasets: [
        {
          label: "Residential",
          backgroundColor: "#137c3d",
          data: [5866, 6942, 8622]
        },
        {
          label: "Commercial",
          backgroundColor: "#197ba9",
          data: [1534, 2654, 3452]
        },
        {
          label: "Industrial",
          backgroundColor: "#c3c032",
          data: [654, 1577, 2144]
        }
      ]
    },
    options: {
      responsive: false,
      legend: {
        display: false
      },
      title: {
        display: true,
        text: "Building Growth Increase"
      }
    }
  });
}
// Create Charts for Age Classification
function CreateAgeCharts() {
  console.log("creating Age Chart");
  new Chart(document.getElementById("age-chart"), {
    type: "pie",
    data: {
      labels: ["10", "20", "40", "60", "80", "100", "120"],
      datasets: [
        {
          label: "Age",
          backgroundColor: [
            "#478D96",
            "#1E6CC7",
            "#1EBD21",
            "#68B41D",
            "#ABA91C",
            "#A15A1B",
            "#981B21"
          ],
          data: [1563, 3266, 2311, 1456, 800, 7562, 2144]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: false,
        text: "Age of Buildings"
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          fontColor: "#050505"
        }
      }
    }
  });
  new Chart(document.getElementById("age-chart_2"), {
    type: "horizontalBar",
    data: {
      labels: ["10", "20", "40", "60", "80", "100", "120"],
      datasets: [
        {
          label: "Age",
          backgroundColor: [
            "#478D96",
            "#1E6CC7",
            "#1EBD21",
            "#68B41D",
            "#ABA91C",
            "#A15A1B",
            "#981B21"
          ],
          data: [1563, 3266, 2311, 1456, 800, 7562, 2144]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Age Of Buidlings"
      }
    }
  });
}
//Create Charts for Storey Classification
function CreateStoreyCharts() {
  console.log("creating Storey Chart");
  new Chart(document.getElementById("storey-chart"), {
    type: "pie",
    data: {
      labels: ["1", "2", "6", "10", "20", "25", "35"],
      datasets: [
        {
          label: "Age",
          backgroundColor: [
            "#35BF36",
            "#33BC8F",
            "#318BB9",
            "#2F2FB6",
            "#862DB3",
            "#B02B84",
            "#AE2929"
          ],
          data: [7664, 3266, 1566, 833, 90, 2, 1]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: false,
        text: "Building Storey"
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          fontColor: "#050505"
        }
      }
    }
  });
  new Chart(document.getElementById("storey-chart_2"), {
    type: "horizontalBar",
    data: {
      labels: ["1", "2", "6", "10", "20", "25", "35"],
      datasets: [
        {
          label: "Storey",
          backgroundColor: [
            "#35BF36",
            "#33BC8F",
            "#318BB9",
            "#2F2FB6",
            "#862DB3",
            "#B02B84",
            "#AE2929"
          ],
          data: [7664, 3266, 1566, 833, 90, 2, 1]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Building Storey"
      }
    }
  });
}
// Create Charts for Materials Classification
function CreateMaterialsCharts() {
  new Chart(document.getElementById("mater-chart"), {
    type: "doughnut",
    data: {
      labels: ["Concrete", "Non-Concrete"],
      datasets: [
        {
          label: "Materials",
          backgroundColor: ["#2d96a4", "#82601c"],
          data: [7814, 5677]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: "Buildings by Materials (2017)"
      }
    }
  });
  // Bar chart
  new Chart(document.getElementById("mater-chart_2"), {
    type: "bar",
    data: {
      labels: ["Concrete", "Non-Concrete"],
      datasets: [
        {
          label: "Materials",
          backgroundColor: ["#2d96a4", "#82601c"],
          data: [7814, 5677]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Buildings by Materials (2017)"
      }
    }
  });
}
// Create Charts for Earthquake Proof Classification
function CreateEQCharts() {
  new Chart(document.getElementById("eq-chart"), {
    type: "polarArea",
    data: {
      labels: ["Earthquake Proof", "Non-Eartquake Proof"],
      datasets: [
        {
          label: "Earthquake Proof Buildings",
          backgroundColor: ["#832494", "#205629"],
          data: [5984, 7123]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Earthquake Proof Buildings"
      }
    }
  });
  // Bar chart
  new Chart(document.getElementById("eq-chart_2"), {
    type: "bar",
    data: {
      labels: ["Earthquake Proof", "Non-Eartquake Proof"],
      datasets: [
        {
          label: "Earthquake Proof Buildings",
          backgroundColor: ["#832494", "#205629"],
          data: [5984, 7123]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Earthquake Proof Buildings"
      }
    }
  });
}
function CreateHurrCharts() {
  new Chart(document.getElementById("hurr-chart"), {
    type: "doughnut",
    data: {
      labels: ["Hurricane Proof", "Non-Hurricane Proof"],
      datasets: [
        {
          label: "Materials",
          backgroundColor: ["#875922", "#155e74"],
          data: [7891, 5123]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: "Hurricane Proof Buildings: 2017"
      }
    }
  });
  // Bar chart
  new Chart(document.getElementById("hurr-chart_2"), {
    type: "bar",
    data: {
      labels: ["Hurricane Proof", "Non-Hurricane Proof"],
      datasets: [
        {
          label: "Hurricane Proof",
          backgroundColor: ["#875922", "#155e74"],
          data: [7891, 5123]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Hurricane Proof Buildings: 2017"
      }
    }
  });
}
function CreatetaxCharts() {
  new Chart(document.getElementById("tax-chart"), {
    type: "horizontalBar",
    data: {
      labels: ["Paid", "Non-Paid", "Exempted"],
      datasets: [
        {
          label: "Tax (millions)",
          backgroundColor: ["#1b7927", "#9f741e", "#6f0606"],
          data: [9565, 3457, 956]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      legend: { display: false },
      title: {
        display: true,
        text: "Tax Payment (2017)"
      }
    }
  });
  // Bar chart
  new Chart(document.getElementById("tax-chart_2"), {
    type: "bar",
    data: {
      labels: ["2000", "2005", "2010", "2015"],
      datasets: [
        {
          label: "Paid",
          backgroundColor: "#1b7927",
          data: [9675, 8561, 10454, 1550]
        },
        {
          label: "Non-Paid",
          backgroundColor: "#9f741e",
          data: [3544, 3577, 2254, 1563]
        }
      ]
    },
    options: {
      responsive: false,
      maintainAspectRatio: true,
      title: {
        display: true,
        text: "Tax Payment per 5 Years"
      }
    }
  });
}

CreateAgeCharts();
CreateRCIChart();
CreateStoreyCharts();
CreateMaterialsCharts();
CreateEQCharts();
CreateHurrCharts();
CreatetaxCharts();

// Popup Function
function ShowPopup(longlat, setHTML) {
  var Popup = new mapboxgl.Popup()
    .setLngLat(longlat)
    .setHTML(setHTML)
    .addTo(map);
}
//Popup show building info when click
map.on("click", function(e) {
  var BuildingInfo = map.queryRenderedFeatures(e.point, {
    layers: ["Buildings Info"]
  });
  var PopupHTML =
    "<h3><strong>" +
    BuildingInfo[0].properties.name +
    "</strong></h3><p><strong>" +
    BuildingInfo[0].properties.land_area +
    '</strong> meters tall </p> \
                <a href="https://com">Visit AwesomePlace.com</a> <br> \
                <img src="images/building.png" alt="Building" height="200" width="150">';
  ShowPopup(e.lngLat, PopupHTML);
});
