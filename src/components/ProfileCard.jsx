function ProfileCard() {
    const user = {
      name: 'Khadija Alshuwaikhat',
      role: 'Web Designer',
      location: 'East Lansing, MI'
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
  