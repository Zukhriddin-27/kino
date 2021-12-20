import React from 'react';
import Movie from "../component/Movie";
import Movies from "../component/Movies";
import Loader from "../component/Loader";
import Search from "../component/Search";
export default class Main extends React.Component{
    state={
        movies:[],
        loading:true
    }

    componentDidMount() {
        fetch('http://www.omdbapi.com/?apikey=329ffa13&s=Terminator')
            .then(response=>response.json())
            .then(({Search})=>this.setState({movies:Search, loading:false}))
    }
    searchMovies=(str,type='all')=>{
        this.setState({loading:true})
        fetch(`http://www.omdbapi.com/?apikey=329ffa13&s=${str}${type!=='all'? `&type=${type}`: ' '}`)
            .then(response=>response.json())
            .then(({Search})=>this.setState({movies:Search, loading:false}))
    }

    render(){


        return(
            <div className="container content">
                <Search searchMovi={this.searchMovies}/>
                {this.state.loading ?<Loader/>: (<Movies movies={this.state.movies}/>)}


            </div>
        )
    }
}