// Server Component
// const UserSelectWrapper = async () => {
//     const users = await db.select("name").from("users"); // Fetch data on the server
//     return <UserSelect users={users} />;
//   };
  
  // Client Component
  "use client";
  const UserSelect = ({ users }) => {
    return (
      <select name="user">
        {users.map((user) => (
          <option key={user.name} value={user.name}>
            {user.name}
          </option>
        ))}
      </select>
    );
  };
  
  export default UserSelectWrapper;