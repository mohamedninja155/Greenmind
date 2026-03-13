import React from "react";

function BottomBar() {
  return (
    <>
      <style>{`
.bottom-bar {
  height: 70px;
  background-color: #E3D1C8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #FFFFFF;
}

.team-name {
  color: #4F2016;
  margin: 0 8px;
}
      `}</style>

      <div className="bottom-bar">
        Created by <span className="team-name">GreenMind Team</span> | all rights reserved by EELU
      </div>
    </>
  );
}

export default BottomBar;