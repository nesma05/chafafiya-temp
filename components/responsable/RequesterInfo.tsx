import {
    AvatarIcon, 
    EmailIcon,
    LocationIcon,
    PhoneIcon,
  } from '../../components/icons'


const RequesterInfo = ({request}:any) => {
  return (
    <div className="flex flex-col gap-3 border-b-2 p-4">
    <h2 className="font-medium text-lg">صاحب(ة) الطلب</h2>
    <p className="flex items-center gap-3">
      <span className='text-secondary text-lg'>
        <AvatarIcon />
      </span>
      <span>
        {request?.applicant.firstname} {request?.applicant.lastname}
      </span>
    </p>
    <p className="flex items-center gap-3">
      <span className='text-secondary text-lg'>
        <LocationIcon />
      </span>
      <span>{request?.applicant?.address}</span>
    </p>
    <p className="flex items-center gap-3">
      <span className='text-secondary text-lg'>
        <EmailIcon />
      </span>
      <span>{request?.applicant?.email}</span>
    </p>
    <p className="flex items-center gap-3">
      <span className='text-secondary text-lg'>
        <PhoneIcon />
      </span>
      <span>{request?.applicant?.phoneNumber}</span>
    </p>
    <p className="flex items-center gap-3">
      <span className='text-secondary text-lg'>
        <AvatarIcon />
      </span>
      <span>مواطن(ة) مغربي(ة): k350896</span>
    </p>
  </div>
  )
}

export default RequesterInfo