import React from "react";

const TechinfoPage = () => {
  return (
    <div id="techinfo-page">
      <section className="hero">
        <img src="/img/agritech/agritech-hero.png" alt="" />
        <div className="title">
          <div className="line"></div>
          <h1>Technology Information</h1>
        </div>
      </section>

      <div className="desc-tech">
        <span>
          <p>
            Communication constitutes the most important thing in business
            operation, particularly in the coordination among all subsidiaries
            of PT Triputra Agro Persada Tbk (TAP Group) spread across Sumatra
            and Kalimantan. We proudly announce that all plantations and
            business locations have been 100% connected digitally. The existence
            of digital network technology will bring out good impacts on the
            Company and its organizations. For instance, fast data retrieval,
            near real-time analytics, can help to speed up the decision-making
            process. This technology is also important when recruiting
            millenials, as they are inseparable from the internet and social
            media. Through digital technology, knowledge updates and independent
            learning can be commenced anywhere, even in remote plantations or
            business locations.
          </p>
          <p>
            The Company has the vision and mission to become the best plantation
            for the world. In light of that, TAP Group built a system that
            employs the latest technology. We collect raw data in almost
            real-time fashion. Transaction data, aerial photos, GPS tracking,
            and other pieces of information are then stored and processed in a
            centralized data warehouse. Consequently, we can deliver graphic
            information to decision makers faster to ensure the identification
            of problems and implementation of corrective actions or
            improvements. TAP Group will continue to develop various systems
            that support the creation of excellence in its operational
            activities, as per the vision and mission of the Company.
          </p>
        </span>
        <img
          src="/img/agritech/drone.png"
          alt=""
          style={{
            width: "50%",
            height: "auto",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default TechinfoPage;
