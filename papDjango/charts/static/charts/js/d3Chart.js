// Chart maker on D3
// const data = JSON.parse(document.getElementById('forChart').textContent);
// const mydata = JSON.parse(data);
// console.log (mydata[0].fields.H1);

// hq
// [{"model": "charts.daten", "pk": 5, "fields": {"Br": 2.0, "Pumpentyp": "GP   -200M/  4x440", "Qn": 600.0, "Drehzahl": 2980.0, "Lrd": 427.0, "NWDS": 50.0, "NWSS": 100.0, "Pn": 16.0, "B": 0.0, "M": 0.0, "V": 0.0, "H1": 1108.4093908977954, "Q1": 0.0, "H2": 1103.4615359830075, "Q2": 141.18, "H3": 1077.7130176600456, "Q3": 317.65, "H4": 987.6412656143883, "Q4": 494.12, "H5": 962.2829325176394, "Q5": 529.41, "H6": 934.7088858982681, "Q6": 564.71, "H7": 767.3681793889864, "Q7": 741.15}}, {"model": "charts.daten", "pk": 5, "fields": {"Br": 2.0, "Pumpentyp": "GP   -200M/  4x440", "Qn": 600.0, "Drehzahl": 2980.0, "Lrd": 427.0, "NWDS": 50.0, "NWSS": 100.0, "Pn": 16.0, "B": 0.0, "M": 0.0, "V": 0.0, "H1": 1108.4093908977954, "Q1": 0.0, "H2": 1103.4615359830075, "Q2": 141.18, "H3": 1077.7130176600456, "Q3": 317.65, "H4": 987.6412656143883, "Q4": 494.12, "H5": 962.2829325176394, "Q5": 529.41, "H6": 934.7088858982681, "Q6": 564.71, "H7": 767.3681793889864, "Q7": 741.15}}, {"model": "charts.daten", "pk": 4, "fields": {"Br": 2.0, "Pumpentyp": "GP   -200M/  3x440", "Qn": 600.0, "Drehzahl": 2980.0, "Lrd": 427.0, "NWDS": 50.0, "NWSS": 100.0, "Pn": 16.0, "B": 0.0, "M": 0.0, "V": 0.0, "H1": 831.3070431733466, "Q1": 0.0, "H2": 827.5961519872554, "Q2": 141.18, "H3": 808.284763245034, "Q3": 317.65, "H4": 740.7309492107912, "Q4": 494.12, "H5": 721.7121993882295, "Q5": 529.41, "H6": 701.031664423701, "Q6": 564.71, "H7": 575.5261345417398, "Q7": 741.15}}, {"model": "charts.daten", "pk": 1, "fields": {"Br": 2.0, "Pumpentyp": "GP_D -200L/ 11x440", "Qn": 480.0, "Drehzahl": 2980.0, "Lrd": 412.0, "NWDS": 50.0, "NWSS": 100.0, "Pn": 16.0, "B": 0.0, "M": 0.0, "V": 0.0, "H1": 2977.606516734797, "Q1": 0.0, "H2": 2973.7719556257175, "Q2": 96.0, "H3": 2905.777760075604, "Q3": 256.0, "H4": 2611.903591309814, "Q4": 416.0, "H5": 2532.1789234602384, "Q5": 448.0, "H6": 2445.3791454217435, "Q6": 480.0, "H7": 1892.6161200437662, "Q7": 640.0}}]
// npsh
// [{"model": "charts.npsh50", "pk": 1, "fields": {"Pumpentyp": "KRC  - 65 /125", "Drehzahl": 1450.0, "H1": 1.13, "Q1": 15.0, "H2": 1.11, "Q2": 22.5, "H3": 1.1, "Q3": 30.0, "H4": 1.13, "Q4": 37.5, "H5": 1.18, "Q5": 45.0, "H6": 1.3, "Q6": 52.5, "H7": 1.45, "Q7": 60.0}}, {"model": "charts.npsh50", "pk": 8, "fields": {"Pumpentyp": "KRC  - 65 /315", "Drehzahl": 2975.0, "H1": 2.29, "Q1": 30.0, "H2": 3.07, "Q2": 49.0, "H3": 3.65, "Q3": 68.0, "H4": 4.25, "Q4": 87.0, "H5": 5.22, "Q5": 106.0, "H6": 6.7, "Q6": 125.0, "H7": 9.21, "Q7": 144.0}}]

