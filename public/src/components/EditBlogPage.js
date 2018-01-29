import React from 'react';
import { connect } from 'react-redux';
import BlogForm from './BlogForm';
import { startEditBlog , startRemoveBlog } from '../actions/blogs';
import RemoveModal from './RemoveModal';
import Header from './Header';

export class EditBlogPage extends React.Component {

    state = {
        blogInRemoval: false
    };

    setBlogInRemoval = () => {
        this.setState(() => ( { blogInRemoval: true } ))
    };

    clearBlogInRemoval = () => {
        this.setState(() => ( { blogInRemoval: false } ))
    };

   onSubmit = ( blog ) => {
        this.props.startEditBlog(this.props.bloggle.id , blog);
        this.props.history.push('/dashboard');
         
   };

   onRemove = () => {
       this.props.startRemoveBlog( {idToRemove: this.props.bloggle.id} );
       this.props.history.push('/dashboard');
       this.setState(() => ({ blogInRemoval: false }))
   };

   
   render() {
        return (
           
            <div>
            <Header />
                <div className="page-header">
                    <div className="content-container">
                        <BlogForm
                            bloggle={this.props.bloggle} 
                            onSubmit={this.onSubmit}
                        />
                        <button className="button button--secondary button-rounded" onClick={this.setBlogInRemoval}>Remove Bloggle</button>
                        <RemoveModal
                            bloggleName={this.props.bloggle.title}
                            blogInRemoval={this.state.blogInRemoval}
                            onRemove={this.onRemove}
                            clearBlogInRemoval={this.clearBlogInRemoval}
                        />
                    </div>
                </div>    
            </div>
        );
    };
};

const mapStateToProps = (state , props) => {
    return {
        bloggle: state.bloggles.find((bloggle) =>  bloggle.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch , props) => ({ 
    startEditBlog: (id, updates) => dispatch(startEditBlog(id , updates)),
    startRemoveBlog: (idToRemove) => dispatch(startRemoveBlog(idToRemove))
});



export default connect(mapStateToProps , mapDispatchToProps)(EditBlogPage);