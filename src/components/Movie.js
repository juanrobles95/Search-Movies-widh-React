import React, {Component} from 'react'
import Proptypes from 'prop-types'
import {Link} from 'react-router-dom'

export class Movie extends Component{
    static propTypes ={
        id: Proptypes.string,
        title: Proptypes.string,
        year: Proptypes.string,
        poster:Proptypes.string
    }
    render(){
      const {id,title, year , poster}= this.props
        return(
            <Link to={`/detail/${id}`} className="card">
                <div className="card-content">
                    <figure className="image">
                    <img 
                    alt={title}
                    src={poster}
                     />
                    </figure>
                </div>
                <div className="media-content">
                    <p className="title is-4 textMovie">{title}</p>
                    <p className="subtitle is-6 textMovie">{year}</p>
                </div>
            </Link>
              
        )
    }
}