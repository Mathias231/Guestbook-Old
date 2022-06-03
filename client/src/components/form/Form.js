import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MultiButton from '../multiButton/Button'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Form() {
    return (
    <Grid item xs={6} md={4}>
        <Item>
            <h1>Opprett innlegg</h1>
            <MultiButton name={true ? console.log(true) : console.log(false)} />
        </Item>
    </Grid>
    )
}

export default Form;