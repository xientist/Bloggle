import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import { Link } from 'react-router-dom';
import BlogForm from './BlogForm';
import { startAddBlog } from '../actions/blogs';

export class BlogSummary extends React.Component {  

    onSubmit = (bloggle) => {
        this.props.startAddBlog(bloggle);
    }


    render() {
        return (
                <div className="page-header">
                    <div className="content-container">
                        <BlogForm onSubmit={this.onSubmit} />
                    </div>
                </div>
            );
    };
};



const mapDispatchToProps = (dispatch) => ({ startAddBlog: (bloggle) => dispatch(startAddBlog(bloggle)) });

export default connect(undefined , mapDispatchToProps)(BlogSummary);