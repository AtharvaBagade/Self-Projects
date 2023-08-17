import React, { Component } from 'react';
import PropTypes from 'prop-types'

import urlPropType from 'url-prop-type';


export class SingleNews extends Component {

    render() {
        const { title, description, imageUrl, newsUrl, source, date } = this.props;
        return (
            <div className="card my-2 border-light bg-dark text-light">
                <span class="position-absolute top-0 start-50 translate-middle badge round-pill bg-danger"  >{source}</span>
                <img src={!imageUrl ? "https://previews.123rf.com/images/enterline/enterline1611/enterline161100174/66186682-the-word-news-written-in-white-3d-letters-on-a-colorful-background-concept-and-theme.jpg" : imageUrl} className="card-img-top" alt="Daily News" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div className="d-flex justify-content-between"><p className="card-text my-0"><small>{date}</small></p>
                    <a href={newsUrl} rel='noreferrer' target='_blank' className="text-info"><strong>read more</strong></a></div>
                </div>
            </div>
        );
    }
}

export default SingleNews;