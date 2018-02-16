import React from 'react';
import { connect } from 'react-redux';
import BlogListItem from './BlogListItem';
import dateSorter from '../selectors/date-sorter';
import Pagination from '../pagination/pagination';


export class BlogList extends React.Component {

    constructor() {
        super();

        this.state = {
            pageOfItems: []
        };

    }

    onChangePage = (pageOfItems) => {
        this.setState(() => ({ pageOfItems: pageOfItems }));
    }


    render() {
        return (

            <div className="content-container">
                <div className="list-header"> 
                    <div className="show-for-mobile">Bloggles</div>
                    <div className="show-for-desktop">Bloggles</div>
                </div>
                <div className="list-body">
                    {
                        this.props.bloggles.length === 0 ? (
                            <div className="list-item list-item--message">
                                <span> No Bloggles </span>
                            </div>
                        ) : (
                            this.state.pageOfItems.map((bloggle) => {
                                return <BlogListItem key={bloggle.id} {...bloggle} />
                            })
                        )
                    }
                </div>
                <Pagination items={this.props.bloggles} onChangePage={this.onChangePage} />
            </div>

        );
    };
};


const mapStateToProps = (state) => {
    return {
        bloggles: dateSorter(state.bloggles) 
    };
};



export default connect(mapStateToProps)(BlogList);

