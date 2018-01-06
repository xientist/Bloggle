import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';
import dateSorter from '../selectors/date-sorter';


export const BlogList = (props) => (
    <div className="content-container">
       <div className="list-header"> 
            <div className="show-for-mobile">Bloggles</div>
            <div className="show-for-desktop">Bloggles</div>
        </div>
        <div className="list-body">
            {
                props.bloggles.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span> No Bloggles </span>
                    </div>
                ) : (
                props.bloggles.map((bloggle) => {
                    return <BlogListItem key={bloggle.id} {...bloggle} />
                })
                )
            }
        </div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        bloggles: dateSorter(state.bloggles) 
    };
};



export default connect(mapStateToProps)(BlogList);