// TK942204,KRC -300 /315-000/S1, 1480 , 365 , 6.05, 1992.18, 138.35, 1486 , 16.07, 2013.28, 161.08, 1486 , 30.18, 1171.87, 130.04, 1488 , 29.7, 1355.85, 138.18, 1488 , 27.86, 1578.51, 149.04, 1486 , 31.07, 987.89, 126.31, 1488 , 33.88, 699.61, 118, 1489 , 0, 0, 0,, 0, 0, 0,, 0, 0, 0,, 0, 0, 0,, 0, 0, 0,, 0, 0, 0,, 0, 0, 0,, 0, 0, 0,, 0, 0, 0,, 0, 0, 0,, 0, 0, 0,, 0, 0, 0,, 0, 0, 0,

// var chartDaten = {
//     design: {},
//     pumps: ["KRH", "GH"],
//     curves: { curves: [ [
//             {x: 1.3,
//                 y: 1.5},
//             {x: 2.5,
//                 y: 2.1},
//             {x: 3.0,
//                 y: 4}  ],
//             [
//             {x: 1.0,
//                 y: 0.5},
//             {x: 2.3,
//                 y: 1.7},
//             {x: 4.1,
//                 y: 3.54} ]
//     ],
//     labels: {
//         xAxisLable: "flow",
//         yAxisLable: "head"
//     }},
//     errors: null
//         };
var Chart = {};
Chart.axisX = {};
Chart.axisY = {};
Chart.size = {};
Chart.axisX.name = "Flow";
Chart.axisY.name = "Head";

Chart.size.margin = {top: 15, right: 60, bottom: 30, left: 50}; 
Chart.size.proportion = 3/4;

Chart.color = d3.scaleOrdinal(d3.schemeCategory10);

Chart.curves = function(link) {
    d3.json(link).then(function(json) {
        console.log(json);
    }).catch(function(error){console.log('error: ' + error); return null;});
};

Chart.init = function () {
    //
};

