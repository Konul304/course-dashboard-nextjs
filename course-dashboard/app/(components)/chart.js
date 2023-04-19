'use client';
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../(css)/chart.css'

const ChartComonent = ({ data }) => {
    const chartRef = useRef('')
    useEffect(() => {

        (async function () {
            let chartStatus = Chart.getChart("myChart");
            if (chartStatus != undefined) {
                chartStatus.destroy();
            }

            new Chart(
                chartRef.current,
                {
                    type: 'bar',
                    data: {
                        labels: data.map(row => row.week),
                        datasets: [
                            {
                                label: 'lessons',
                                data: data.map(row => row.count),
                                backgroundColor: '#d7ecff',
                                borderRadius: 20,
                                borderSkipped: false,
                                barThickness: 28,
                                hoverBackgroundColor: '#369FFF',
                            }
                        ]
                    },
                    options: {
                        maintainAspectRatio: false,
                        responsive: true,
                        scales: {
                            y: {
                                display: false,
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
                                enabled: true,
                                backgroundColor: '#ebf6ff',
                                bodyColor: 'black',
                                titleColor: 'black',
                                cornerRadius:12,
                                padding:10,
                            }
                        }
                    }
                },
            );
        })()
    }, []);

    return (
        <>
            <div>
                <canvas ref={chartRef} className='chart'></canvas>
            </div>
        </>
    );
}

export default ChartComonent;
