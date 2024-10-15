// import React, { useEffect, useState } from "react";

// const Chips = ({ status }) => {
//   const [type, setType] = useState(status);

//   useEffect(() => {
//     setType(status);
//   }, [status]);
//   return (
//     <>
//       {(type === "active" || type === "Active") && (
//         <div className="chips h-7 bg-light-success px-2.5 max-w-fit rounded-full flex items-center">
//           <label className="medium text-success font-medium">Active</label>
//         </div>
//       )}
//       {(type === "closed" || type === "Closed") && (
//         <div className="chips h-7 bg-light-success px-2.5 max-w-fit rounded-full flex items-center">
//           <label className="medium text-success font-medium">Closed</label>
//         </div>
//       )}
//       {(type === "completed" || type === "Completed") && (
//         <div className="chips h-7 bg-light-success px-2.5 max-w-fit rounded-full flex items-center">
//           <label className="medium text-success font-medium">Completed</label>
//         </div>
//       )}
//       {(type === "payment" || type === "Payment") && (
//         <div className="chips h-7 bg-light-success px-2.5 max-w-fit rounded-full flex items-center">
//           <label className="medium text-success font-medium">Payment</label>
//         </div>
//       )}
//       {(type === "pending" || type === "Pending") && (
//         <div className="chips h-7 bg-light-warning px-2.5 max-w-fit rounded-full flex items-center">
//           <label className="medium text-warning font-medium">Pending</label>
//         </div>
//       )}
//       {(type === "in progress" || type === "In Progress") && (
//         <div className="chips h-7 bg-light-warning px-2.5 max-w-fit rounded-full flex items-center">
//           <label className="medium text-warning font-medium">In Progress</label>
//         </div>
//       )}{" "}
//       {(type === "withdrawal" || type === "Withdrawal") && (
//         <div className="chips h-7 bg-light-warning px-2.5 max-w-fit rounded-full flex items-center">
//           <label className="medium text-warning font-medium">Withdrawal</label>
//         </div>
//       )}
//       {(type === "blocked" || type === "Blocked") && (
//         <div className="chips h-7 bg-light-error px-2.5 max-w-fit rounded-full flex items-center">
//           <label className="medium text-error font-medium">Blocked</label>
//         </div>
//       )}
//       {(type === "disputed" || type === "Disputed") && (
//         <div className="chips h-7 bg-light-error px-2.5 max-w-fit rounded-full flex items-center">
//           <label className="medium text-error font-medium">Disputed</label>
//         </div>
//       )}
//       {(type === "refund" || type === "Refund") && (
//         <div className="chips h-7 bg-light-error px-2.5 max-w-fit rounded-full flex items-center">
//           <label className="medium text-error font-medium">Refund</label>
//         </div>
//       )}
//     </>
//   );
// };

// export default Chips;

import React, { useEffect, useState } from "react";

const Chips = ({ status }) => {
  const [type, setType] = useState(status.toLowerCase());

  useEffect(() => {
    setType(status.toLowerCase());
  }, [status]);

  const statusConfig = {
    active: {
      label: "Active",
      bgClass: "bg-light-success",
      textClass: "text-success",
    },
    closed: {
      label: "Closed",
      bgClass: "bg-light-success",
      textClass: "text-success",
    },
    completed: {
      label: "Completed",
      bgClass: "bg-light-success",
      textClass: "text-success",
    },
    payment: {
      label: "Payment",
      bgClass: "bg-light-success",
      textClass: "text-success",
    },
    pending: {
      label: "Pending",
      bgClass: "bg-light-warning",
      textClass: "text-warning",
    },
    "in progress": {
      label: "In Progress",
      bgClass: "bg-light-warning",
      textClass: "text-warning",
    },
    withdrawal: {
      label: "Withdrawal",
      bgClass: "bg-light-warning",
      textClass: "text-warning",
    },
    blocked: {
      label: "Blocked",
      bgClass: "bg-light-error",
      textClass: "text-error",
    },
    disputed: {
      label: "Disputed",
      bgClass: "bg-light-error",
      textClass: "text-error",
    },
    refund: {
      label: "Refund",
      bgClass: "bg-light-error",
      textClass: "text-error",
    },
  };
  const chipConfig = statusConfig[type];

  return (
    chipConfig && (
      <div
        className={`chips h-7 px-2.5 max-w-fit rounded-full flex items-center ${chipConfig.bgClass}`}
      >
        <label className={`medium font-medium ${chipConfig.textClass}`}>
          {chipConfig.label}
        </label>
      </div>
    )
  );
};

export default Chips;
