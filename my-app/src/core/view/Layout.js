import React, { Component } from 'react'

import LayoutHeader from 'src/core/view/LayoutHeaderRedux'
import LayoutBody from 'src/core/view/LayoutBodyRedux'

export default class Layout extends Component {
    render() {
        return (
            <div>
                <LayoutHeader />
                <LayoutBody> 
                    
                </LayoutBody>
            </div>
        )
    }
}