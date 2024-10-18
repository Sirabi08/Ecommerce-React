import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text" style={{ padding: "10px", fontWeight: "bold" }}>
                New Season Arrivals
              </h5>
              <p className="card-text fs-5 d-none d-sm-block" style={{ backgroundColor: "white", color: "black", padding: "10px" }}>
                Discover the latest trends and elevate your style with our new season arrivals! Shop now for exclusive offers and fresh styles tailored just for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
