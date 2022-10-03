import React, { useState } from 'react';
import { Container, Grid, TextField } from '@mui/material/';

function Form() {
  // useState variables
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Function for form
  const handleSubmit = (e) => {
    // Prevent html to refresh on click
    e.preventDefault();

    const form = { title, content };
    console.log(form);

    fetch('http://localhost:5000/post/add', {
      method: 'POST',
      body: form,
    });

    fetch('http://localhost:5000/post/add', {
      method: 'POST',
      body: JSON.stringify({
        title: 'test2',
        username: 'usertest',
        content: 'hello world',
        comments: 'test',
      }),
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <h1>Opprett Innlegg</h1>

        <Grid mt={2}>
          <TextField
            required
            id="outlined-required"
            label="Tittel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </Grid>

        <Grid mt={2}>
          <TextField
            id="outlined-multiline-static"
            label="Skriv her"
            multiline
            rows={4}
            required
            fullWidth
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </Grid>

        <Grid mt={2}>
          <button variant="contained">Opprett innlegg</button>
        </Grid>
      </form>
    </Container>
  );
}

export default Form;
