import React,{Component} from 'react';
import Proptype from 'prop-types';
import {ButtonBackToHome} from '../components/ButtonBackToHome'
import 'bulma/css/bulma.css';
import '../App.css'
const API_KEY = 'ed405f7a'


export class Detail extends Component{
    static propType ={
        match: Proptype.shape({
            params: Proptype.object,
            isExact: Proptype.bool,
            path: Proptype.string,
            url: Proptype.string
        })

    }
    state={movie: {}}
    _fetchMovie({id}){
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(res => res.json())
        .then(movie => {
        console.log({movie})
        this.setState({movie}) 
        })
    }
    _goBack(){
        window.history.back()
    }
    componentDidMount(){
        const {movieId}= this.props.match.params
        this._fetchMovie({id:movieId})
    }
    render(){
        const {Title,Poster,Actors,Type,Plot,Genre,Runtime}=this.state.movie
        return(
            <div className='container'>
                <div class="card cardDetail">
                <h1 className='title'>{Title}</h1>
                <img src={Poster}/>
                <h3 className='text'><strong>Actors:</strong> {Actors}</h3>
                <h3 className='text'><strong>Genre:</strong> {Genre}</h3>
        <span className='text' ><strong>{Type} - Duration:</strong> {Runtime}</span>
            <p className='text'>{Plot}</p>
                <ButtonBackToHome />
                </div>
            </div>
        )
    }
}