import React, { Component } from 'react';
import NewsComponent from './NewsComponent';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {

   static defaultProps = {
country : 'in',
pageSize : 7,
category : "general"
}
static propTypes = {
country : PropTypes.string,
pageSzie: PropTypes.number,
category : PropTypes.string
}
  
  constructor(){


 
  


    super();
    this.state = {  articles: [],
         loading : true, 
         page : 1
        
        
        }}


  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71f3424bb46f47dbae6daaaf628e4c5d&page=1&pageSize=${this.props.pageSize}`
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(data);
    this.setState({articles:parsedData.articles ,totalResults: parsedData.totalResults, loading : false})
  }

  backClick = async ()=>
  {
console.log("Back Page")
let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71f3424bb46f47dbae6daaaf628e4c5d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}` ;
this.setState({loading:true});    
let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
this.setState({
  page: this.state.page-1,
  articles: parsedData.articles,
  loading : false

})
 
  }

nextClick = async ()=>{
console.log("Next Page")
if(!(Math.ceil(this.state.page + 1> Math.ceil(this.state.totalResults/this.props.pageSize)))) {

let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=71f3424bb46f47dbae6daaaf628e4c5d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}` ;
this.setState({loading:true});    
let data = await fetch(url);
    let parsedData = await data.json()
    
this.setState({
  page: this.state.page + 1,
  articles: parsedData.articles,
  loading : false
})}
  }
  render() {





    return (
      
      <div className = "container my-4  ">
        <h1 className="text-center" style={{margin : '35px 0px'}}>NBN NEWS</h1>
{this.state.loading &&<Spinner/>}
        <div className='row'>
           {!this.state.loading && this.state.articles.map((element)=>{
            return <div className='col-md-4 '>
        <NewsComponent key={element.url} title ={element.title?element.title.slice(0,20):""} description={element.description?element.description.slice(0,88):""} imageUrl = {element.urlToImage} newsUrl={element.url}/>
        </div>
        })}
           <div className="container d-flex justify-content-around">
<button disabled ={this.state.page<=1}button type="button" className="btn btn-dark" onClick={this.backClick}>&larr;Back Page</button>
<button disabled = {this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}button type="button" className="btn btn-dark" onClick={this.nextClick}>Next Page &rarr;</button>
</div>
        
      </div>
      </div>
    )
  }
}

export default News