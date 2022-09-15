import React from 'react'
import { Link } from "react-router-dom";

export default function Movies(){
    return(
        <div className="content">
        <h3>Our Favorites</h3>
        <div className="bokning">
          {[0,1,2,3].map(b => (
            <div key={b}>
              <Link to={`/bokning/${b}`}>
                <img src="/images/fox.jpeg" width={200} height={300} alt="bokning" />
              </Link>
            </div>
          ))}
        </div>
        <h3>Classic Comedy</h3>
        <div className="bokning">
          {[4,5,6,7].map(b => (
            <div key={b}>
              <Link to={`/bokning/${b}`}>
                <img src="/images/grand.jpeg"  alt="bokning" />
              </Link>
            </div>
          ))}
        </div>
        <h3>New Comedy</h3>
        <div className="bokning">
          {[8,9,10,11].map(b => (
            <div key={b}>
              <Link to={`/bokning/${b}`}>
                <img src="/images/isle.jpeg" alt="bokning" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  }