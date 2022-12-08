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
import { faker } from '@faker-js/faker';
import { useEffect } from 'react';

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
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'تطور عدد الطلبات المعالجة',
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
        data: ['424','1130','1698','2254','2781','3384','4018','4617','5264','6049','7147','8411',],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'عدد الطلبات المعالجة',
        data: ['2561','2994','2639','2517','2313','2782','3107','2519','2390','2010','2118','1784',],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
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
        <Line options={options} data={data} />;
        </div>
      </div>
    </>
  )
}

export default statistics
