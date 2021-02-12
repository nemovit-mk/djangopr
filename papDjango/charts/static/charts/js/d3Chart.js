// const data = JSON.parse(document.getElementById('forChart').textContent);
// const mydata = JSON.parse(data);
// console.log (mydata[0].fields.H1);

// hq
// [{"model": "charts.daten", "pk": 5, "fields": {"Br": 2.0, "Pumpentyp": "GP   -200M/  4x440", "Qn": 600.0, "Drehzahl": 2980.0, "Lrd": 427.0, "NWDS": 50.0, "NWSS": 100.0, "Pn": 16.0, "B": 0.0, "M": 0.0, "V": 0.0, "H1": 1108.4093908977954, "Q1": 0.0, "H2": 1103.4615359830075, "Q2": 141.18, "H3": 1077.7130176600456, "Q3": 317.65, "H4": 987.6412656143883, "Q4": 494.12, "H5": 962.2829325176394, "Q5": 529.41, "H6": 934.7088858982681, "Q6": 564.71, "H7": 767.3681793889864, "Q7": 741.15}}, {"model": "charts.daten", "pk": 5, "fields": {"Br": 2.0, "Pumpentyp": "GP   -200M/  4x440", "Qn": 600.0, "Drehzahl": 2980.0, "Lrd": 427.0, "NWDS": 50.0, "NWSS": 100.0, "Pn": 16.0, "B": 0.0, "M": 0.0, "V": 0.0, "H1": 1108.4093908977954, "Q1": 0.0, "H2": 1103.4615359830075, "Q2": 141.18, "H3": 1077.7130176600456, "Q3": 317.65, "H4": 987.6412656143883, "Q4": 494.12, "H5": 962.2829325176394, "Q5": 529.41, "H6": 934.7088858982681, "Q6": 564.71, "H7": 767.3681793889864, "Q7": 741.15}}, {"model": "charts.daten", "pk": 4, "fields": {"Br": 2.0, "Pumpentyp": "GP   -200M/  3x440", "Qn": 600.0, "Drehzahl": 2980.0, "Lrd": 427.0, "NWDS": 50.0, "NWSS": 100.0, "Pn": 16.0, "B": 0.0, "M": 0.0, "V": 0.0, "H1": 831.3070431733466, "Q1": 0.0, "H2": 827.5961519872554, "Q2": 141.18, "H3": 808.284763245034, "Q3": 317.65, "H4": 740.7309492107912, "Q4": 494.12, "H5": 721.7121993882295, "Q5": 529.41, "H6": 701.031664423701, "Q6": 564.71, "H7": 575.5261345417398, "Q7": 741.15}}, {"model": "charts.daten", "pk": 1, "fields": {"Br": 2.0, "Pumpentyp": "GP_D -200L/ 11x440", "Qn": 480.0, "Drehzahl": 2980.0, "Lrd": 412.0, "NWDS": 50.0, "NWSS": 100.0, "Pn": 16.0, "B": 0.0, "M": 0.0, "V": 0.0, "H1": 2977.606516734797, "Q1": 0.0, "H2": 2973.7719556257175, "Q2": 96.0, "H3": 2905.777760075604, "Q3": 256.0, "H4": 2611.903591309814, "Q4": 416.0, "H5": 2532.1789234602384, "Q5": 448.0, "H6": 2445.3791454217435, "Q6": 480.0, "H7": 1892.6161200437662, "Q7": 640.0}}]
// npsh
// [{"model": "charts.npsh50", "pk": 1, "fields": {"Pumpentyp": "KRC  - 65 /125", "Drehzahl": 1450.0, "H1": 1.13, "Q1": 15.0, "H2": 1.11, "Q2": 22.5, "H3": 1.1, "Q3": 30.0, "H4": 1.13, "Q4": 37.5, "H5": 1.18, "Q5": 45.0, "H6": 1.3, "Q6": 52.5, "H7": 1.45, "Q7": 60.0}}, {"model": "charts.npsh50", "pk": 8, "fields": {"Pumpentyp": "KRC  - 65 /315", "Drehzahl": 2975.0, "H1": 2.29, "Q1": 30.0, "H2": 3.07, "Q2": 49.0, "H3": 3.65, "Q3": 68.0, "H4": 4.25, "Q4": 87.0, "H5": 5.22, "Q5": 106.0, "H6": 6.7, "Q6": 125.0, "H7": 9.21, "Q7": 144.0}}]

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
var mydata; // a global
var chartDaten = {}
console.log('start');