Chart.render = function () {
    //   
    Chart.size.width = parseInt(chartObj.mainDiv.style("width"), 10) - (Chart.size.margin.left + Chart.size.margin.right);
    Chart.size.height = parseInt(Chart.size.mainDiv.style("height"), 10) - (Chart.size.margin.top + Chart.size.margin.bottom);
    if (Chart.size.width < (650 - Chart.size.margin.left - Chart.size.margin.right)) {
        Chart.size.width = (650 - Chart.size.margin.left - Chart.size.margin.right);
        Chart.size.height = 480 - Chart.size.margin.top - Chart.size.margin.bottom;
        }
    //Create SVG element
    Chart.svg = Chart.mainDiv
        .append("svg")
        .attr("class", "chart-area")
        .attr("width", Chart.size.width + (Chart.size.margin.left + Chart.size.margin.right))
        .attr("height", Chart.size.height + (Chart.size.margin.top + Chart.size.margin.bottom))
        .append("g")
        .attr("transform", "translate(" + Chart.size.margin.left + "," + Chart.size.margin.top + ")");
    //Todo remake line drawing
    // Draw Lines
    var y = 0;
    chartObj.curvesList.forEach(function (curve) {
        curve.line = chartObj.svg
            .append("path").datum(curve)
            .attr("class", "line")
            .attr("d", curve.line)
            .style("stroke", color(y))
            .attr("data-series", y)
            .on("mouseover", function () {
                focus.style("display", null);
            }).on("mouseout", function () {
                focus.transition().delay(700).style("display", "none");
            }).on("mousemove", mousemove);
        curve.dots = chartObj.svg//.append("g")
            //d3.selectAll(".dot")
            .selectAll(".dot")
            .data(curve, function(d){return d;})
            .enter()
            .append("circle")
            .attr("class", "dot")
            .attr("r", 4)
            .attr("cx", curve.dotX) //function(d){return chartObj.xScale(chartObj.xFunct(d))})
            .attr("cy", curve.dotY) //function(d){return chartObj.yScale(yObjs[String(y)].yFunct(d))})
            //.attr("fill", "none")
            .attr("stroke", color(y));
        y++;
    });
        // Draw Axis
    Chart.svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + Chart.size.height + ")")
        .call(chartObj.xAxis)
        .append("text")
        .attr("class", "label")
        .attr("x", Chart.size.width / 2).attr("y", 30)
        .style("text-anchor", "middle")
        .text(chartObj.xAxisLable);
    Chart.svg.append("g")
        .attr("class", "y axis")
        .call(chartObj.yAxis)
        .append("text")
        .attr("class", "label")
        .attr("transform", "rotate(-90)")
        .attr("y", -42)
        .attr("x", -Chart.size.height / 2)
        .attr("dy", ".71em")
        .style("text-anchor", "middle")
        .text(chartObj.yAxisLable);
    // Draw Grid
    Chart.svg.append("g")
        .attr("class", "x axis-grid")
        .attr('transform', 'translate(0,' + Chart.size.height + ')')
        .call(chartObj.xGrid);
    Chart.svg.append("g")
        .attr("class", "y axis-grid")
        .call(chartObj.yGrid);
    // //Draw tooltips
    // var focus = Chart.svg
    //     .append("g")
    //     .attr("class", "focus")
    //     .style("display", "none");
    // // Todo remake to new data structure
    // chartObj.curvesList.forEach(function (curve) {
    //     curve.tooltip = focus.append("g");
    //     curve.tooltip.append("circle").attr("r", 5);
    //     curve.tooltip.append("rect").attr("x", 8).attr("y","-5").attr("width",22).attr("height",'0.75em');
    //     curve.tooltip.append("text").attr("x", 9).attr("dy", ".35em");
    // });
    // // for (var y  in yObjs) {
    // //     yObjs[y].tooltip = focus.append("g");
    // //     yObjs[y].tooltip.append("circle").attr("r", 5);
    // //     yObjs[y].tooltip.append("rect").attr("x", 8).attr("y","-5").attr("width",22).attr("height",'0.75em');
    // //     yObjs[y].tooltip.append("text").attr("x", 9).attr("dy", ".35em");
    // // }
    // // Year label
    // focus
    //     .append("text")
    //     .attr("class", "focus year")
    //     .attr("x", 9)
    //     .attr("y", 7);
    // // Focus line
    // focus
    //     .append("line")
    //     .attr("class", "focus line")
    //     .attr("y1", 0)
    //     .attr("y2", chartObj.height);
    // // Todo remake for new data
    // //Draw legend
    // var legend = chartObj.mainDiv.append('div').attr("class", "legend");
    // chartObj.pumpsList.forEach(function (pump, index) {
    //     series = legend.append('div');
    //     series.append('div').attr("class", "series-marker").style("background-color", color(index));
    //     series.append('p').text(pump);
    //     chartObj.curvesList[index].legend = series;
    // });
    // // for (var y  in yObjs) {
    // //     series = legend.append('div');
    // //     series.append('div').attr("class", "series-marker").style("background-color", color(y));
    // //     series.append('p').text(y);
    // //     yObjs[y].legend = series;
    // // }
    // // Overlay to capture hover
    // chartObj.svg
    //     .append("rect")
    //     .attr("class", "overlay")
    //     .attr("width", chartObj.width)
    //     .attr("height", chartObj.height)
    //     .on("mouseover", function () {
    //         focus.style("display", null);
    //     }).on("mouseout", function () {
    //     focus.style("display", "none");
    // }).on("mousemove", mousemove);
    // return chartObj;
    // function mousemove() {
    //     // Todo remake for new data
    //     var x0 = chartObj.xScale.invert(d3.mouse(this)[0]);
    //     // alert (x0);
    //     // var i = chartObj.bisectFunc(chartObj.curvesList[1], x0);
    //     // var d0 = chartObj.curvesList[i - 1],
    //     //     d1 = chartObj.curvesList[i];
    //     // try {
    //     //     var d = x0 - chartObj.xFunct(d0) > chartObj.xFunct(d1) - x0 ? d1 : d0;
    //     // } catch (e) { return;}
    //     var d = x0;
    //     minYo = chartObj.height;
    //     // chartObj.curvesList.forEach(function (curve) {
    //     //     curve.tooltip
    //     //         .attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + ","
    //     //             + chartObj.yScale(chartObj.yFunct(d)) + ")");
    //     //     curve.tooltip.select("text")
    //     //         .text(chartObj.yFormatter(chartObj.yFunct(d)));
    //     //     minYo = Math.min(minYo, chartObj.yScale(chartObj.yFunct(d)));
    //     // });
    //     // for (var y  in yObjs) {
    //     //     yObjs[y].tooltip.attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + "," + chartObj.yScale(yObjs[y].yFunct(d)) + ")");
    //     //     yObjs[y].tooltip.select("text").text(chartObj.yFormatter(yObjs[y].yFunct(d)));
    //     //     minY = Math.min(minY, chartObj.yScale(yObjs[y].yFunct(d)));
    //     // // }
        
    //     focus.select(".focus.line")
    //         .attr("transform", "translate(" + chartObj.xScale(d) + ")");
    //         // .attr("y1", minYo);
    //     focus.select(".focus.year")
    //         .text("Data: " + chartObj.xFormatter(d));
    //     // focus.select(".focus.line")
    //     //     .attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + ")");
    //     //     // .attr("y1", minYo);
    //     // focus.select(".focus.year")
    //     //     .text("Data: " + chartObj.xFormatter(chartObj.xFunct(d)));
    // }
};

Chart.bind = function (selector) {
    Chart.mainDiv = d3.select(selector);
    //chartObj.chartDiv = d3.select(chartSelector);
    d3.select(window)
        .on('resize.' + selector, Chart.resize);
    Chart.resize();
    return Chart;
};


Chart.curves("/pumps/");
