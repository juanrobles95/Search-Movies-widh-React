import React,{Component} from 'react'
import {Title} from '../components/Title';
import {SearchFrom} from '../components/SearchFrom';
import { MovieList } from '../components/MoviesList';
import { GoToGitHub } from '../components/GoToGitHub'
import { Popcorn } from '../components/Popcorn'
export class Home extends Component{
    state = { usedSearch:false ,results: []}
    
    _handleResults=(results)=>{
      this.setState({results, usedSearch:true})
    }
    _renderResults(){
      return this.state.results.length === 0
      ? <p className='text'>Sorry! Results not found</p>
      : <MovieList movies={this.state.results}/>
    }
    render(){
        return(
            <div className='Container'>
                <Popcorn />
                <Title>Search Movies </Title>
            <div className='SearchFrom-wrapper'>
                <SearchFrom onResults={this._handleResults}/>
            </div>
                {this.state.usedSearch
                ? this._renderResults()
                : <small className='text'>Use de form to search a Movie</small>}
                <GoToGitHub/>
            </div>
        )
    }
}