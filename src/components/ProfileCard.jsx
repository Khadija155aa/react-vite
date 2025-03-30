function ProfileCard() {
    const user = {
      name: 'Jane Doe',
      role: 'Software Engineer',
      location: 'San Francisco, CA'
    };
  
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '10px' }}>
        <h3>{user.name}</h3>
        <p>Role: {user.role}</p>
        <p>Location: {user.location}</p>
      </div>
    );
  }
  
  export default ProfileCard;
  