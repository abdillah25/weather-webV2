import PropTypes from "prop-types";

const CarouselChild = (props) => {
  const { children, className } = props;
  return (
    <div className={`carousel-item ${className}`}>
      {/* <img src="/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="rounded-box" /> */}
      {children}
    </div>
  );
};

CarouselChild.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default CarouselChild;
