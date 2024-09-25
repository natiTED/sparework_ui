// import React from "react";
// import { Link } from "react-router-dom";
// import "./MyGigs.scss";
// import getCurrentUser from "../../utils/getCurrentUser";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest";

// function MyGigs() {
//   const currentUser = getCurrentUser();

//   const queryClient = useQueryClient();

//   const { isLoading, error, data } = useQuery({
//     queryKey: ["myGigs"],
//     queryFn: () =>
//       newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
//         return res.data;
//       }),
//   });

//   const mutation = useMutation({
//     mutationFn: (id) => {
//       return newRequest.delete(`/gigs/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["myGigs"]);
//     },
//   });

//   const handleDelete = (id) => {
//     mutation.mutate(id);
//   };

//   return (
//     <div className="myGigs">
//       {isLoading ? (
//         "loading"
//       ) : error ? (
//         "error"
//       ) : (
//         <div className="container">
//           <div className="title">
//             <h1>Gigs</h1>
//             {currentUser.isSeller && (
//               <Link to="/add">
//                 <button>Add New Gig</button>
//               </Link>
//             )}
//           </div>
//           <table>
//             <tr>
//               <th>Image</th>
//               <th>Title</th>
//               <th>Price</th>
//               <th>Sales</th>
//               <th>Action</th>
//             </tr>
//             {data.map((gig) => (
//               <tr key={gig._id}>
//                 <td>
//                   <img className="image" src={gig.cover} alt="" />
//                 </td>
//                 <td>{gig.title}</td>
//                 <td>{gig.price}</td>
//                 <td>{gig.sales}</td>
//                 <td>
//                   <img
//                     className="delete"
//                     src="./img/delete.png"
//                     alt=""
//                     onClick={() => handleDelete(gig._id)}
//                   />
//                 </td>
//               </tr>
//             ))}
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyGigs;

// import React from "react";
// import { Link } from "react-router-dom";
// import "./MyGigs.scss";
// import getCurrentUser from "../../utils/getCurrentUser";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest";

// function MyGigs() {
//   const currentUser = getCurrentUser();

//   const queryClient = useQueryClient();

//   const { isLoading, error, data } = useQuery({
//     queryKey: ["myGigs"],
//     queryFn: () =>
//       newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
//         return res.data;
//       }),
//   });

//   const mutation = useMutation({
//     mutationFn: (id) => {
//       return newRequest.delete(`/gigs/${id}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["myGigs"]);
//     },
//   });

//   const handleDelete = (id) => {
//     mutation.mutate(id);
//   };

//   return (
//     <div className="myGigs">
//       {isLoading ? (
//         "loading"
//       ) : error ? (
//         "error"
//       ) : (
//         <div className="container">
//           <div className="title">
//             <h1>Gigs</h1>
//             {currentUser.isSeller && (
//               <Link to="/add">
//                 <button>Add New Gig</button>
//               </Link>
//             )}
//           </div>
//           <table>
//             <thead>
//               <tr>
//                 <th>Image</th>
//                 <th>Title</th>
//                 <th>Price</th>
//                 <th>Sales</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Array.isArray(data) &&
//                 data.map((gig) => (
//                   <tr key={gig._id}>
//                     <td>
//                       <img className="image" src={gig.cover} alt="" />
//                     </td>
//                     <td>{gig.title}</td>
//                     <td>{gig.price}</td>
//                     <td>{gig.sales}</td>
//                     <td>
//                       <img
//                         className="delete"
//                         src="./img/delete.png"
//                         alt=""
//                         onClick={() => handleDelete(gig._id)}
//                       />
//                     </td>
//                   </tr>
//                 ))}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// }

// export default MyGigs;

import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";
import getCurrentUser from "../../utils/getCurrentUser";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

function MyGigs() {
  // Get the current user
  const currentUser = getCurrentUser();

  // Initialize QueryClient
  const queryClient = useQueryClient();

  // Fetch all gigs for the current user
  const { isLoading, error, data } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
        return res.data; // Return the gig data
      }),
  });

  // Delete a gig mutation
  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`); // Delete the gig by ID
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]); // Invalidate the "myGigs" query to refetch the updated data
    },
  });

  // Handle deleting a gig
  const handleDelete = (id) => {
    mutation.mutate(id); // Trigger the mutation to delete a gig
  };

  return (
    <div className="myGigs">
      {isLoading ? (
        "loading" // Display loading state
      ) : error ? (
        "error" // Display error state
      ) : (
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>
            {currentUser.isSeller && (
              <Link to="/add">
                <button>Add New Gig</button>
              </Link>
            )}
          </div>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((gig) => (
                <tr key={gig._id}>
                  <td>
                    <img className="image" src={gig.cover} alt="" />
                  </td>
                  <td>{gig.title}</td>
                  <td>{gig.price}</td>
                  <td>{gig.sales}</td>
                  <td>
                    <img
                      className="delete"
                      src="./img/delete.png"
                      alt="Delete"
                      onClick={() => handleDelete(gig._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyGigs;
