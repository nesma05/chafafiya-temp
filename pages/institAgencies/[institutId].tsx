import { NextPage } from 'next'
import {
  AvatarIcon,
  CheckedIcon,
  ClockIcon,
  DocumentIcon,
  EmailIcon,
  LocationIcon,
  PhoneIcon,
  SandTimerIcon,
  SearchIcon,
} from '../../components/icons'
import PageTitle from '../../components/Layout/PageTitle'
import TreatedRequests from '../../components/searchFilter/TreatedRequests'
const InstitAgencies: NextPage = () => {
  return (
    <div>
      <PageTitle>المؤسسات والهيئات</PageTitle>
      <div className="mx-auto my-20 flex w-[80%] items-start gap-4 text-sm">
        <div className="w-[30%] p-3 pb-10 shadow-lg">
          <h3 className="my-4 font-bold text-main underline">
            معطيات الإتصال الخاصة بالمؤسسة أو الهيئة المعنية:
          </h3>
          <div className="flex flex-col gap-2 pr-1.5">
            <p className="flex items-center gap-3">
              <span className="text-lg text-main">
                <LocationIcon />
              </span>
              <span>
                وزارة الأوقاف والشؤون الإسلامية المشور السعيد - الرباط - المغرب
              </span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-lg text-main">
                <EmailIcon />
              </span>
              <span>contact@houbous.gov.ma</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-lg text-main">
                <PhoneIcon />
              </span>
              <span>(212) 5 37 76 68 01</span>
            </p>
          </div>
          <h3 className="my-4 font-bold text-main underline">
            معطيات الإتصال الخاصة بالشخص (أو الأشخاص) المكلف بالمعلومات:
          </h3>
          <div className="flex flex-col gap-2 pr-1.5">
            <p className="font-bold">الشخص المكلف بالمعلومات</p>
            <p className="flex items-center gap-3">
              <span className="text-lg text-main">
                <AvatarIcon />
              </span>
              <span>أحمد الوكلي</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-lg text-main">
                <EmailIcon />
              </span>
              <span>ouakili@houbous.gov.ma</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-lg text-main">
                <PhoneIcon />
              </span>
              <span>(212) 5 37 76 68 01</span>
            </p>
          </div>
          <div className="mt-4 flex flex-col gap-2 pr-1.5">
            <p className="pr-1 font-bold">الشخص المكلف بالشكايات</p>
            <p className="flex items-center gap-3">
              <span className="text-lg text-main">
                <AvatarIcon />
              </span>
              <span>سعيد المرابطي</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-lg text-main">
                <EmailIcon />
              </span>
              <span>mourabiti@houbous.gov.ma</span>
            </p>
            <p className="flex items-center gap-3">
              <span className="text-lg text-main">
                <PhoneIcon />
              </span>
              <span>(212) 5 37 76 68 01</span>
            </p>
          </div>
        </div>
        <div className="flex-1 p-2">
          <h2 className="text-lg font-bold text-main">
            وزارة الأوقاف والشؤون الإسلامية
          </h2>
          <h3 className="mt-1 text-xs">
            مديرية التعليم العتيق و محو الأمية بالمساجد
          </h3>
          <div className="my-8 flex gap-7 pr-2">
            <div className="border-r-4 border-main pr-4">
              <div className="mb-1 flex items-center gap-2">
                <span className="text-xl">
                  <DocumentIcon />
                </span>
                <span className="text-xl font-bold">35</span>
              </div>
              <p>عدد الطلبات المقدمة</p>
            </div>
            <div className="border-r-4 border-main pr-4">
              <div className="mb-1 flex items-center gap-2 ">
                <span className="text-xl">
                  <CheckedIcon />
                </span>
                <span className="text-xl font-bold">22</span>
              </div>
              <p>عدد الطلبات المعالجة</p>
            </div>
            <div className="border-r-4 border-main pr-4">
              <div className="mb-1 flex items-center gap-2 ">
                <span className="text-xl">
                  <SandTimerIcon />
                </span>
                <span className="text-xl font-bold">13</span>
              </div>
              <p>عدد الطلبات في طور المعالجة</p>
            </div>
            <div className="border-r-4 border-main pr-4">
              <div className="mb-1 flex items-center gap-2 ">
                <span className="text-xl">
                  <ClockIcon />
                </span>
                <span className="text-xl font-bold">35 يوما</span>
              </div>
              <p>متوسط مدة الإجابة</p>
            </div>
          </div>
          <div>
            <h5 className="mb-1 font-bold underline">
              مهام المؤسسة أو الهيئة المعنية
            </h5>
            <p className="pr-2 text-justify leading-6">
              بعد إعnن استقnل اCغرب انتقلت مؤسسة الوقف من نظارة النظار و بنيقة
              اfحباس، كما كان يطلق عليها خnل فترة ا6ستعمار ، إلى مرتبة الوزارة
              ضمن أول هيكلة عصرية لحكومة مختصة بتسيير الشأن العام وعرفت هذه
              الوزارة ب«وزارة اfحباس» من 27 يناير 1955 إلى 27 أكتوبر 1963 أي خnل
              العهد الذي تولى فيه شؤونها محمد اCختار السوسي، ثم تلتها بعد ذلك
              فترة فراغ لم يعx خnلها أي وزير وإن كانت اCؤسسة استمرت قائمة،
              وامتدت هذه الفترة إلى حدود سنة 1963 عندما ضمت إليها وزارة الشؤون
              ا,سnمية وأصبحت تعرف باسم : وزارة اfوقاف والشؤون ا,سnمية. با,ضافة
              إلى ا6ختصاصات العامة تتولى وزارة اfوقاف والشئون ا,سnمية ا6ختصاصات
              التالية:
            </p>
            <p className="pr-4 leading-6">
              قامة اCساجد وإدارتها وا,شراف عليها.
              <br />
              نشر الثقافة ا,سnمية وتنمية الوعي الديني.
              <br />
              توثيق العnقات مع الهيئات واCنظمات ا,سnمية في العالم.
              <br />
              إدارة شؤون اfوقاف وا,شراف عليها ورعايتها واستثمار اCداخيل اCتحققة
              منها.
              <br />
              ا,شراف على شؤون الحج.
              <br />
              ا,شراف على هيئة ا,فتاء الشرعي.
              <br />
              العمل على تشجيع وقف اfموال على جهات البر وتوسيع نطاق اfوقاف
              الخيرية.
              <br />
              إقامة اCساجد والترخيص بها حسب احتياجات اCناطق اCختلفة، والعمل على
              صيانتها وتأثيثها، واCحافظة عليها، ورعاية جميع شؤونها. العمل على
              تشجيع تحفيظ القرآن الكريم وتجويده في اCساجد.
              <br />
              وضع سياسة التكوين اfساسي و اCستمر لفائدة القيمx الدينيx من أجل
              تحسx أدائهم والرفع من مستوى تكوينهم.
              <br />
              ا,شراف على برنامج محو اfمية باCساجد، والعمل على تطويره بما يستجيب
              لحاجات اCستفيدين ويواكب اCستجدات.{' '}
            </p>
          </div>
          <div>
            <h5 className="mt-4 font-bold underline">
              قائمة بالمواقع الإلكترونية الخاصة بالمؤسسة أو الهيئة المعنية
            </h5>

            <div className="relative overflow-x-auto my-8">
              <table className="w-full text-right text-sm text-gray-500 dark:text-gray-400">
                <thead className=" bg-gray-50 uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="py-3 px-6">
                      Site web
                    </th>
                    <th scope="col" className="py-3 px-6">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td
                      scope="row"
                      className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                    >
                      https://www.habous.gov.ma/
                    </td>
                    <td className="py-4 px-6">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius tempora temporibus error est repudiandae maxime
                      accusantium, nemo optio fugiat harum!
                    </td>
                  </tr>
                  <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                    <td
                      scope="row"
                      className="whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white"
                    >
                      https://www.habous.gov.ma/
                    </td>
                    <td className="py-4 px-6">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Libero quas assumenda animi doloribus obcaecati optio ex
                      quia, dolores tenetur quaerat.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-10 text-center">
            <button
              type="submit"
              className="rounded-lg bg-main px-10 py-3 text-center font-medium text-white hover:bg-main_dark"
            >
              إيداع طلب إلى مديرية التعليم العتيق و محو الأمية بالمساجد
            </button>
          </div>
        </div>
      </div>
      <h2 className='w-[80%] pr-2 text-lg font-bold text-main mx-auto'>
      الطلبات المقدمة إلى وزارة الأوقاف والشؤون الإسلامية (مديرية التعليم العتيق و محو الأمية بالمساجد)
      </h2>
      <div className="w-[80%] mx-auto mb-20 flex text-sm">
        <div className="basis-1/4 p-2">
          <div>
            <h3 className="bg-gray-200 p-2">وضعية الطلب</h3>
          </div>
          <div className="my-4 flex flex-col gap-2 px-2">
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="institutions"
              />
              <label>معالجة</label>
            </div>
            <div>
              <input
                type="radio"
                name="type"
                className="ml-2"
                value="regions"
              />
              <label>مرفوضة</label>
            </div>
          </div>
          <div>
            <h3 className="bg-gray-200 p-2">الفترة</h3>
          </div>
          <div>
            <input
              className="text-md my-2 w-full rounded-md border border-gray-300 p-3 text-sm text-gray-600 shadow-sm focus:border-cyan-500 focus:outline-none focus:ring-cyan-500"
              type="date"
              name="to"
            />
          </div>
        </div>
        <div className="basis-3/4 p-2">
          <div className="relative w-full">
            <input
              type="text"
              className="w-full rounded-md border px-3 py-3 pr-12 text-sm shadow-sm focus:border-main focus:outline-main"
              placeholder="البحث في طلبات المعلومات"
            />

            <span className="absolute inset-y-0 right-0 inline-flex items-center overflow-hidden  px-3  text-xl text-gray-400">
              <SearchIcon />
            </span>
          </div>
          <h3 className="my-4 mb-2 text-lg">عدد النتائج 22</h3>

          <div>
            <h4 className="mb-2 text-main">
              لائحة معطيات مكانية خاصة بالإدارات العمومية
            </h4>
            <p className="mb-2 text-gray-700">
              تيح هذه البوابة للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين
              بالمغرب بصفة قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا
              للقانون 13-31 المتعلق بالحق في الحصول على المعلوماتتيح هذه البوابة
              للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين بالمغرب بصفة
              قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا للقانون 13-31
              المتعلق بالحق في الحصول على المعلومات
            </p>
            <h4 className="mb-2 text-main">
              لائحة معطيات مكانية خاصة بالإدارات العمومية
            </h4>
            <p className="mb-2 text-gray-700">
              تيح هذه البوابة للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين
              بالمغرب بصفة قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا
              للقانون 13-31 المتعلق بالحق في الحصول على المعلوماتتيح هذه البوابة
              للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين بالمغرب بصفة
              قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا للقانون 13-31
              المتعلق بالحق في الحصول على المعلومات
            </p>
            <h4 className="mb-2 text-main">
              لائحة معطيات مكانية خاصة بالإدارات العمومية
            </h4>
            <p className="mb-2 text-gray-700">
              تيح هذه البوابة للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين
              بالمغرب بصفة قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا
              للقانون 13-31 المتعلق بالحق في الحصول على المعلوماتتيح هذه البوابة
              للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين بالمغرب بصفة
              قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا للقانون 13-31
              المتعلق بالحق في الحصول على المعلومات
            </p>
            <h4 className="mb-2 text-main">
              لائحة معطيات مكانية خاصة بالإدارات العمومية
            </h4>
            <p className="mb-2 text-gray-700">
              تيح هذه البوابة للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين
              بالمغرب بصفة قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا
              للقانون 13-31 المتعلق بالحق في الحصول على المعلوماتتيح هذه البوابة
              للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين بالمغرب بصفة
              قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا للقانون 13-31
              المتعلق بالحق في الحصول على المعلومات
            </p>
            <h4 className="mb-2 text-main">
              لائحة معطيات مكانية خاصة بالإدارات العمومية
            </h4>
            <p className="mb-2 text-gray-700">
              تيح هذه البوابة للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين
              بالمغرب بصفة قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا
              للقانون 13-31 المتعلق بالحق في الحصول على المعلوماتتيح هذه البوابة
              للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين بالمغرب بصفة
              قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا للقانون 13-31
              المتعلق بالحق في الحصول على المعلومات
            </p>
            <h4 className="mb-2 text-main">
              لائحة معطيات مكانية خاصة بالإدارات العمومية
            </h4>
            <p className="mb-2 text-gray-700">
              تيح هذه البوابة للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين
              بالمغرب بصفة قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا
              للقانون 13-31 المتعلق بالحق في الحصول على المعلوماتتيح هذه البوابة
              للمواطنات والمواطنين وكذا الأشخاص الأجانب المقيمين بالمغرب بصفة
              قانونية تقديم وتتبع طلبات الحصول على المعلومات وفقا للقانون 13-31
              المتعلق بالحق في الحصول على المعلومات
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default InstitAgencies
