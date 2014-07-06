$(function () {

  var dataFromServer = [];

  for(var i = 0, len = window.levels.length; i < len; i++) {
    dataFromServer.push(window.levels[i].value);
  }

  $('#container').highcharts({
    title: {
      text: 'Arduino moisture data',
      x: -20 //center
    },
    subtitle: {
      text: 'Tullosai baby',
      x: -20
    },
    xAxis: {
      title: {
        text: 'Time'
      },
    },
    yAxis: {
      title: {
        text: 'Moisture level'
      },
      plotLines: [{
        value: 0,
        width: 1,
        color: '#808080'
      }]
    },
    // tooltip: {
    //   valueSuffix: '°C'
    // },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: 'Basil',
      data: dataFromServer
    }]
  });
});

