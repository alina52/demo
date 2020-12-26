import React, { Component } from 'react'
import WorldMap from 'src/map/view/WorldMapRedux'

export default class Map extends Component {
    render() {
        return (
            <div>
                <WorldMap />
            </div>
        )
    }
}