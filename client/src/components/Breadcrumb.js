// Header

const Breadcrumb = () => {
  // JSX

  return (
    <>
      <div id="UnitMastheadWrapper" className="UnitMastheadWrapper">
        <div id="UnitMasthead" className="UnitMasthead">
          <div className="SiteTitle">
            Computer Science Graduate Course Registration
          </div>
        </div>
      </div>
      <nav className="breadcrumb-new" aria-label="Breadcrumb" role="navigation">
        <div
          id="Breadcrumb"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          <span
            className="ancestor"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
          >
            <a href="https://www.missouristate.edu" itemProp="item">
              <span itemProp="name">Missouri State</span>
            </a>
            <meta itemProp="position" content="1" />
          </span>
          <span
            className="ancestor"
            itemScope
            itemType="https://schema.org/ListItem"
            itemProp="itemListElement"
          >
            <a
              href="https://computerscience.missouristate.edu/"
              itemProp="item"
            >
              <span itemProp="name">Computer Science</span>
            </a>
            <meta itemProp="position" content="2" />
          </span>
          <span
            className="current-page"
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
          >
            <span itemProp="name">Course Request</span>
            <meta itemProp="position" content="3" />
          </span>
        </div>
      </nav>
    </>
  );
};

// Export
export default Breadcrumb;
