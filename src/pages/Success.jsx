import React, { useEffect, useState } from "react";
import { PropagateLoader } from "react-spinners";

const Success = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second delay before showing the success message
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {loading ? (
        <PropagateLoader color="#36d7b7" />
      ) : (
        <div className="text-center">
          <h2 className="text-4xl font-semibold mb-4 text-center">Order successful!</h2>
          <p>
            Your order has been placed successfully.
          </p>
        </div>
      )}
    </div>
  );
};

export default Success;
