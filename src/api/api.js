export async function sendEmail(email) {
  const apiresp = await fetch(
    'https://api.jsonbin.io/v3/b/631f5826a1610e63862882ec',
    {
      method: 'PUT',
      headers: {
        'X-Master-Key':
          '$2b$10$7tJSSZTHF0PBtTQtqJI7LOz5x7HhariCoJ3z9IHZTIHCfTvZObQ16',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    },
  );
  return apiresp.json();
}