d3.json("/pumps/").then(function(json) {
     
console.log('try');
//   if (error) return console.warn(error);
  
// console.log('no error');
  var pumps = [], curves = [];
  json.forEach(function(curve){
    pumps.push(String(curve.fields.Pumpentyp));
    curves.push([{ x: curve.fields.Q1, y: curve.fields.H1}, 
        { x: curve.fields.Q2, y: curve.fields.H2},
        { x: curve.fields.Q3, y: curve.fields.H3},
        { x: curve.fields.Q4, y: curve.fields.H4},
        { x: curve.fields.Q5, y: curve.fields.H5},
        { x: curve.fields.Q6, y: curve.fields.H6},
        { x: curve.fields.Q7, y: curve.fields.H7}
    ]);
    });
chartDaten = {
    pumps: pumps,
    curves: { curves: curves,
        labels: {
            xAxisLable: "flow",
            yAxisLable: "head"
        }},
        errors: null
};
  
var chart = makeApolloChart (chartDaten);
chart.bind("#container");
chart.render();
}).catch(function(error){console.log('error');});


// var pumps = [], curves = [];

// mydata.forEach(function(curve){
//     pumps.push(String(curve.fields.Pumpentyp));
//     curves.push([{ x: curve.fields.Q1, y: curve.fields.H1}, 
//         { x: curve.fields.Q2, y: curve.fields.H2},
//         { x: curve.fields.Q3, y: curve.fields.H3},
//         { x: curve.fields.Q4, y: curve.fields.H4},
//         { x: curve.fields.Q5, y: curve.fields.H5},
//         { x: curve.fields.Q6, y: curve.fields.H6},
//         { x: curve.fields.Q7, y: curve.fields.H7}
//     ]);
    
//     console.log(curves);
// });


// var chartDaten = {
//     pumps: pumps,
//     curves: { curves: curves,
//         labels: {
//             xAxisLable: "flow",
//             yAxisLable: "head"
//         }},
//         errors: null
// };
// console.log(chartDaten.curves);
// Data structure description
// Dataset
// dataset.pumps - pumpsList
// dataset.curves - curvesList
// pumpsList:
// pump, index
// pumps.designation
    // chartObj.xAxisLable = "flow";
    // // chartObj.yAxisLable = "head";
    // chartObj.pumpsList = dataset.pumps;
    // chartObj.curvesList = dataset.curves.curves;
    // chartObj.pumpsList.forEach(function (pump, index)
// // 
// var chart = makeApolloChart (chartDaten);
// chart.bind("#container");
// chart.render();

