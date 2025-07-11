import React from "react";
import "./Orders.scss";

const Orders = () => {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>

        {/* ✅ Responsive scroll wrapper */}
        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>{currentUser.isSeller ? "Buyer" : "Seller"}</th>
                <th>Contact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td>Stunning concept art</td>
                <td>59.<sup>99</sup></td>
                <td>Maria Anders</td>
                <td>
                  <img className="message" src="./img/message.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td>Ai generated concept art</td>
                <td>79.<sup>99</sup></td>
                <td>Francisco Chang</td>
                <td>
                  <img className="message" src="./img/message.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td>High quality digital character</td>
                <td>110.<sup>99</sup></td>
                <td>Roland Mendel</td>
                <td>
                  <img className="message" src="./img/message.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td>Hyper realistic painting</td>
                <td>39.<sup>99</sup></td>
                <td>Helen Bennett</td>
                <td>
                  <img className="message" src="./img/message.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td>Original AI art</td>
                <td>119.<sup>99</sup></td>
                <td>Yoshi Tannamuri</td>
                <td>
                  <img className="message" src="./img/message.png" alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <img
                    className="image"
                    src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                    alt=""
                  />
                </td>
                <td>Text-based AI art</td>
                <td>49.<sup>99</sup></td>
                <td>Giovanni Rovelli</td>
                <td>
                  <img className="message" src="./img/message.png" alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
