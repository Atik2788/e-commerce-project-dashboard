import Chart from 'react-apexcharts';

const AdminDashboardChart = () => {
    
    const state = {
        series: [
          {
            name: 'Orders',
            data: [23, 34, 45, 56, 34, 16, 75, 90, 55, 60, 55, 80 ]
          },
          {
            name: 'Revenue',
            data: [63, 36, 14, 78, 54, 16, 26, 85, 16, 46, 50, 75 ]
          },
          {
            name: 'Sellers',
            data: [40, 36, 46, 25, 87, 69, 58, 85, 47, 75, 45, 85 ]
          }
        ],
        options: {
          color: ['#181ee8', '#181ee8'],
          plotOptions: {
            radius: 30
          },
          charts: {
            background: 'transparent',
            foreColor:  '#d0d2d6'
          },
          dataLabels: {
            enabled: false
          },
          strock: {
            show: true,
            curve: ['smooth', 'straight', 'stepline'],
            line: 'butt',
            colors: '#f0f0f0',
            width: .5,
            dashArray: 0
          },
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apl", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
          },
          legend: {
            position: 'top'
          },
          responsive: [
            {
                breakpoint: 565,
                yaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apl", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                  },
                options: {
                    plotOptions: {
                        bar: {
                            horizontal: true
                        }
                      },
                    chrt: {
                        height: '550px'
                    }
                },

            }
          ]
        }
    }

    return (
              <div className='w-full bg-[#39a290] p-4 rounded-md'>
                <Chart options={state.options} series={state.series} type='bar' height={350}/>
              </div>
    );
};

export default AdminDashboardChart;