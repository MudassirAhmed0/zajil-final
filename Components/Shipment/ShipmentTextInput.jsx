

import infoIcon from '../../assets/images/svg/info.svg'
import Image from 'next/image'
import MobileInput from '../Popups/MobileInput'

const ShipmentTextInput = ({ masked, label, info, fontMedium, handleChange, id, value, issue, handleClick }) => {

  return (
    <div className='h-11 grow flex  items-start relative'>
      {masked ?
        // <input onChange={handleChange} id={id} value={value} placeholder={label} className={`text-darkGrey pb-5 placeholder-darkGrey border-b  ${ issue?  "border-red-500":"border-grey50Opa" } h-full w-full flex justify-between items-start ${fontMedium && 'medium-font'}`}/>  
        <MobileInput onChange={handleChange} id={id} value={value} placeholder={label} classes={`text-darkGrey pb-5 placeholder-darkGrey border-b  ${issue ? "border-red-500" : "border-grey50Opa"} h-full w-full flex justify-between items-start ${fontMedium && 'medium-font'}`} />
        :
        <input onChange={handleChange} id={id} value={value} placeholder={label} className={`text-darkGrey pb-5 placeholder-darkGrey border-b  ${issue ? "border-red-500" : "border-grey50Opa"} h-full w-full flex justify-between items-start ${fontMedium && 'medium-font'}`} />
      }{info && <span className='absolute top-0 right-2 cursor-pointer' onClick={handleClick}>
        <Image src={infoIcon} alt='Info' />
      </span>}
      {issue && <span className='absolute -bottom-7 text-red-500'>
        This Field is Required.
      </span>}
    </div>
  )
}

export default ShipmentTextInput