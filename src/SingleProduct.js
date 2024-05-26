import { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useProductContext } from "./context/ProductContext";
import PageNavigation from "./component/PageNavigation";
import MyImage from "./component/MyImage";
import { Container } from "./styles/Container";
import FormatPrice from "./Helpers/FormatPrice";
import { TbTruckDelivery } from "react-icons/tb";
import { TbReplace } from "react-icons/tb";
import { MdSecurity } from "react-icons/md";
import Star from "./component/Star";
import AddToCart from "./component/AddToCart";

const API = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const { id: alias, title, image, rating, price, description } = singleProduct;

  // const ratings = rating.rate;
  // const counts = rating.count;
  // console.log(counts);

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="page_Loading">Loading .....</div>;
  }

  console.log(title);
  console.log(image);

  return (
    <Wrapper>
      <PageNavigation title={title} />
      <Container className="container">
        <div className="grid grid-two-column">
          <div className="product_images">
            <MyImage image={image} />
          </div>

          <div className="product-data">
            <h2>{title}</h2>
            {/* <Star rating={rating} /> */}
            <div className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={price + 250000} />
              </del>
              <p className="product-data-price product-data-real-price">
                Deal of the Day: <FormatPrice price={price} />
              </p>
              <p>{description}</p>
              <div
                className="product-data-warranty"
                style={{ margin: "20px 0px" }}
              >
                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Free Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <TbReplace className="warranty-icon" />
                  <p>30 Days Replacement</p>
                </div>

                <div className="product-warranty-data">
                  <TbTruckDelivery className="warranty-icon" />
                  <p>Vaibhav Delivery</p>
                </div>

                <div className="product-warranty-data">
                  <MdSecurity className="warranty-icon" />
                  <p>2 Year Warranty</p>
                </div>
              </div>
              {/* <div className="product-data-info" style={{ margin: "20px 0px" }}>
                <p>
                  Available:{" "}
                  <span>{ratings > 0 ? "In Stock" : "Not Available"}</span>
                </p>
                <p>
                  ID: <span>{id}</span>
                </p>
              </div> */}
              {/* <hr style={{ margin: "20px 0px" }} />
              {counts > 0 && <AddToCart product={singleProduct} />} */}
              {<AddToCart product={singleProduct} />}
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
