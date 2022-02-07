import React, { Component } from 'react';
import panda from '../components/img/Panda.jpg';

export default class Panda extends Component {

    render() {
        return (
            <div>
                <img src={panda} width="100" height="50" />
            </div>
        )
    }
}