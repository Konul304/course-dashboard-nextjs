'use client';
import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const ChartComonent = () => {
    useEffect(() => {
        const data = [
            { year: 'Mon', count: 30 },
            { year: 'Tues', count: 20 },
            { year: "Wed", count: 40 },
            { year: "Thurs", count: 20 },
            { year: "Fri", count: 40 },
            { year: "Sat", count: 20 },
            { year: "Sun", count: 30 },
        ];

        (async function () {
            let chartStatus = Chart.getChart("myChart");
            if (chartStatus != undefined) {
                chartStatus.destroy();
            }

            new Chart(
                document.getElementById('myChart'),
                {
                    type: 'bar',
                    data: {
                        labels: data.map(row => row.year),
                        datasets: [
                            {
                                label: 'cost',
                                data: data.map(row => row.count),
                                backgroundColor: '#F5F6F8',
                                borderRadius: 8,
                                borderSkipped: false,
                                barThickness: 34,
                                hoverBackgroundColor: '#233B82',
                            }
                        ]
                    },
                    options: {
                        maintainAspectRatio: false,
                        responsive: true,
                        scales: {
                            y: {
                                display:false,
                                grid: {
                                    color: '#F5F6F8',
                                },
                                border: {
                                    display: false,
                                    dash: [4, 4],
                                },
                            },
                            x: {
                                ticks: { color: '#777D8B', beginAtZero: true, font: 1 },
                                grid: {
                                    display: false,
                                },
                                border: {
                                    display: false,
                                },
                                stacked: true,
                            },
                        },
                        plugins: {
                            legend: {
                                display: false
                            },
                            tooltip: {
                                enabled: false
                            }
                        }
                    }
                }
            );
        })()
    }, []);

    return (
        <>
            <div>
                <canvas id="myChart"></canvas>
            </div>
        </>
    );
}

export default ChartComonent;
