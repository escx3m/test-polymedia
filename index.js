document.addEventListener('DOMContentLoaded', function () {

    var browsers = w.series[0].data;

    Highcharts.chart('container', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: 'Распределение рынка браузеров, 2021'
        },
        tooltip: {
          pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
          point: {
            valueSuffix: '%'
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        series: [{
          colorByPoint: true,
          data: browsers
        }]
      });
});