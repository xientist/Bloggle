import React, { PropTypes } from 'react';

import  _  from 'underscore';

// const propTypes = {
//     items:PropTypes.array.isRequired,
//     onChangePage: PropTypes.func.isRequired,
//     initialPage: PropTypes.number
// }

const defaultProps = {
    initialPage: 1 
}

export class Pagination extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pager: {}
        };
    };


    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps , prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {

        let items = this.props.items;
        let pager = this.state.pager;

        if ( page < 1 || page > pager.totalPages) {
            return;
        }

        pager = this.getPager(items.length, page);

        let pageOfItems = items.slice(pager.startIndex , pager.endIndex + 1);

        this.setState(() => ({ pager: pager}));

        this.props.onChangePage(pageOfItems);

    }

    getPager(totalItems, currentPage, pageSize) {
        currentPage = currentPage || 1;

        pageSize = pageSize || 10;

        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage , endPage;

        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalpages) {
                startPage = totalpages - 9;
                endPage = totalPages; 
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        let startIndex = ( currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        let pages = _.range(startPage , endPage + 1);

        return {
            totalitems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage, 
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {

        let pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            return null;
        }
    

        return (
        <div className="center">
            <ul className="pagination">

                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(1)}>First</a>
                </li>

                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage - 1)}>Previous</a>
                </li>

                {pager.pages.map((page , index) => 
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <a onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={pager.curentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.currentPage + 1)}>Next</a>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul>
        </div>
        );

    };

};

// Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;


export default Pagination;