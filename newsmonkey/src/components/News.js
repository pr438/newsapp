import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


export default class extends Component {
 
  static defaultProps={
    country:'in',
    pageSize:5,
    category:'General'
  }
  static propTypes ={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page:1,
      totalResults:0
    };
    document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
  }

 capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  async updatenews(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    //fetch api is like a basic getserverresponse method which will send request to the server and get us the data 
    this.setState({
      loading:true
    })
    let data =  await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults,loading:false});
    this.props.setProgress(100);

  }
  //this method will run after the render method
  async componentDidMount(){
    debugger;
    this.updatenews();
  }
  fetchMoreData=async()=>{
    await this.setState({page:this.state.page +1}, () => {
      console.log({page:this.state.page})}
    );
    let pageNo = this.state.page +1;
    //fetch api is like a basic getserverresponse method which will send request to the server and get us the data 
    await this.setState({
      loading:true
    })
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey= ${this.props.category}&page=${pageNo}&pageSize=${this.props.pageSize}`;
    let data =  await fetch(url);
    let parsedData = await data.json();
    await this.setState({articles:this.state.articles.concat(parsedData.articles),totalResults:parsedData.totalResults,loading:false});
  }
  render() {
    return (
      <div className="container my-3">
        {/* {this.state.loading && <Spinner/>} */}
        <h2 className="text-center">
          NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)}{" "}
          HeadLines
        </h2>

        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {
                return (
                  <div className="col-md-4" key={element.url}>
                    <NewsItem
                      title={element.title}
                      description={element.description}
                      imgUrl={element.urlToImage}
                      url={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
