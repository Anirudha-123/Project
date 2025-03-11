// export default AdminPanel;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const AdminPanel = () => {
  const { authData } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://project-backend-8ik1.onrender.com", {
        headers: {
          Authorization: `Bearer ${authData.token}`,
        },
      })
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [authData]);

  return (
    <div>
      <h2 className="mb-4">Registered Users</h2>
      {loading ? (
        <p>Loading users...</p>
      ) : users.length === 0 ? (
        <p>No users found</p>
      ) : (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminPanel;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useAuth } from "../context/AuthContext";
// import AdminSidebar from "./AdminSidebar"; // Import Sidebar

// const AdminPanel = () => {
//   const { authData } = useAuth();
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("http://localhost:8000/api/admin/users", {
//         headers: {
//           Authorization: `Bearer ${authData.token}`,
//         },
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
//     <div className="admin-layout">
//       <AdminSidebar /> {/* Sidebar always visible */}
//       <div className="admin-content">
//         <h2 className="mb-4">Registered Users</h2>
//         {loading ? (
//           <p>Loading users...</p>
//         ) : users.length === 0 ? (
//           <p>No users found</p>
//         ) : (
//           <table className="table table-bordered">
//             <thead className="table-dark">
//               <tr>
//                 <th>ID</th>
//                 <th>Username</th>
//                 <th>Email</th>
//                 <th>Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((user) => (
//                 <tr key={user._id}>
//                   <td>{user._id}</td>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AdminPanel;
