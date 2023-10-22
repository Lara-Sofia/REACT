import React, { useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleProgressIncrease = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const handleProgressDecrease = () => {
    if (progress > 0) {
      setProgress(progress - 10);
    }
  };

  return (
    <div>
      <button onClick={handleProgressDecrease}>-</button>
      <progress value={progress} max={100} />
      <button onClick={handleProgressIncrease}>+</button>
    </div>
  );
};

export default ProgressBar;
