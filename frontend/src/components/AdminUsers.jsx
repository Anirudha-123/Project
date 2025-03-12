// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const AdminUsers = () => {
//   const { authData } = useAuth();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/admin/users", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [authData]);

//   return (
//     <div>
//       <h2>Registered Users</h2>
//       {loading ? (
//         <p>Loading users...</p>
//       ) : users.length === 0 ? (
//         <p>No users found.</p>
//       ) : (
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((u) => (
//               <tr key={u._id}>
//                 <td>{u._id}</td>
//                 <td>{u.username}</td>
//                 <td>{u.email}</td>
//                 <td>{u.role}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const AdminUsers = () => {
//   const { authData } = useAuth();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/admin/users", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [authData]);

//   return (
//     <div>
//       <h2>Registered Users</h2>
//       {loading ? (
//         <p>Loading users...</p>
//       ) : users.length === 0 ? (
//         <p>No users found.</p>
//       ) : (
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((u) => (
//               <tr key={u._id}>
//                 <td>{u._id}</td>
//                 <td>{u.username}</td>
//                 <td>{u.email}</td>
//                 <td>{u.role}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const AdminUsers = () => {
//   const { authData } = useAuth();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Only fetch data if authData is available
//     if (!authData || !authData.token) {
//       setLoading(false);
//       return;
//     }

//     axios
//       .get("http://localhost:8000/api/admin/users", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error(err);
//         setLoading(false);
//       });
//   }, [authData]);

//   return (
//     <div>
//       <h2>Registered Users</h2>
//       {loading ? (
//         <p>Loading users...</p>
//       ) : users.length === 0 ? (
//         <p>No users found.</p>
//       ) : (
//         <table className="table table-bordered">
//           <thead>
//             <tr>
//               <th>ID</th>
//               <th>Username</th>
//               <th>Email</th>
//               <th>Role</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((u) => (
//               <tr key={u._id}>
//                 <td>{u._id}</td>
//                 <td>{u.username}</td>
//                 <td>{u.email}</td>
//                 <td>{u.role}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";

// const AdminUsers = () => {
//   const { authData } = useAuth();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Only fetch data if authData is available
//     if (!authData || !authData.token) {
//       setLoading(false);
//       return;
//     }

//     axios
//       .get("http://localhost:8000/api/admin/users", {
//         headers: { Authorization: `Bearer ${authData.token}` },
//       })
//       .then((res) => {
//         setUsers(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching users:", err);
//         setLoading(false);
//       });
//   }, [authData]);

//   return (
//     <div className="registered-users-container">
//       <h2 className="registered-users-header">Registered Users</h2>
//       {loading ? (
//         <p>Loading users...</p>
//       ) : users.length === 0 ? (
//         <p>No users found.</p>
//       ) : (
//         <div className="table-responsive">
//           <table className="table table-bordered table-registered">
//             <thead>
//               <tr>
//                 <th>ID</th>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((u) => (
//                 <tr key={u._id}>
//                   <td>{u._id}</td>
//                   <td>{u.username}</td>
//                   <td>{u.email}</td>
//                   <td>{u.role}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminUsers;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const AdminUsers = () => {
  const { authData } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authData || !authData.token) {
      setLoading(false);
      return;
    }
    axios
      .get("https://project-backend-8ik1.onrender.com/api/admin/users", {
        headers: { Authorization: `Bearer ${authData.token}` },
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, [authData]);

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      axios
        .delete(`https://project-backend-8ik1.onrender.com/api/admin/users/${userId}`, {
          headers: { Authorization: `Bearer ${authData.token}` },
        })
        .then(() => {
          setUsers(users.filter((user) => user._id !== userId));
          alert("User deleted successfully!");
        })
        .catch((err) => {
          console.error("Error deleting user:", err);
          alert("Failed to delete user.");
        });
    }
  };

  return (
    <div className="registered-users-container">
      <h2 className="registered-users-header">Registered Users</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-registered">
            <thead>
              <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr key={u._id}>
                  <td>{u._id}</td>
                  <td>{u.username}</td>
                  <td>{u.email}</td>
                  <td>{u.role}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(u._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
