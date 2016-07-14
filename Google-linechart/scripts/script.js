var app = angular.module('chartApp', []);

app.controller('ChartController', ChartController);

ChartController.$inject = ['$scope', '$http'];

function ChartController($scope, $http) {
    var chart = this;
    chart.selectChart = selectChart;
    chart.prepareChart = prepareChart;
    google.charts.load('current', {'packages': ['corechart']});
    $http.get('data/report.json').success(function (response) {
        chart.records = response.records;
        chart.selectmodel = 'sales';
        prepareChart();
    });

    function selectChart() {
        prepareChart();
    }

    function prepareChart() {
        chart.dataTable = [['date', chart.selectmodel]];
        angular.forEach(chart.records, function (value, i) {
            chart.dataTable.push([value.date, value[chart.selectmodel]])
        });
        console.log(chart.dataTable);
        google.charts.setOnLoadCallback(drawChart);

    }


    function drawChart() {
        var data = google.visualization.arrayToDataTable(chart.dataTable);
        var options = {
            title: chart.selectmodel,
            curveType: 'function',
            vAxis: {
                title: chart.selectmodel,
            },
            hAxis : {
                title:'Date',
                textStyle : {
                    fontSize: 9
                },
                slantedText: true,
                slantedTextAngle: 45
            },
            legend: {position: 'top'}
        };
        var linechart = new google.visualization.LineChart(document.getElementById('line-chart'));

        linechart.draw(data, options);
    }


}