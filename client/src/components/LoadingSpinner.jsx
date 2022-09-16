import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="text-center py-24 mb-24">
      <div class="spinner-border" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;