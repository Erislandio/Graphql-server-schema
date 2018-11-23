const {
    GraphQLID,
    GraphQLNonNull
} = require('graphql')

const EventTye = require('./types/event')

module.exports = {
    type: EventType,
    args: {
        id:{
            name: 'id',
            type: new GraphQLNonNull(GraphQLID)
        }
    },

    resolve: (root, args) => {
        return new Promise((resolve, reject) => {
            resolve({
                id: 'rfjnerjieirncieqncqec',
                name: 'Lauch party',
                date: 'Today'
            })
        })
    }
}