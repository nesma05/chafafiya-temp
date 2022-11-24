export default function Example() {
  return (
    <div>
      <h2 className="font-medium mb-3 text-lg">مسار الشكاية</h2>
   
    <ol className="relative border-r border-main p-4 ">
      <li className="mb-6 ml-4">
        <div className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-secondary"></div>
        <h3 className=" text-gray-900 dark:text-white">التوصل باشكاية</h3>
        <time className="mb-1 text-xs font-normal leading-none text-gray-400 ">
          شتنبر 2022
        </time>
      </li>
      <li className="mb-6 ml-4">
        <div className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-secondary"></div>
        <h3 className=" text-gray-900">
          تمديد مدة معالجة الشكاية لمدة عشرين (20) يوم عمل
        </h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400 ">
          مارس 2022
        </time>
      </li>
      <li className="mb-6 ml-4">
        <div className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-secondary"></div>
        <h3 className=" text-gray-900">
          طلب عنصر إضافي من رئيس قسم المالية
        </h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400">
          أبريل 2022
        </time>
      </li>
      <li className="mb-6 ml-4">
        <div className="absolute -right-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-secondary"></div>
        <h3 className=" text-gray-900 dark:text-white">
          إجابة رئيس قسم المالية
        </h3>
        <time className="mb-1 text-sm font-normal leading-none text-gray-400">
          أبريل 2022
        </time>
      </li>
    </ol>
    </div>
  )
}
