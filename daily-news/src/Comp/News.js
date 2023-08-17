import React, { Component } from 'react';
import SingleNews from './SingleNews';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'


export class News extends Component {
    static defaultProps ={country: `in`, category: `general`,}
    static propTypes={country: PropTypes.string, category: PropTypes.string,}

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: true,
            page: 1,
            totalResults: 0,
            pageSize: 10,
        };
    }

    fetchMore = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=699477047f894941a073214c103a5952&page=${this.state.page}&pageSize=${this.state.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            loading: false,
        })
    };

    async componentDidMount() {
        try {
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=699477047f894941a073214c103a5952&page=${this.state.page}&pageSize=${this.state.pageSize}`; 
            const data = await fetch(url);
            const parsedData = await data.json();
            this.setState({ articles: parsedData.articles, loading: false }); 
        } catch (err) {
            console.log(err);
            this.setState({ loading: false });
        }
    }

    capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    render() {
        const { articles, loading} = this.state;

        return (
            <div style={{paddingTop: `65px`} }>
            <h1 className="text-light text-center">Top Headlines: {this.capitalizeFirstLetter(this.props.category)}</h1>
                {this.state.loading && <p className="text-light text-center ">Loading...</p>}
                <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMore}
                hasMore={this.state.articles.length!==this.state.totalResults}
                >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => (
                            <div className="container col-md-5" key={element.url}>
                                <SingleNews
                                    title={element.title}
                                    description={element.description}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    source={element.source.name}
                                    date={element.publishedAt}
                                />
                            </div>
                        ))}
                    </div>
                </div>    
                </InfiniteScroll>
            </div>
        );
    }
}

export default News;