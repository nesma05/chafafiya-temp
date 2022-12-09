import { NextPage } from 'next'
import PageTitle from '../components/Layout/PageTitle'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useRef } from 'react'

const statistics: NextPage = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          font: {
            weight: 'bold',
          },
        },
      },
      y: {
        title: {
          display: true,
          text: 'عدد الطلبات',
          color: 'rgb(11, 83, 162)',
          font: {
            weight: 'bold',
            size: 16,
          },
        },
        ticks: {
          font: {
            weight: 'bold',
          },
        },
      },
    },
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          font: {
            weight: 'bold',
          },
        },
      },

      title: {
        display: true,
        text: 'تطور عدد الطلبات المعالجة',
        font: {
          size: 24,
        },
      },
    },
  }

  const labels = [
    '2022 يناير',
    '2022 فبراير',
    '2022 مارس',
    '2022 أبريل',
    '2022 ماي',
    '2022 يونيو',
    '2022 يوليوز',
    '2022 غشت',
    '2022 شتنبر',
    '2022 أكتوبر',
    '2022 نونبر',
    '2022 دجنبر',
  ]

  const data = {
    labels,
    datasets: [
      {
        label: 'عدد الطلبات في طور المعالجة',
        data: [
          '424',
          '1130',
          '1698',
          '2254',
          '2781',
          '3384',
          '4018',
          '4617',
          '5264',
          '6049',
          '7147',
          '8411',
        ],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'عدد الطلبات المعالجة',
        data: [
          '2561',
          '2994',
          '2639',
          '2517',
          '2313',
          '2782',
          '3107',
          '2519',
          '2390',
          '2010',
          '2118',
          '1784',
        ],
        borderColor: 'rgb(11, 83, 162)',
        backgroundColor: 'rgba(11, 83, 162, 0.5)',
      },
    ],
  }

  const plugin: any = {
    id: 'chartBgColor',
    beforeDraw: (chart: any) => {
      const { ctx } = chart
      ctx.save()
      ctx.globalCompositeOperation = 'destination-over'
      ctx.fillStyle = 'white'
      ctx.fillRect(0, 0, chart.width, chart.height)
      ctx.restore()
    },
    afterDatasetsDraw: function (chart: any) {
      const { ctx } = chart

      chart.data.datasets.forEach(function (dataset: any, i: any) {
        var meta = chart.getDatasetMeta(i)
        if (!meta.hidden) {
          meta.data.forEach(function (element: any, index: any) {
            ctx.fillStyle = dataset.borderColor

            const fontSize = 16

            // Just naively convert to string for now
            const dataString = dataset.data[index].toString()

            // Make sure alignment settings are correct
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'

            const padding = 5
            const position = element.tooltipPosition()
            ctx.fillText(
              dataString,
              position.x,
              position.y - fontSize / 2 - padding
            )
          })
        }
      })
    },
  }

  const chartRef = useRef<any>(null)

  const handleClick = () => {
    const link = document.createElement('a')
    link.download = 'تطور عدد الطلبات المعالجة'
    link.href = chartRef.current?.toBase64Image()
    link.click()
  }

  return (
    <>
      <PageTitle>إحصائيات</PageTitle>
      <div className="mx-auto my-20 w-[80%]">
        <div className="rounded bg-gray-200 shadow-lg">
          <div className="mx-auto flex w-[80%] flex-col gap-4 py-10">
            <div className="flex items-center justify-start gap-2">
              <label className="basis-[15%] text-left">المؤشر:</label>
              <select
                name="domain"
                className="w-full flex-1 rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
              >
                <option> عدد الطلبات المعالجة </option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="basis-[15%] text-left">نوع الإدارة:</label>
              <select
                name="subDomain"
                className="w-full flex-1 rounded-md border border-gray-300 bg-white py-2 px-3 text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
              >
                <option> جميع الإدارات </option>
              </select>
            </div>
            <div className="flex gap-2">
              <div className="flex basis-1/2 items-center gap-2">
                <label className="basis-[47%] text-left">من:</label>
                <input
                  className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  type="date"
                  name="from"
                />
              </div>
              <div className="flex basis-1/2 items-center gap-2">
                <label>إلى:</label>
                <input
                  className="text-md w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
                  type="date"
                  name="to"
                />
              </div>
            </div>
            <div className="flex items-center justify-start gap-2">
              <div className="basis-[15%]"></div>
              <button className="rounded bg-main py-1 px-2.5 text-white">
                بحث
              </button>
            </div>
          </div>
        </div>
        <div className="my-5 h-1 w-full rounded bg-main"></div>
        <div>
          <Line
            ref={chartRef}
            options={options}
            data={data}
            plugins={[plugin]}
          />
        </div>
        <button
          onClick={handleClick}
          className="rounded bg-main py-1 px-2.5 text-white"
        >
          تحميل
        </button>
      </div>
    </>
  )
}

export default statistics
