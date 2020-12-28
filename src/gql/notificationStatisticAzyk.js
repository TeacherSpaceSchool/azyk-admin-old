import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';

export const getNotificationStatistics = async({search: search}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search},
                query: gql`
                    query ($search: String!){
                        notificationStatistics(search: $search) {
                            _id
                            createdAt
                            title
                            text
                            delivered
                            failed
                            tag
                            url
                            icon
                            click
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const addNotificationStatistic = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        let res = await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($text: String!, $title: String!, $tag: String, $url: String, $icon: Upload) {
                        addNotificationStatistic(text: $text, title: $title, tag: $tag, url: $url, icon: $icon) {
                            _id
                            createdAt
                            title
                            text
                            delivered
                            failed
                            tag
                            url
                            icon
                            click
                        }
                    }`})
        return res.data
    } catch(err){
        console.error(err)
    }
}