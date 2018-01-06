import moment from 'moment';

export default (bloggles) => {
    
    return bloggles.filter((bloggle) => {

        const filteredBlog = moment(bloggle.createdAt);
        
        return filteredBlog;

    }).sort(( a , b) => {

        return a.createdAt < b.createdAt ? 1 : -1;

    })

}
