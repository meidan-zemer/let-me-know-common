import moment from 'moment';
export function getTimeDate(ts) {
    const now = moment();
    const momentTs = moment(ts);
    if (moment.duration(now.diff(momentTs)) < moment.duration(60 * 60 * 24 * 1000)) {
        return momentTs.fromNow();
    }
    return momentTs.format('MMMM Do YYYY H:m');
}
export const contactPointsCollectionName = 'contactPoints';
export const discussionsSubCollectionName = 'contactPointDiscussions';
export const messagesSubCollectionName = 'contactPointDiscussionMessages';
