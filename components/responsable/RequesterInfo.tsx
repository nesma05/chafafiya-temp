import {
    AvatarIcon, 
    EmailIcon,
    LacationIcon,
    PhoneIcon,
  } from '../../components/icons'


const RequesterInfo = ({requester}:any) => {
  return (
    <div className="flex flex-col gap-3 border-b-2 p-4">
    <h2 className="font-medium text-lg">صاحب(ة) الطلب</h2>
    <p className="flex items-center gap-3">
      <span>
        <AvatarIcon />
      </span>
      <span>
        {requester.firstname} {requester.lastname}
      </span>
    </p>
    <p className="flex items-center gap-3">
      <span>
        <LacationIcon />
      </span>
      <span>{requester.address}</span>
    </p>
    <p className="flex items-center gap-3">
      <span>
        <EmailIcon />
      </span>
      <span>{requester.email}</span>
    </p>
    <p className="flex items-center gap-3">
      <span>
        <PhoneIcon />
      </span>
      <span>{requester.phone}</span>
    </p>
    <p className="flex items-center gap-3">
      <span>
        <AvatarIcon />
      </span>
      <span>مواطن(ة) مغربي(ة): {requester.cinNumber}</span>
    </p>
  </div>
  )
}

export default RequesterInfo