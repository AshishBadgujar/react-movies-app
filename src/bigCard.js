import React, { useRef, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default function BigCard() {
    const location = useLocation();
    const movie = location.state.data;

    const chart0 = useRef(null);
    const chart02 = useRef(null);

    useLayoutEffect(() => {
        let chart = am4core.create("chartdiv", am4charts.GaugeChart);
        // Create axis
        let axis = chart.xAxes.push(new am4charts.ValueAxis());
        axis.min = 0;
        axis.max = 10;
        axis.strictMinMax = true;
        // Set inner radius
        chart.innerRadius = -20;
        // Add ranges
        let range = axis.axisRanges.create();
        range.value = 0;
        range.endValue = 4;
        range.axisFill.fillOpacity = 1;
        range.axisFill.fill = am4core.color("#f3384a");
        range.axisFill.zIndex = - 1;

        let range2 = axis.axisRanges.create();
        range2.value = 4;
        range2.endValue = 8;
        range2.axisFill.fillOpacity = 1;
        range2.axisFill.fill = am4core.color("#DBD56E");
        range2.axisFill.zIndex = - 1;

        let range3 = axis.axisRanges.create();
        range3.value = 8;
        range3.endValue = 10;
        range3.axisFill.fillOpacity = 1;
        range3.axisFill.fill = am4core.color("#2ef356");
        range3.axisFill.zIndex = - 1;
        // Add hand
        let hand = chart.hands.push(new am4charts.ClockHand());
        hand.value = Number(movie.imdbRating);
        // hand.value = 5;
        hand.pin.disabled = true;
        hand.fill = am4core.color("#2D93AD");
        hand.stroke = am4core.color("#2D93AD");
        hand.innerRadius = am4core.percent(50);
        hand.radius = am4core.percent(80);
        hand.startWidth = 15;

        chart0.current = chart;
        return () => {
            chart.dispose();
        };
    }, [movie]);

    useLayoutEffect(() => {
        let chart2 = am4core.create("chartdiv2", am4charts.XYChart);

        movie.Ratings.forEach(item => {
            item.Value = parseFloat(item.Value)
            if (item.Value > 10) {
                item.Value = item.Value / 10;
            }
        });

        chart2.data = movie.Ratings

        let categoryAxis = chart2.xAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "Source";
        categoryAxis.renderer.grid.template.location = 0;
        categoryAxis.renderer.minGridDistance = 10;

        categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
            if (target.dataItem && target.dataItem.index === 2) {
                return dy + 25;
            }
            return dy;
        });

        let valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
        valueAxis.dataFields.category = "Value";
        // Create series
        let series = chart2.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueY = "Value";
        series.dataFields.categoryX = "Source";
        series.name = "Rating";
        series.columns.template.tooltipText = "{categoryX}: [bold]{valueY}[/]";
        series.columns.template.fillOpacity = .8;

        let columnTemplate = series.columns.template;
        columnTemplate.strokeWidth = 1;
        columnTemplate.strokeOpacity = 1;

        chart02.current = chart2;
        return () => {
            chart2.dispose();
        };
    }, [movie])

    return (
        <div className="container" style={{ height: "100%" }}>

            <div className="card mb-3 mt-3 p-3 shadow" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={movie.Poster} style={{ width: "100%" }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body pt-0">
                            <h3 className="card-title mt-2">{movie.Title}({movie.Type})</h3><hr />
                            <p className="card-text"><span className="bold">Country : </span>{movie.Country}</p><hr />
                            <p className="card-text"><span className="bold">Language : </span>{movie.Language}</p><hr />
                            <p className="card-text"><span className="bold">Genre : </span>{movie.Genre}</p><hr />
                            <p className="card-text"><span className="bold">Actors : </span>{movie.Actors}</p><hr />
                            <p className="card-text"><span className="bold">Runtime : </span>{movie.Runtime}</p><hr />
                            <p className="card-text"><span className="bold">Released : </span>{movie.Released}</p><hr />
                            <p className="card-text"><span className="bold">Production : </span>{movie.Production}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around" }}>
                <div className="card mb-3 shadow" style={{ width: 460 }}>
                    <div className="card-body">
                        <div id="chartdiv" style={{ width: "100%", height: "200px" }}></div>
                    </div>
                    <div className="card-footer text-center">
                        <h5>IMDb Ratings</h5>
                    </div>
                </div>
                <div className="card mb-3 shadow" style={{ width: 460 }}>
                    <div className="card-body">
                        <div id="chartdiv2" style={{ width: "100%", height: "200px" }}></div>
                    </div>
                    <div className="card-footer text-center">
                        <h5>Other Ratings</h5>
                    </div>
                </div>

            </div>
            <div className="card shadow">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <p className="card-text"><span className="bold">Director : </span>{movie.Director}</p>
                        <p className="card-text"><span className="bold">IMDbVots : </span>{movie.imdbVots}</p>
                    </div><hr />
                    <div className="d-flex justify-content-between">
                        <p className="card-text"><span className="bold">Awards : </span>{movie.Awards}</p>
                        <p className="card-text"><span className="bold">Metascore : </span>{movie.Metascore}</p>
                    </div><hr />
                    <div className="d-flex justify-content-between">
                        <p className="card-text"><span className="bold">BoxOffice : </span>{movie.BoxOffice}</p>
                        <p className="card-text"><span className="bold">Rated : </span>{movie.Rated}</p>
                    </div><hr />
                    <p className="card-text"><span className="bold">Writer : </span>{movie.Writer}</p><hr />
                    <p className="card-text"><span className="bold">Plot : </span>{movie.Plot}</p><hr />
                    <p className="card-text"><span className="bold">Website : </span>{movie.Website}</p>
                </div>
            </div>

        </div >
    )
}
