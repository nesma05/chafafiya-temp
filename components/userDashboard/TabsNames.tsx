
const TabsNames = ({ toggleIndex, handleToggle }: any) => {

  return (
    <div className="mx-10 mt-6 flex bg-white w-fit rounded-md">
      <p
        onClick={() => handleToggle(1)}
        className={`p-2 ${
          toggleIndex === 1 && 'border-b-2 border-main'
        }  cursor-pointer`}
      >
        تتبع الطلبات
      </p>
      <p
        onClick={() => handleToggle(2)}
        className={`p-2 ${
          toggleIndex === 2 && 'border-b-2 border-main'
        }  cursor-pointer`}
      >
       تتبع الشكايات الموجهة إلى المؤسسة
       
      </p>
      <p
        onClick={() => handleToggle(3)}
        className={`p-2 ${
          toggleIndex === 3 && 'border-b-2 border-main'
        }  cursor-pointer`}
      >
        تتبع الشكايات الموجهة إلى اللجنة
       
      </p>
    </div>
  )
}

export default TabsNames
