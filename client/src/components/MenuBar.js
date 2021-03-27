import react from "react";

export default function MenuBar(children) {
  return (
    <div className="menu-bar">
      <ul className="menu-list">
        <li className="list">Profile</li>
        <li className="list">Projects</li>
      </ul>
    </div>
  );
}
