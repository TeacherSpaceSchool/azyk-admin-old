import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';
import { SingletonStore } from '../singleton/store';
import { getReceiveDataByIndex, putReceiveDataByIndex } from '../service/idb/receiveData';

export const getBrandOrganizations = async({search: search, sort: sort, filter: filter}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search, sort: sort, filter: filter},
                query: gql`
                    query ($search: String!, $sort: String!, $filter: String!) {
                        brandOrganizations(search: $search, sort: $sort, filter: $filter) {
                            _id
                            createdAt
                            name
                            image
                            address
                            email
                            phone
                            miniInfo
                            info
                            reiting
                            status
                            accessToClient
                            consignation
                            minimumOrder
                            unite
                          }
                          sortOrganization {
                           name
                            field
                          }
                          filterOrganization {
                           name
                           value
                          }
                    }`,
            })
        if(new SingletonStore().getStore()&&new SingletonStore().getStore().getState().user.profile.role.includes('агент'))
            await putReceiveDataByIndex(`brandOrganizations(search: ${search}, sort: ${sort}, filter: ${filter})`, res.data)
        return res.data
    } catch(err){
        console.error(err)
        if(new SingletonStore().getStore()&&new SingletonStore().getStore().getState().user.profile.role.includes('агент'))
            return await getReceiveDataByIndex(`brandOrganizations(search: ${search}, sort: ${sort}, filter: ${filter})`)
    }
}

export const getPopularItems = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        popularItems {
                            _id
                            name    
                            image
                            organization
                                {_id}
                            hit
                            latest
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getItems = async({subCategory,  search,  sort,  filter}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {subCategory: subCategory, search: search, sort: sort, filter: filter},
                query: gql`
                    query ($subCategory: ID!,$search: String!, $sort: String!, $filter: String!) {
                        items(subCategory: $subCategory, search: $search, sort: $sort, filter: $filter) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            apiece
                            unit
                            priotiry
                            packaging
                            reiting
                            organization
                                {_id name consignation}
                            hit
                            latest
                            favorite
                            basket
                        }
                        sortItem {
                            name
                            field
                        }
                        filterItem {
                           name
                           value
                        }
                        subCategory(_id: $subCategory) {
                           _id
                           name
                           category
                                {_id name}
                          }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getItemsTrash = async({search}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {search: search},
                query: gql`
                    query ($search: String!) {
                        itemsTrash( search: $search) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            image
                            info
                            price
                            apiece
                            unit
                            priotiry
                            packaging
                            reiting
                            organization
                                {_id name consignation}
                            hit
                            latest
                            favorite
                            basket
                            del
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getBrands = async({organization,  search,  sort}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization, search: search, sort: sort},
                query: gql`
                    query ($organization: ID!,$search: String!, $sort: String!) {
                        brands(organization: $organization, search: $search, sort: $sort) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            apiece
                            unit
                            priotiry
                            packaging
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name info image consignation}
                            hit
                            latest
                            favorite
                            basket
                        }
                        sortItem {
                            name
                            field
                        }
                    }`,
            })
        if(new SingletonStore().getStore()&&new SingletonStore().getStore().getState().user.profile.role.includes('агент'))
            await putReceiveDataByIndex(`brands(organization: ${organization}, search: ${search}, sort: ${sort})`, res.data)
        return res.data
    } catch(err){
        console.error(err)
        if(new SingletonStore().getStore()&&new SingletonStore().getStore().getState().user.profile.role.includes('агент'))
            return await getReceiveDataByIndex(`brands(organization: ${organization}, search: ${search}, sort: ${sort})`)
    }
}

export const favorites = async({ search}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: { search: search },
                query: gql`
                    query ($search: String!) {
                        favorites(search: $search) {
                            _id
                            subCategory
                                {_id name}
                            name
                            status
                            createdAt                  
                            stock
                            apiece
                            unit
                            priotiry
                            packaging
                            image
                            info
                            price
                            reiting
                            organization
                                {_id name consignation}
                            hit
                            latest
                            favorite
                            basket
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getItem = async({_id}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {_id: _id},
                query: gql`
                    query ($_id: ID!) {
                        item(_id: $_id) {
                            _id
                            subCategory
                                {
                                    _id 
                                    name 
                                    category
                                        {_id name}
                                }
                            name
                            status
                            createdAt                  
                            stock
                            apiece
                            unit
                            priotiry
                            image
                            categorys
                            info
                            price
                            city
                            costPrice
                            reiting
                            organization
                                {_id name minimumOrder consignation}
                            hit
                            latest
                            favorite
                            basket
                            deliveryDays
                            packaging
                            weight
                            size
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const deleteItem = async(ids, subCategory)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        deleteItem(_id: $_id) {
                             data
                        }
                    }`})
        return await getItems({subCategory: subCategory, ...(new SingletonStore().getStore().getState().app)})
    } catch(err){
        console.error(err)
    }
}

export const restoreItem = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        restoreItem(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const onoffItem = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        onoffItem(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const favoriteItem = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        favoriteItem(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addFavoriteItem = async(ids)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {_id: ids},
            mutation : gql`
                    mutation ($_id: [ID]!) {
                        addFavoriteItem(_id: $_id) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const addItem = async(element, subCategory)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {...element, subCategory: subCategory},
            mutation : gql`
                    mutation ($costPrice: Float, $categorys: [String]!, $priotiry: Int, $city: String!, $unit: String, $apiece: Boolean, $weight: Float!, $size: Float!, $packaging: Int!, $stock: Float!, $deliveryDays: [String], $name: String!, $image: Upload, $info: String!, $price: Float!, $subCategory: ID!, $organization: ID!, $hit: Boolean!, $latest: Boolean!) {
                        addItem(costPrice: $costPrice, categorys: $categorys, priotiry: $priotiry, city: $city, unit: $unit, apiece: $apiece, weight: $weight, size: $size, packaging: $packaging, stock: $stock, deliveryDays: $deliveryDays, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const setItem = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: {...element},
            mutation : gql`
                    mutation ($costPrice: Float, $categorys: [String], $_id: ID!, $city: String, $priotiry: Int, $unit: String, $apiece: Boolean, $weight: Float, $size: Float, $packaging: Int, $stock: Float, $deliveryDays: [String], $name: String, $image: Upload, $info: String, $price: Float, $subCategory: ID, $organization: ID, $hit: Boolean, $latest: Boolean) {
                        setItem(costPrice: $costPrice, categorys: $categorys, _id: $_id, city: $city, priotiry: $priotiry, unit: $unit, apiece: $apiece, weight: $weight, size: $size, packaging: $packaging, stock: $stock, deliveryDays: $deliveryDays, name: $name, image: $image, info: $info, price: $price, subCategory: $subCategory, organization: $organization, hit: $hit, latest: $latest) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}

export const setItemsCostPrice = async(element)=>{
    try{
        const client = new SingletonApolloClient().getClient()
        await client.mutate({
            variables: element,
            mutation : gql`
                    mutation ($itemsCostPrice: [InputItemCostPrice]!) {
                        setItemsCostPrice(itemsCostPrice: $itemsCostPrice) {
                             data
                        }
                    }`})
    } catch(err){
        console.error(err)
    }
}