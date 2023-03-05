import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Footer = ()=>{

    return(
        <footer className='site-footer'>
            <div className="container">
                <div className='address'>
                    <a>Citlight Surat</a>
                </div>
                <div className='contact'>
                    <a>123456789</a>
                    <br></br>
                    <a>office@arsa.com</a>
                </div>
                <div className='social'>
                    <FontAwesomeIcon icon={faInstagram} size='lg'/>
                    
                    <FontAwesomeIcon icon={faLinkedin} size='lg' />
                </div>
                <div className='copyright'>
                    <a>2023 Office Arsa</a>
                </div>
            </div>
        </footer>
    )
}
export default Footer;