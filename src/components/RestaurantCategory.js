import ResCategoryItems from "./ResCategoryItems";

const RestaurantCategory = ({ category }) => {
  return (
    <div className="accordion" id="accordionExample">
        {category?.map((c, index) => {
          const collapseId = `collapse${index}`;
          const headingId = `heading${index}`;

          return (
            <div className="accordion-item" key={c.categoryId}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded="true"
                  aria-controls={collapseId}
                >
                  <strong>{c.card.card.title} ({c.card.card.itemCards.length})</strong>
                </button>
              </h2>
              <div
                id={collapseId}
                className="accordion-collapse collapse"
                aria-labelledby={headingId}
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  <ResCategoryItems data={c.card.card} />
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantCategory;
