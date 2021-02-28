import React from "react";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Gauge = () => {

    const config = {
        series: [72],
        options: {
            chart: {
                type: 'radialBar',
                offsetY: -20,
                sparkline: {
                    enabled: true
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -90,
                    endAngle: 90,
                    track: {
                        background: "#eee",
                        strokeWidth: '97%',
                        margin: 5, // margin is in pixels
                    },
                    dataLabels: {
                        name: {
                            show: true
                        },
                        value: {
                            offsetY: -42,
                            fontSize: '28px',
                            fontcolor: '#000'
                        },
                        style: {
                            colors: ["#0ff"]
                        }
                    }
                }
            },
            grid: {
                padding: {
                    top: -10
                }
            },
            foreColor: '#373d3f',
            fill: {
                colors: ['var(--brand-800)']
            },
            labels: ['Value Description'],
        }
    }

    return (
        <div >
            <Chart width={500} options={config.options} series={config.series} type={'radialBar'}/>
        </div>
    )
}

export default Gauge;