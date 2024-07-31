import Chart from 'react-apexcharts'

function RoundChart() {


    const data = {

        series: [40, 60,],
        options: {
            chart: {
                type: 'donut',
            },
            plotOptions: {
                pie: {
                  donut: {
                    size: '70%'
                  }
                }
              },
            legend: false,
            colors: ['#0F5A02', 'rgba(71, 170, 73, 0.2)',],
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },



    }



    return (
        <div >
            <div>
                <Chart options={data.options} series={data.series} type='donut' height={""} />
            </div>

        </div>
    )
}

export default RoundChart