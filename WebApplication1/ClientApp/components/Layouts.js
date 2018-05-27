﻿import React, { Component } from 'react';
import  NavMenu  from './NavMenus';
 

export default class Layout extends Component{
    render() {
        return( <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-3'>
                    <NavMenu />
                </div>
                <div className='col-sm-9'>
                    {this.props.children}
                </div>
            </div>
        </div>);
    }
}