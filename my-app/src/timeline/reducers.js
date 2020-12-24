import * as Constants from 'src/timeline/constants'

const processReceiveNewsListSortedByTime = (state, action) => {
    const newsList = Object.deepCopy(action.data)

    const newsListSorted = newsList.sort(function (a, b) {
        return new Date(Date.parse(a.time)) - new Date(Date.parse(b.time))
    })

    var newListForTimeline = []
    newListForTimeline.push({
        "time" : newsListSorted[0].time,
        "events": [
            {
                "id": newsListSorted[0].id,
                "title": newsListSorted[0].title
            }
        ]
    })
    for (let index = 1; index < newsListSorted.length; index++) {
        var newListForTimelineItem = {}
        var Element = newsListSorted[index];
        var LastElementInNewListForTimeline = newListForTimeline[newListForTimeline.length-1]
        
        if(Date.parse(LastElementInNewListForTimeline.time) === Date.parse(Element.time)) {
            newListForTimeline[newListForTimeline.length-1].events.push({
                "id": Element.id,
                "title": Element.title
            })
        } else {
            newListForTimeline.push({
                "time" : Element.time,
                "events": [
                    {
                        "id": Element.id,
                        "title": Element.title
                    }
                ]
            })
        }
    }
    return Object.assign({}, state, {
        newListForTimeline: newListForTimeline
    })
}
export const timelineReducer = (state = {}, action) => {
    switch (action.type) {
        case Constants.TIMELINE_RECEIVE_NEWS_LIST_SORTED_BY_TIME:
            return processReceiveNewsListSortedByTime(state, action)
        default:
            return state;
    }
}