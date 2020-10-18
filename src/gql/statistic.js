import { gql } from 'apollo-boost';
import { SingletonApolloClient } from '../singleton/client';

export const getStatisticGeoOrder = async({organization, dateStart}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization, dateStart: dateStart},
                query: gql`
                    query ($organization: ID!, $dateStart: Date) {
                        statisticGeoOrder(organization: $organization, dateStart: $dateStart) 
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticOrder = async({company, dateStart, dateType, online}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType, online: online},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String, $online: Boolean) {
                        statisticOrder(company: $company, dateStart: $dateStart, dateType: $dateType, online: $online) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticAzykStoreOrder = async({company, dateStart, dateType}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType},
                query: gql`
                    query ($company: ID, $dateStart: Date, $dateType: String) {
                        statisticAzykStoreOrder(company: $company, dateStart: $dateStart, dateType: $dateType) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticAzykStoreAgents = async({company, dateStart, dateType, filter}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType, filter: filter},
                query: gql`
                    query ($company: ID, $dateStart: Date, $dateType: String, $filter: String) {
                        statisticAzykStoreAgents(company: $company, dateStart: $dateStart, dateType: $dateType, filter: $filter) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticAzykStoreAgent = async({agent, dateStart, dateType}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {agent: agent, dateStart: dateStart, dateType: dateType},
                query: gql`
                    query ($agent: ID!, $dateStart: Date, $dateType: String) {
                        statisticAzykStoreAgent(agent: $agent, dateStart: $dateStart, dateType: $dateType) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticReturned = async({company, dateStart, dateType}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String) {
                        statisticReturned(company: $company, dateStart: $dateStart, dateType: $dateType) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticClient = async({company, dateStart, dateType, online}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType, online: online},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String, $online: Boolean) {
                        statisticClient(company: $company, dateStart: $dateStart, dateType: $dateType, online: $online) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticClientActivity = async({online, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {online: online, organization: organization},
                query: gql`
                    query ($online: Boolean, $organization: ID) {
                        statisticClientActivity (online: $online, organization: $organization) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticItemActivity = async({online, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {online: online, organization: organization},
                query: gql`
                    query ($online: Boolean, $organization: ID) {
                        statisticItemActivity (online: $online, organization: $organization) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticOrganizationActivity = async({online, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {online: online, organization: organization},
                query: gql`
                    query ($online: Boolean, $organization: ID) {
                        statisticOrganizationActivity (online: $online, organization: $organization) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUnloadingOrders = async({organization, dateStart, filter}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization, dateStart: dateStart, filter: filter},
                query: gql`
                    query ($organization: ID!, $dateStart: Date!, $filter: String!) {
                        unloadingOrders(organization: $organization, dateStart: $dateStart, filter: $filter) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUnloadingInvoices = async({organization, dateStart, forwarder, all}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization, dateStart: dateStart, forwarder: forwarder, all: all},
                query: gql`
                    query ($organization: ID!, $dateStart: Date!, $forwarder: ID, $all: Boolean) {
                        unloadingInvoices(organization: $organization, dateStart: $dateStart, forwarder: $forwarder, all: $all) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticAgentsWorkTime = async({organization, date}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization, date: date},
                query: gql`
                    query ($organization: String, $date: Date) {
                        statisticAgentsWorkTime(organization: $organization, date: $date) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticDistributer = async({distributer, organization, dateStart, dateType, type}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {distributer: distributer, organization: organization, dateStart: dateStart, dateType: dateType, type: type},
                query: gql`
                    query ($distributer: ID!, $organization: ID, $dateStart: Date, $dateType: String, $type: String) {
                        statisticDistributer(distributer: $distributer, organization: $organization, dateStart: $dateStart, dateType: $dateType, type: $type) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUnloadingAdsOrders = async({organization, dateStart}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization, dateStart: dateStart},
                query: gql`
                    query ($organization: ID!, $dateStart: Date!) {
                        unloadingAdsOrders(organization: $organization, dateStart: $dateStart) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUnloadingEmployments = async({organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query ($organization: ID!) {
                        unloadingEmployments(organization: $organization) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUnloadingDistricts = async({organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query ($organization: ID!) {
                        unloadingDistricts(organization: $organization) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUnloadingAgentRoutes = async({organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query ($organization: ID!) {
                        unloadingAgentRoutes(organization: $organization) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticOrderChart = async({company, dateStart, dateType, type, online}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType, type: type, online: online},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String, $type: String, $online: Boolean) {
                        statisticOrderChart(company: $company, dateStart: $dateStart, dateType: $dateType, type: $type, online: $online) {
                            all
                            chartStatistic
                                {
                                    label
                                    data
                                }
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getCheckOrder = async(data, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: data,
                query: gql`
                    query ($company: String, $today: Date!) {
                        checkOrder(company: $company, today: $today) {
                            columns
                            row 
                                {data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getCheckAgentRoute = async(data, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: data,
                query: gql`
                    query ($agentRoute: ID!) {
                        checkAgentRoute(agentRoute: $agentRoute) {
                            columns
                            row 
                                {data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const checkIntegrateClient = async(data, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: data,
                query: gql`
                    query ($organization: ID, $type: String, $document: Upload) {
                        checkIntegrateClient(organization: $organization, type: $type, document: $document) {
                            columns
                            row 
                                {data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getUnloadingClients = async({organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query ($organization: ID!) {
                        unloadingClients(organization: $organization) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticItem = async({company, dateStart, dateType, online}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType, online: online},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String, $online: Boolean) {
                        statisticItem(company: $company, dateStart: $dateStart, dateType: $dateType, online: $online) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticAdss = async({company, dateStart, dateType, online}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType, online: online},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String, $online: Boolean) {
                        statisticAdss(company: $company, dateStart: $dateStart, dateType: $dateType, online: $online) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticAgents = async({company, dateStart, dateType}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {company: company, dateStart: dateStart, dateType: dateType},
                query: gql`
                    query ($company: String, $dateStart: Date, $dateType: String) {
                        statisticAgents(company: $company, dateStart: $dateStart, dateType: $dateType) {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticStorageSize = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        statisticStorageSize {
                            columns
                            row 
                                {_id data}
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getStatisticClientGeo = async({organization, item, search}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization, item, search},
                query: gql`
                    query($organization: ID, $item: ID, $search: String) {
                        statisticClientGeo(organization: $organization, item: $item, search: $search) {
                            client
                            address
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getActiveItem = async({organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                variables: {organization: organization},
                query: gql`
                    query($organization: ID!) {
                        activeItem(organization: $organization) {
                            name
                            _id
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getActiveOrganization = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        activeOrganization {
                            name
                            _id
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const getSuperagentOrganization = async(client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .query({
                query: gql`
                    query {
                        superagentOrganization {
                            name
                            _id
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const uploadingAgentRoute = async({document, agentRoute}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .mutate({
                variables: {document: document, agentRoute: agentRoute},
                mutation: gql`
                    mutation ($document: Upload!, $agentRoute: ID!) {
                        uploadingAgentRoute(document: $document, agentRoute: $agentRoute) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const uploadingClients = async({document, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .mutate({
                variables: {document: document, organization: organization},
                mutation: gql`
                    mutation ($document: Upload!, $organization: ID!) {
                        uploadingClients(document: $document, organization: $organization) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

export const uploadingDistricts = async({document, organization}, client)=>{
    try{
        client = client? client : new SingletonApolloClient().getClient()
        let res = await client
            .mutate({
                variables: {document: document, organization: organization},
                mutation: gql`
                    mutation ($document: Upload!, $organization: ID!) {
                        uploadingDistricts(document: $document, organization: $organization) {
                            data
                        }
                    }`,
            })
        return res.data
    } catch(err){
        console.error(err)
    }
}

