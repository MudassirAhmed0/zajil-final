import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import overlays from '../../styles/Overlays.module.css'

const CTA = () => {
  return (
    <div className={`md:pt-8 md:pb-8 pb-4 pt-6 md:px-11 px-4  bg-yellow relative overflow-hidden  ${styles.cta}	`}>
<span className={` ${overlays.logisticsOverlay}`}></span>
       <h4 className="text-grey text-4xl mb-1 mt-0.5 medium-font relative text-xl">
       Expand Your Business with Zajil   
        </h4> 
        <p className="md:text-lg text-xs text-grey light-font md:mb-12 mb-6 relative ">Talk to a KSA shipping and logistics expert at Zajil today.</p>
        <Link href='#' >
            <a  className='md:w-36 md:h-10  h-[55px]  rounded-md  transition-all duration-300  hover:tracking-wider  relative medium-font text-grey  shadow-md  hover:shadow-shadaw flex justify-center bg-white items-center hover:text-blue'>
                    Learn More

            </a>
        </Link>
    </div>
  )
}

export default CTA