function makeApolloChart(dataset) { //, showList) {
    var chartObj = {};
    var color = d3.scaleOrdinal(d3.schemeCategory10);
    chartObj.xAxisLable = "flow";
    chartObj.yAxisLable = "head";
    chartObj.margin = {top: 15, right: 60, bottom: 30, left: 50};
    chartObj.width = 650 - chartObj.margin.left - chartObj.margin.right;
    chartObj.height = 480 - chartObj.margin.top - chartObj.margin.bottom;
    //todo check Data
    chartObj.pumpsList = dataset.pumps;
    chartObj.curvesList = dataset.curves.curves;
//// chartObj.npshList = dataset.npsh;
    // So we can pass the x and y as strings when creating the function
    // chartObj.xFunct = function(d){return d[xName]};
    // For each yObjs argument, create a yFunction
    // function getYFn(column) {
    //     return function (d) {
    //         return d[column];
    //     };
    // }
    //Todo check
    // Object instead of array
    chartObj.yFunct = function(d){return d.y};
    chartObj.xFunct = function(d){return d.x};
    // chartObj.bisect = d3.bisector(chartObj.xFunct).left; //< Can be overridden in definition
    // for (var pump in chartObj.pumpsList) {
    //     //console.log(y);
    //     yObjs[y].name = y;
    //     yObjs[y].yFunct = getYFn(yObjs[y].column); //Need this  list for the ymax function
    //     chartObj.yFuncts.push(yObjs[y].yFunct);
    // }
    //Formatter functions for the axes
    chartObj.formatAsNumber = d3.format(".0f");
    chartObj.formatAsDecimal = d3.format(".2f");
    chartObj.formatAsCurrency = d3.format("$.2f");
    chartObj.formatAsFloat = function (d) {
        if (d % 1 !== 0) {
            return d3.format(".2f")(d);
        } else {
            return d3.format(".0f")(d);
        }
    };
    chartObj.xFormatter = chartObj.formatAsFloat;
    chartObj.yFormatter = chartObj.formatAsFloat;
    chartObj.bisectFunc = d3.bisector(chartObj.xFunct).left;
    // chartObj.bisectYear = d3.bisector(chartObj.xFunct).left; //< Can be overridden in definition
    //Todo check scale function
    //Create scale functions
    var maxX = 0.0;
    var maxY = 0.0;
    chartObj.curvesList.forEach(function (curve) {
        var curveX = d3.max(curve, chartObj.xFunct);
        if (curveX > maxX) {maxX = curveX};
        var curveY = d3.max(curve, chartObj.yFunct);
        if (curveY > maxY) {maxY = curveY};
    });
    maxX = maxX*1.1;
    maxY = maxY*1.1;
    chartObj.xScale = d3.scaleLinear()
        .range([0, chartObj.width])
        .domain([0, maxX]); //< Can be overridden in definition
    // // Get the max of every yFunct
    // chartObj.max = function (fn) {
    //     return d3.max(chartObj.data, fn);
    // };
    chartObj.yScale = d3.scaleLinear()
        .range([chartObj.height, 0])
        .domain([0, maxY]);
    // chartObj.formatAsYear = d3.format("");
    //Create axis
    chartObj.xAxis = d3.axisBottom(chartObj.xScale).tickFormat(chartObj.xFormatter);
    // d3.svg.axis().scale(chartObj.xScale).orient("bottom").tickFormat(chartObj.xFormatter); //< Can be overridden in definition
    chartObj.yAxis = d3.axisLeft(chartObj.yScale).tickFormat(chartObj.yFormatter);
    // d3.svg.axis().scale(chartObj.yScale).orient("left").tickFormat(chartObj.yFormatter); //< Can be overridden in definition
    //Create Grid
    chartObj.xGrid = d3.axisBottom(chartObj.xScale).tickFormat('');//.tickSize(-chartObj.height).tickFormat('');//.ticks(10);
    chartObj.yGrid = d3.axisLeft(chartObj.yScale).tickFormat('');//.tickSize(-chartObj.width).tickFormat('')//;.ticks(10);
    // Building functions
    // Todo rebuild to my data structure
    // function getYScaleFn(yObj) {
    //     return function (d) {
    //         return chartObj.yScale(yObjs[yObj].yFunct(d));
    //     };
    // }
    chartObj.curvesList.forEach(function (curve) {
        curve.line = d3.line()
            .x(function(d) { return chartObj.xScale(chartObj.xFunct(d)); })
            .y(function(d) { return chartObj.yScale(chartObj.yFunct(d)); })
            .curve(d3.curveLinear); //(d3.curveCardinal);
        curve.dotX = function(d) { return chartObj.xScale(chartObj.xFunct(d)); };
        curve.dotY = function(d) { return chartObj.yScale(chartObj.yFunct(d)); };
    });
    // for (var yObj in yObjs) {
    //     yObjs[yObj].line = d3.line()
    //       .x(function(d) { return chartObj.xScale(chartObj.xFunct(d)); })
    //       .y(getYScaleFn(yObj))
    //       .curve(d3.curveCardinal);
    //    }
    //////////////////////////////////////////////////////////
    //        yObjs[yObj].dotX = function(d) { return chartObj.xScale(chartObj.xFunct(d)); };
    //        yObjs[yObj].dotY = getYScaleFn(yObj);
    chartObj.svg;
    // Change chart size according to window size
    chartObj.update_svg_size = function () {
        chartObj.width = parseInt(chartObj.chartDiv.style("width"), 10) - (chartObj.margin.left + chartObj.margin.right);
        chartObj.height = parseInt(chartObj.chartDiv.style("height"), 10) - (chartObj.margin.top + chartObj.margin.bottom);
        if (chartObj.width < (650 - chartObj.margin.left - chartObj.margin.right)) {
            chartObj.width = (650 - chartObj.margin.left - chartObj.margin.right);
            chartObj.height = 480 - chartObj.margin.top - chartObj.margin.bottom;
            }
        /* Update the range of the scale with new width/height */
        chartObj.xScale.range([0, chartObj.width]);
        chartObj.yScale.range([chartObj.height, 0]);
        chartObj.xGrid.tickSize(-chartObj.height);
        chartObj.yGrid.tickSize(-chartObj.width);
        if (!chartObj.svg) {return false;}
        /* Else Update the axis with the new scale */
        chartObj.svg.select('.x.axis')
            .attr("transform", "translate(0," + chartObj.height + ")")
            .call(chartObj.xAxis);
        chartObj.svg.select('.x.axis .label')
            .attr("x", chartObj.width / 2);
        chartObj.svg.select('.y.axis')
            .call(chartObj.yAxis);
        chartObj.svg.select('.y.axis .label')
            .attr("x", -chartObj.height / 2);
        // Create grids.
        chartObj.svg.select('.x.axis-grid')
            .attr('transform', 'translate(0,' + chartObj.height + ')')
            .call(chartObj.xGrid);
        chartObj.svg.select('.y.axis-grid')
            .call(chartObj.yGrid);
        /* Force D3 to recalculate and update the line */
        //Todo remake creation lines
        chartObj.curvesList.forEach(function (curve) {
            curve.path.attr("d", curve.line);
            curve.dots
                .attr("cx", curve.dotX)
                .attr("cy", curve.dotY);
        });
        // for (var y  in yObjs) {
        //     yObjs[y].path.attr("d", yObjs[y].line);
        //     yObjs[y].dots.attr("cx", yObjs[y].dotX)
        //         .attr("cy", yObjs[y].dotY);
        // }
        d3.selectAll(".focus.line").attr("y2", chartObj.height);
        chartObj.chartDiv.select('svg')
            .attr("width", chartObj.width + (chartObj.margin.left + chartObj.margin.right))
            .attr("height", chartObj.height + (chartObj.margin.top + chartObj.margin.bottom));
        chartObj.svg.select(".overlay")
            .attr("width", chartObj.width).attr("height", chartObj.height);
        return chartObj;
    };
    chartObj.bind = function (selector) {
        chartObj.mainDiv = d3.select(selector);
        // Add all the divs to make it centered and responsive
        chartObj.mainDiv
            .append("div")
            .attr("class", "inner-wrapper")
            .append("div")
            .attr("class", "outer-box")
            .append("div")
            .attr("class", "inner-box");
        chartSelector = selector + " .inner-box";
        chartObj.chartDiv = d3.select(chartSelector);
        d3.select(window)
            .on('resize.' + chartSelector, chartObj.update_svg_size);
        chartObj.update_svg_size();
        return chartObj;
    };
    // Render the chart
    chartObj.render = function () {
        //Create SVG element
        chartObj.svg = chartObj.chartDiv
            .append("svg")
            .attr("class", "chart-area")
            .attr("width", chartObj.width + (chartObj.margin.left + chartObj.margin.right))
            .attr("height", chartObj.height + (chartObj.margin.top + chartObj.margin.bottom))
            .append("g")
            .attr("transform", "translate(" + chartObj.margin.left + "," + chartObj.margin.top + ")");
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
        // for (var y  in yObjs) {
        //    // console.log(y);
        //     yObjs[y].path = chartObj.svg
        //         .append("path").datum(chartObj.data)
        //         .attr("class", "line")
        //         .attr("d", yObjs[y].line)
        //         .style("stroke", color(y))
        //         .attr("data-series", y)
        //         .on("mouseover", function () {
        //             focus.style("display", null);
        //         }).on("mouseout", function () {
        //             focus.transition().delay(700).style("display", "none");
        //         }).on("mousemove", mousemove);
        //////////////////////////////////////////////////////////
        //            //Todo remake dots drawing
        //            console.log(y);
        //             yObjs[y].dots = chartObj.svg//.append("g")
        //                        //d3.selectAll(".dot")
        //                        .selectAll(".dot")
        //                        .data(chartObj.data)
        //                        .enter()
        //                        .append("circle")
        //                        .attr("class", "dot")
        //                        .attr("r", 4)
        //                        .attr("cx", yObjs[y].dotX) //function(d){return chartObj.xScale(chartObj.xFunct(d))})
        //                        .attr("cy", yObjs[y].dotY) //function(d){return chartObj.yScale(yObjs[String(y)].yFunct(d))})
        //                        //.attr("fill", "none")
        //                        .attr("stroke", color(y));
        //        }
        // Draw Axis
        chartObj.svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + chartObj.height + ")")
            .call(chartObj.xAxis)
            .append("text")
            .attr("class", "label")
            .attr("x", chartObj.width / 2).attr("y", 30)
            .style("text-anchor", "middle")
            .text(chartObj.xAxisLable);
        chartObj.svg.append("g")
            .attr("class", "y axis")
            .call(chartObj.yAxis)
            .append("text")
            .attr("class", "label")
            .attr("transform", "rotate(-90)")
            .attr("y", -42)
            .attr("x", -chartObj.height / 2)
            .attr("dy", ".71em")
            .style("text-anchor", "middle")
            .text(chartObj.yAxisLable);
        // Draw Grid
        chartObj.svg.append("g")
            .attr("class", "x axis-grid")
            .attr('transform', 'translate(0,' + chartObj.height + ')')
            .call(chartObj.xGrid);
        chartObj.svg.append("g")
            .attr("class", "y axis-grid")
            .call(chartObj.yGrid);
        //Draw tooltips
        var focus = chartObj.svg
            .append("g")
            .attr("class", "focus")
            .style("display", "none");
        // Todo remake to new data structure
        chartObj.curvesList.forEach(function (curve) {
            curve.tooltip = focus.append("g");
            curve.tooltip.append("circle").attr("r", 5);
            curve.tooltip.append("rect").attr("x", 8).attr("y","-5").attr("width",22).attr("height",'0.75em');
            curve.tooltip.append("text").attr("x", 9).attr("dy", ".35em");
        });
        // for (var y  in yObjs) {
        //     yObjs[y].tooltip = focus.append("g");
        //     yObjs[y].tooltip.append("circle").attr("r", 5);
        //     yObjs[y].tooltip.append("rect").attr("x", 8).attr("y","-5").attr("width",22).attr("height",'0.75em');
        //     yObjs[y].tooltip.append("text").attr("x", 9).attr("dy", ".35em");
        // }
        // Year label
        focus
            .append("text")
            .attr("class", "focus year")
            .attr("x", 9)
            .attr("y", 7);
        // Focus line
        focus
            .append("line")
            .attr("class", "focus line")
            .attr("y1", 0)
            .attr("y2", chartObj.height);
        // Todo remake for new data
        //Draw legend
        var legend = chartObj.mainDiv.append('div').attr("class", "legend");
        chartObj.pumpsList.forEach(function (pump, index) {
            series = legend.append('div');
            series.append('div').attr("class", "series-marker").style("background-color", color(index));
            series.append('p').text(pump);
            chartObj.curvesList[index].legend = series;
        });
        // for (var y  in yObjs) {
        //     series = legend.append('div');
        //     series.append('div').attr("class", "series-marker").style("background-color", color(y));
        //     series.append('p').text(y);
        //     yObjs[y].legend = series;
        // }
        // Overlay to capture hover
        chartObj.svg
            .append("rect")
            .attr("class", "overlay")
            .attr("width", chartObj.width)
            .attr("height", chartObj.height)
            .on("mouseover", function () {
                focus.style("display", null);
            }).on("mouseout", function () {
            focus.style("display", "none");
        }).on("mousemove", mousemove);
        return chartObj;
        function mousemove() {
            // Todo remake for new data
            var x0 = chartObj.xScale.invert(d3.mouse(this)[0]);
            // alert (x0);
            // var i = chartObj.bisectFunc(chartObj.curvesList[1], x0);
            // var d0 = chartObj.curvesList[i - 1],
            //     d1 = chartObj.curvesList[i];
            // try {
            //     var d = x0 - chartObj.xFunct(d0) > chartObj.xFunct(d1) - x0 ? d1 : d0;
            // } catch (e) { return;}
            var d = x0;
            minYo = chartObj.height;
            // chartObj.curvesList.forEach(function (curve) {
            //     curve.tooltip
            //         .attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + ","
            //             + chartObj.yScale(chartObj.yFunct(d)) + ")");
            //     curve.tooltip.select("text")
            //         .text(chartObj.yFormatter(chartObj.yFunct(d)));
            //     minYo = Math.min(minYo, chartObj.yScale(chartObj.yFunct(d)));
            // });
            // for (var y  in yObjs) {
            //     yObjs[y].tooltip.attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + "," + chartObj.yScale(yObjs[y].yFunct(d)) + ")");
            //     yObjs[y].tooltip.select("text").text(chartObj.yFormatter(yObjs[y].yFunct(d)));
            //     minY = Math.min(minY, chartObj.yScale(yObjs[y].yFunct(d)));
            // // }
            
            focus.select(".focus.line")
                .attr("transform", "translate(" + chartObj.xScale(d) + ")");
                // .attr("y1", minYo);
            focus.select(".focus.year")
                .text("Data: " + chartObj.xFormatter(d));
            // focus.select(".focus.line")
            //     .attr("transform", "translate(" + chartObj.xScale(chartObj.xFunct(d)) + ")");
            //     // .attr("y1", minYo);
            // focus.select(".focus.year")
            //     .text("Data: " + chartObj.xFormatter(chartObj.xFunct(d)));
        }
        // .on('mousemove', function() { // mouse moving over canvas
        // var mouse = d3.mouse(this);
        // d3.select(".mouse-line")
        //   .attr("d", function() {
        //     var d = "M" + mouse[0] + "," + height;
        //     d += " " + mouse[0] + "," + 0;
        //     return d;
        //   });
        //
        // d3.selectAll(".mouse-per-line")
        //   .attr("transform", function(d, i) {
        //     console.log(width/mouse[0])
        //     var xDate = x.invert(mouse[0]),
        //         bisect = d3.bisector(function(d) { return d.date; }).right;
        //         idx = bisect(d.values, xDate);
        //
        //     var beginning = 0,
        //         end = lines[i].getTotalLength(),
        //         target = null;
        //
        //     while (true){
        //       target = Math.floor((beginning + end) / 2);
        //       pos = lines[i].getPointAtLength(target);
        //       if ((target === end || target === beginning) && pos.x !== mouse[0]) {
        //           break;
        //       }
        //       if (pos.x > mouse[0])      end = target;
        //       else if (pos.x < mouse[0]) beginning = target;
        //       else break; //position found
        //     }
        //
        //     d3.select(this).select('text')
        //       .text(y.invert(pos.y).toFixed(2));
        //
        //     return "translate(" + mouse[0] + "," + pos.y +")";
        //   });
        // });
    };
    return chartObj;
}

