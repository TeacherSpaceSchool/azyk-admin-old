import { makeStyles } from '@material-ui/core/styles';
export default makeStyles({
    cardM: {
        width: 'calc(100vw - 40px)',
        marginBottom: 20
    },
    cardD: {
        width: 400,
        margin: 10
    },
    mediaO: {
        borderRadius: '30px',
        objectFit: 'cover',
        height: '60px',
        width: '60px',
        marginRight: 10
    },
    avatar: {
        borderRadius: '50px',
        objectFit: 'cover',
        height: '100px',
        width: '100px',
        margin: 10
    },
    text: {
        fontWeight: 'bold',
        fontSize: '1rem',
        fontFamily: 'Roboto'
    },
    input: {
        marginBottom: 5,
        fontSize: '1rem',
        fontFamily: 'Roboto'
    },
    line: {
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    column:{
        display: 'flex',
        flexDirection: 'column',
        width: 'calc(100% - 70px)',
    },
    value: {
        fontSize: '0.875rem',
        fontFamily: 'Roboto',
        wordBreak: 'break-all'
    },
    cardBrand: {
        width: 'calc(100vw / 3 - 10px)',
        margin: 5,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 125
    },
    mediaBrand: {
        borderRadius: '30px',
        objectFit: 'cover',
        height: '60px',
        width: '60px',
        margin: 5,
    },
    nameBrand: {
        width: 'calc(100vw / 3 - 15px)',
        fontWeight: 'bold',
        fontSize: '0.81rem',
        fontFamily: 'Roboto',
        overflow: 'hidden',
        height: 15,
        marginBottom: 5,
        textAlign: 'center'
    },
    textBrand: {
        width: 'calc(100vw / 3 - 15px)',
        fontSize: '0.6875rem',
        fontFamily: 'Roboto',
        overflow: 'hidden',
        height: 30,
        textAlign: 'center'
    }
})