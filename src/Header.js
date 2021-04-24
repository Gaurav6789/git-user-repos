import React, { PureComponent } from 'react'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className='header-page'>
                <img className='icon-image' src='https://github.githubassets.com/images/modules/logos_page/Octocat.png'/>
                Github Page
            </div>
        )
    }
}

export default Header