import React from "react";
import styles from "./Business.module.css";

const Business = ({ business }) => {
  return (
    <div key={business.id} className={styles.Business}>
      <div className={styles.imageContainer}>
        <img src={business.image_url} alt="" />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.BusinessInformation}>
        <div className={styles.BusinessAddress}>
          <p>{business.location.address1}</p>
          <p>{business.location.city}</p>
          <p>{`${business.location.state} ${business.location.zip_code}`}</p>
        </div>
        <div className={styles.BusinessReviews}>
          <h3>{business.categories[0].title.toUpperCase()}</h3>
          <h3 className={styles.rating}>{`${business.rating} stars`}</h3>
          <p>{`${business.review_count} reviews`}</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
