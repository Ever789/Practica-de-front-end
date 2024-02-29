import React from 'react';
import { AiOutlineFolder } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../estilos/Folder.css';

function Folder() {
  return (
    <div className="folder">
      <Link to="/peliculas" className="folder-link">
        <AiOutlineFolder className="folder-icon" />
      </Link>
      <Link to="/series" className="folder-link">
        <AiOutlineFolder className="folder-icon" />
      </Link>
    </div>
  );
}

export default Folder;