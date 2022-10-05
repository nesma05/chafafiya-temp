export default function Example() {
  return (
    <ol className="relative border-r border-gray-400 p-4 dark:border-gray-700">
      <li className="mb-6 ml-4">
        <div className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-400 dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className=" text-gray-900 dark:text-white">التوصل بالطلب</h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          شتنبر 2022
        </time>
      </li>
      <li className="mb-6 ml-4">
        <div className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-400 dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className=" text-gray-900 dark:text-white">
          تمديد مدة معالجة الطلب لمدة عشرين (20) يوم عمل
        </h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          مارس 2022
        </time>
      </li>
      <li className="mb-6 ml-4">
        <div className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-400 dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className=" text-gray-900 dark:text-white">
          طلب عنصر إضافي من رئيس قسم المالية
        </h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          أبريل 2022
        </time>
      </li>
      <li className="mb-6 ml-4">
        <div className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-400 dark:border-gray-900 dark:bg-gray-700"></div>
        <h3 className=" text-gray-900 dark:text-white">
          إجابة رئيس قسم المالية
        </h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          أبريل 2022
        </time>
      </li>
    </ol>
  )
}
