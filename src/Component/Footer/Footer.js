import React from 'react'
import '../Footer/Footer.css'
import image from '../../assets/footer.png'


const Footer = () => {
    return (
        <div className='footer'>
        <footer className="blockquote-footer">
        GoMyCode 2021 <cite title="Source Title"> By Yass Yassine</cite>
        </footer>
        
        <p><img src={image} alt='logo' width='30px'/></p>       
        
        </div>
    )
}

export default Footer
