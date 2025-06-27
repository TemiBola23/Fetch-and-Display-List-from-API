import React, { useEffect, useState } from 'react';
import ListComponent from './components/ListComponent';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        if (!res.ok) throw new Error('API fetch failed.');
        return res.json();
      })
      .then(setUsers)
      .catch(err => setError(err.message || 'Something went wrong.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {loading && <p role="status" aria-live="polite" style={{ opacity: 0.5 }}>🔄 Loading users...</p>}
      {error && <p role="status" aria-live="assertive" style={{ color: 'red' }}>{error}</p>}
      {!loading && !error && (
        <ListComponent items={users} renderItem={u => <div><strong>{u.name}</strong> – {u.email}</div>} />
      )}
    </div>
  );
};

export default App;