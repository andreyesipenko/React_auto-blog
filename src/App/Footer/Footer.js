import React from 'react';
import Menu from './../Header/Menu/Menu'
import './footer.scss'

class Footer extends React.Component {
	render () {
		return (
			<footer className='footer'>
                <div className="container">
                    <div className="footer__wrapper">
                        <div className="footer__rights">
                            @2020 Logwork. All Right Reserved.
                        </div>
                        <Menu />
                    </div>
                </div>
			</footer>
		)
	}
}

export default Footer;
