// This button shall show and close a form on press

import Button from '@mui/material/Button';

function button() {
    let name = 'OPEN';
    console.log(name);
    
    const changeName = () => {
        name = "CLOSE"; 
        console.log(name);
    };

    return (
        <Button variant="contained" name={name} onClick={changeName()}>Opprett innlegg</Button>
    )
}

export default button;