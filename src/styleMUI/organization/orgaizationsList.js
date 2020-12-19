import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    page: {
        paddingTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    populars: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        overflowX: 'scroll',
        flex: 'none',
        '&::-webkit-scrollbar': {
            display: 'none',
        },
    },
    fab: {
        position: 'fixed!important',
        bottom: '20px',
        right: '20px'
    },
    scrollDown: {
        cursor: 'pointer',
        padding: 10,
        borderRadius: 5,
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        position: 'fixed',
        right: 10,
        zIndex: 1500,
        bottom: 10,
        fontSize: '1rem',
        fontWeight: 'bold',
        //color: 'white',
        background: '#ffb300'
    }
})