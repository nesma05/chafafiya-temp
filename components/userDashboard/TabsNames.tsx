
const TabsNames = ({ toggleIndex, handleToggle }: any) => {

  return (
    <div className="mx-10 mt-6 flex w-fit rounded-md overflow-hidden">
      <p
        onClick={() => handleToggle(1)}
        className={`py-2 px-3 ${
          toggleIndex === 1 && 'border-b-2 border-main bg-white' 
        }  cursor-pointer`}
      >
        تتبع الطلبات
      </p>
      <p
        onClick={() => handleToggle(2)}
        className={`py-2 px-3 ${
          toggleIndex === 2 && 'border-b-2 border-main bg-white'
        }  cursor-pointer`}
      >
       تتبع الشكايات الموجهة إلى المؤسسة
       
      </p>
      <p
        onClick={() => handleToggle(3)}
        className={`py-2 px-3 ${
          toggleIndex === 3 && 'border-b-2 border-main bg-white'
        }  cursor-pointer`}
      >
        تتبع الشكايات الموجهة إلى اللجنة
       
      </p>
    </div>
  )
}

export default TabsNames
