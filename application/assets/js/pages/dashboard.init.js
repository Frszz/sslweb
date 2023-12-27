var optionsSpark3 = {
    series: [
      { name: "series1", data: [20, 60, 29, 96, 25, 62, 17] },
      { name: "series2", data: [50, 22, 82, 20, 86, 36, 71] },
    ],
    chart: { type: "area", height: 50, sparkline: { enabled: !0 } },
    stroke: { show: !1, curve: "smooth" },
    colors: ["#5867c3", "#34c38f"],
    xaxis: { crosshairs: { width: 1 } },
    yaxis: { min: 0 },
    subtitle: { offsetX: 0, style: { fontSize: "14px" } },
  },
  chartSpark3 = new ApexCharts(document.querySelector("#visitors_charts"), optionsSpark3);
chartSpark3.render();
optionsSpark3 = {
  series: [{ name: "series1", data: [28, 65, 32, 86, 38, 71, 40, 60, 20] }],
  chart: { type: "area", height: 50, sparkline: { enabled: !0 } },
  stroke: { show: !1, curve: "straight" },
  fill: { opacity: 0.3 },
  colors: ["#5867c3"],
  xaxis: { crosshairs: { width: 1 } },
  yaxis: { min: 0 },
};
(chartSpark3 = new ApexCharts(document.querySelector("#order_charts"), optionsSpark3)).render();
var options = {
    series: [{ name: "Customer", data: [20, 10, 22, 15, 25, 20, 30, 25, 35] }],
    chart: { height: 290, type: "line", toolbar: { show: !1 }, zoom: { enabled: !1 } },
    dataLabels: { enabled: !1 },
    stroke: { curve: "smooth" },
    title: { show: !1 },
    grid: { borderColor: "#b8bfc6", xaxis: { lines: { show: !0 } }, yaxis: { lines: { show: !1 } } },
    colors: ["#5867c3"],
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"] },
    yaxis: { labels: { show: !1 } },
  },
  chart = new ApexCharts(document.querySelector("#line_chart"), options);
chart.render();
options = {
  chart: { height: 368, type: "area", toolbar: { show: !1 } },
  dataLabels: { enabled: !1 },
  stroke: { curve: "smooth", width: 3 },
  series: [
    { name: "series1", data: [38, 40, 28, 63, 42, 109, 97] },
    { name: "series2", data: [52, 60, 35, 56, 34, 52, 41] },
  ],
  colors: ["#5867c3", "#34c38f"],
  xaxis: { type: "month", categories: ["Jan", "Feb", "Mar", "April", "May", "Jun", "Julay"] },
  grid: { borderColor: "#f1f1f1" },
  tooltip: { x: { format: "dd/MM/yy HH:mm" } },
};
(chart = new ApexCharts(document.querySelector("#spline_area_month"), options)).render();
options = {
  chart: { height: 368, type: "area", toolbar: { show: !1 } },
  dataLabels: { enabled: !1 },
  stroke: { curve: "smooth", width: 3 },
  series: [
    { name: "series1", data: [70, 40, 75, 38, 88, 50, 90] },
    { name: "series2", data: [42, 60, 38, 66, 44, 69, 45] },
  ],
  colors: ["#5867c3", "#34c38f"],
  xaxis: { type: "year", categories: ["2015", "2016", "2017", "2018", "2019", "2020", "2021"] },
  grid: { borderColor: "#f1f1f1" },
  tooltip: { x: { format: "dd/MM/yy HH:mm" } },
};
(chart = new ApexCharts(document.querySelector("#spline_area_year"), options)).render();
options = {
  chart: { height: 223, type: "bar", toolbar: { show: !1 } },
  plotOptions: { bar: { dataLabels: { position: "top" } } },
  dataLabels: {
    enabled: !0,
    formatter: function (e) {
      return e + "%";
    },
    offsetY: -22,
    style: { fontSize: "12px", colors: ["#304758"] },
  },
  series: [{ name: "Inflation", data: [2.5, 3.2, 5, 10.1, 4.2, 3.8, 3, 2.4, 4, 1.2, 3.5, 0.8] }],
  colors: ["#5867c3"],
  grid: { borderColor: "#f1f1f1" },
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    position: "top",
    labels: { show: !1, offsetY: -18 },
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
    tooltip: { enabled: !0, offsetY: -35 },
  },
  yaxis: {
    axisBorder: { show: !1 },
    axisTicks: { show: !1 },
    labels: {
      show: !1,
      formatter: function (e) {
        return e + "";
      },
    },
  },
  title: { text: "Yearly Revenue", floating: !0, offsetY: 205, align: "center", style: { color: "#adb5bd", fontWeight: "500", fontSize: "15px" } },
};
(chart = new ApexCharts(document.querySelector("#column_chart_datalabel"), options)).render();
options = {
  series: [46, 64],
  chart: { height: 310, type: "radialBar" },
  plotOptions: {
    radialBar: {
      hollow: { margin: 5, size: "60%" },
      track: { margin: 10 },
      dataLabels: {
        showOn: "always",
        total: {
          show: !0,
          label: "Total",
          formatter: function (e) {
            return 768;
          },
        },
        name: { show: !0, color: "#000", fontSize: "15px" },
        value: { show: !0, fontSize: "24px" },
      },
    },
  },
  fill: { colors: ["#556ee6", "#34c38f"] },
  stroke: { lineCap: "round" },
  labels: ["SSL Aktif", "SSL Nonaktif"],
};
(chart = new ApexCharts(document.querySelector("#target_charts"), options)).render();
