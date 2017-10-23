           var MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
           var color = Chart.helpers.color;
                   var configLine = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [{
                    label: "My First dataset",
                    backgroundColor: window.chartColors.red,
                    borderColor: window.chartColors.red,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                    fill: false,
                }, {
                    label: "My Second dataset",
                    fill: false,
                    backgroundColor: window.chartColors.blue,
                    borderColor: window.chartColors.blue,
                    data: [
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor(),
                        randomScalingFactor()
                    ],
                }]
            },
            options: {
                responsive: true,
                title:{
                    display:true,
                    text:'Chart.js Line Chart'
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true
                },
                scales: {
                    xAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: true,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        }
                    }]
                }
            }
        };


           var barChartData = {
             labels: ["January", "February", "March", "April", "May", "June", "July"],
             datasets: [{
               label: 'Dataset 1',
               backgroundColor: color(window.chartColors.red).alpha(0.5).rgbString(),
               borderColor: window.chartColors.red,
               borderWidth: 3,
               data: [
                 randomScalingFactor(),
               ]
             }, {
               label: 'Dataset 2',
               backgroundColor: color(window.chartColors.blue).alpha(0.5).rgbString(),
               borderColor: window.chartColors.blue,
               borderWidth: 3,
               data: [
                 randomScalingFactor()
               ]
             }]
           };
           window.onload = function() {
             var ctx = document.getElementById("canvas").getContext("2d");
             window.myBar = new Chart(ctx, {
               type: 'bar',
               data: barChartData,
               options: {
                 responsive: true,
                 legend: {
                   position: 'top',
                 },
                 title: {
                   display: true,
                   text: 'Chart.js Bar Chart'
                 }
               }
             });


             var ctx2 = document.getElementById("canvas_2").getContext("2d");
             window.myBar2 = new Chart(ctx2, {
               type: 'bar',
               data: barChartData,
               options: {
                 responsive: true,
                 legend: {
                   position: 'top',
                 },
                 title: {
                   display: true,
                   text: 'Chart.js Bar Chart'
                 }
               }
             });
             var ctx3 = document.getElementById("line").getContext("2d");
             window.myLine = new Chart(ctx3, configLine);

           };
           document.getElementById('randomizeData').addEventListener('click', function() {
             var zero = Math.random() < 0.2 ? true : false;
             barChartData.datasets.forEach(function(dataset) {
               dataset.data = dataset.data.map(function() {
                 return zero ? 0.0 : randomScalingFactor();
               });
             });
             window.myBar.update();
           });
           var colorNames = Object.keys(window.chartColors);
           document.getElementById('addDataset').addEventListener('click', function() {
             var colorName = colorNames[barChartData.datasets.length % colorNames.length];;
             var dsColor = window.chartColors[colorName];
             var newDataset = {
               label: 'Dataset ' + barChartData.datasets.length,
               backgroundColor: color(dsColor).alpha(0.5).rgbString(),
               borderColor: dsColor,
               borderWidth: 1,
               data: []
             };
             for (var index = 0; index < barChartData.labels.length; ++index) {
               newDataset.data.push(randomScalingFactor());
             }
             barChartData.datasets.push(newDataset);
             console.log(barChartData.datasets)
             window.myBar.update();
           });
           document.getElementById('addData').addEventListener('click', function() {
             if (barChartData.datasets.length > 0) {
               var month = MONTHS[barChartData.labels.length % MONTHS.length];
               barChartData.labels.push(month);
               for (var index = 0; index < barChartData.datasets.length; ++index) {
                 //window.myBar.addData(randomScalingFactor(), index);
                 barChartData.datasets[index].data.push(randomScalingFactor());
               }
               window.myBar.update();
             }
           });
           document.getElementById('removeDataset').addEventListener('click', function() {
             barChartData.datasets.splice(0, 1);
             window.myBar.update();
           });
           document.getElementById('removeData').addEventListener('click', function() {
             barChartData.labels.splice(-1, 1); // remove the label first
             barChartData.datasets.forEach(function(dataset, datasetIndex) {
               dataset.data.pop();
             });
             window.myBar.update();
           });









           document.getElementById('randomizeData2').addEventListener('click', function() {
             var zero = Math.random() < 0.2 ? true : false;
             barChartData.datasets.forEach(function(dataset) {
               dataset.data = dataset.data.map(function() {
                 return zero ? 0.0 : randomScalingFactor();
               });
             });
             window.myBar2.update();
           });
           var colorNames = Object.keys(window.chartColors);
           document.getElementById('addDataset2').addEventListener('click', function() {
             var colorName = colorNames[barChartData.datasets.length % colorNames.length];;
             var dsColor = window.chartColors[colorName];
             var newDataset = {
               label: 'Dataset ' + barChartData.datasets.length,
               backgroundColor: color(dsColor).alpha(0.5).rgbString(),
               borderColor: dsColor,
               borderWidth: 1,
               data: []
             };
             for (var index = 0; index < barChartData.labels.length; ++index) {
               newDataset.data.push(randomScalingFactor());
             }
             barChartData.datasets.push(newDataset);
             window.myBar2.update();
           });
           document.getElementById('addData2').addEventListener('click', function() {
             if (barChartData.datasets.length > 0) {
               var month = MONTHS[barChartData.labels.length % MONTHS.length];
               barChartData.labels.push(month);
               for (var index = 0; index < barChartData.datasets.length; ++index) {
                 //window.myBar2.addData(randomScalingFactor(), index);
                 barChartData.datasets[index].data.push(randomScalingFactor());
               }
               window.myBar2.update();
             }
           });
           document.getElementById('removeDataset2').addEventListener('click', function() {
             barChartData.datasets.splice(0, 1);
             window.myBar2.update();
           });
           document.getElementById('removeData2').addEventListener('click', function() {
             barChartData.labels.splice(-1, 1); // remove the label first
             barChartData.datasets.forEach(function(dataset, datasetIndex) {
               dataset.data.pop();
             });
             window.myBar2.update();
           });



           document.getElementById('randomizeData3').addEventListener('click', function() {
             configLine.data.datasets.forEach(function(dataset) {
               dataset.data = dataset.data.map(function() {
                 return randomScalingFactor();
               });
             });
             window.myLine.update();
           });
           var colorNames = Object.keys(window.chartColors);
           document.getElementById('addDataset3').addEventListener('click', function() {
             var colorName = colorNames[configLine.data.datasets.length % colorNames.length];
             var newColor = window.chartColors[colorName];
             var newDataset = {
               label: 'Dataset ' + configLine.data.datasets.length,
               backgroundColor: newColor,
               borderColor: newColor,
               data: [],
               fill: false
             };
             for (var index = 0; index < configLine.data.labels.length; ++index) {
               newDataset.data.push(randomScalingFactor());
             }
             configLine.data.datasets.push(newDataset);
             window.myLine.update();
           });
           document.getElementById('addData3').addEventListener('click', function() {
             if (configLine.data.datasets.length > 0) {
               var month = MONTHS[configLine.data.labels.length % MONTHS.length];
               configLine.data.labels.push(month);
               configLine.data.datasets.forEach(function(dataset) {
                 dataset.data.push(randomScalingFactor());
               });
               window.myLine.update();
             }
           });
           document.getElementById('removeDataset3').addEventListener('click', function() {
             configLine.data.datasets.splice(0, 1);
             window.myLine.update();
           });
           document.getElementById('removeData3').addEventListener('click', function() {
             configLine.data.labels.splice(-1, 1); // remove the label first
             configLine.data.datasets.forEach(function(dataset, datasetIndex) {
               dataset.data.pop();
             });
             window.myLine.update();
           });
