import {
    AvatarIcon, 
    EmailIcon,
    LocationIcon,
    PhoneIcon,
  } from '../../components/icons'


const RequesterInfo = ({requester}:any) => {
  return (
    <div className="flex flex-col gap-3 border-b-2 p-4">
    <h2 className="font-medium text-lg">صاحب(ة) الطلب</h2>
    <p className="flex items-center gap-3">
      <span className='text-secondary text-lg'>
        <AvatarIcon />
      </span>
      <span>
        {requester.firstname} {requester.lastname}
      </span>
    </p>
    <p className="flex items-center gap-3">
      <span className='text-secondary text-lg'>
        <LocationIcon />
      </span>
      <span>{requester.address}</span>
    </p>
    <p className="flex items-center gap-3">
      <span className='text-secondary text-lg'>
        <EmailIcon />
      </span>
      <span>{requester.email}</span>
    </p>
    <p className="flex items-center gap-3">
      <span className='text-secondary text-lg'>
        <PhoneIcon />
      </span>
      <span>{requester.phone}</span>
    </p>
    <p className="flex items-center gap-3">
      <span className='text-secondary text-lg'>
        <AvatarIcon />
      </span>
      <span>مواطن(ة) مغربي(ة): {requester.cinNumber}</span>
    </p>
  </div>
  )
}

export default RequesterInfo