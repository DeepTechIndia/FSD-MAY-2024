const UserData = () => {
  const users = [
    { name: "Vidyashree", age: 22 },
    { name: "Yogesh", age: 23 },
    { name: "harsha", age: 24 },
  ];

  return (
    <div>
      <h2>user Data</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserData;
