import React, { useState } from "react";
import "./styles.css";

function App() {
  // Dữ liệu mẫu sản phẩm
  const products = [
    {
      id: 1,
      name: "Nike Air Max 90",
      price: "3,500,000 VND",
      category: "Giày",
      img: "https://i.pinimg.com/236x/65/5f/9a/655f9aac4bae87d42eca60de61f43cb8.jpg",
      description: "Giày Nike Air Max 90 với thiết kế năng động và phong cách.",
    },
    {
      id: 2,
      name: "Nike Free RN 5.0",
      price: "2,800,000 VND",
      category: "Giày",
      img: "https://i.pinimg.com/236x/54/16/86/541686569d4a1917152c1fbe8864b680.jpg",
      description:
        "Nike Free RN 5.0 giúp bạn chạy tự nhiên với sự thoải mái tối đa.",
    },
    {
      id: 3,
      name: "Nike Air Zoom Pegasus",
      price: "3,200,000 VND",
      category: "Giày",
      img: "https://i.pinimg.com/474x/3b/9b/f9/3b9bf9b07b974c568ac62325fb7ac86c.jpg",
      description: "Air Zoom Pegasus cung cấp sự thoải mái và tốc độ khi chạy.",
    },
    {
      id: 4,
      name: "Nike Dri-FIT Shirt",
      price: "750,000 VND",
      category: "Quần áo",
      img: "https://i.pinimg.com/236x/61/b4/d6/61b4d6bbee91a31e1f7a9c01255258b4.jpg",
      description: "Áo thun Nike Dri-FIT thoáng mát, thấm hút mồ hôi hiệu quả.",
    },
    {
      id: 5,
      name: "Nike Training Shorts",
      price: "950,000 VND",
      category: "Quần áo",
      img: "https://i.pinimg.com/236x/e2/54/28/e254285a8b4d6a10b7e98272ef43c781.jpg",
      description:
        "Quần short tập luyện Nike giúp bạn linh hoạt trong mọi bài tập.",
    },
    {
      id: 6,
      name: "Nike Sport Bra",
      price: "650,000 VND",
      category: "Quần áo",
      img: "https://i.pinimg.com/236x/af/04/4b/af044b06e46d454fcd4b65a7c79a3f21.jpg",
      description: "Áo lót thể thao Nike đem lại sự thoải mái và hỗ trợ.",
    },
    {
      id: 7,
      name: "Nike Swoosh Cap",
      price: "450,000 VND",
      category: "Phụ kiện",
      img: "https://i.pinimg.com/236x/98/f8/c0/98f8c049a45cff05d8116c3668b35ddc.jpg",
      description:
        "Mũ Nike Swoosh bảo vệ bạn khỏi ánh nắng mặt trời với phong cách.",
    },
    {
      id: 8,
      name: "Nike Tech Fleece Hoodie",
      price: "1,800,000 VND",
      category: "Quần áo",
      img: "https://i.pinimg.com/236x/de/c4/5d/dec45da1dae12f870b362958f8f21ad7.jpg",
      description:
        "Áo hoodie Nike Tech Fleece ấm áp và thoải mái cho mọi hoạt động.",
    },
    {
      id: 9,
      name: "Nike VaporMax",
      price: "4,200,000 VND",
      category: "Giày",
      img: "https://i.pinimg.com/236x/e4/45/af/e445af1b0bcd9e35060f3a458dc02505.jpg",
      description:
        "Giày Nike VaporMax với công nghệ đệm khí giúp bạn có cảm giác bay bổng.",
    },
    {
      id: 10,
      name: "Nike Air Force 1",
      price: "3,800,000 VND",
      category: "Giày",
      img: "https://i.pinimg.com/236x/2b/d9/b0/2bd9b03f703fa76421e1a872f0ca0060.jpg",
      description:
        "Nike Air Force 1 là biểu tượng của phong cách và sự bền bỉ.",
    },
    // Thêm sản phẩm mới
    {
      id: 11,
      name: "Nike Running Tights",
      price: "1,200,000 VND",
      category: "Quần áo",
      img: "https://i.pinimg.com/236x/8c/e5/60/8ce560f544749b748d80c976eacac202.jpg",
      description:
        "Quần legging chạy Nike với chất liệu co giãn, tạo sự thoải mái tối đa.",
    },
    {
      id: 12,
      name: "Nike Tech Fleece Pants",
      price: "1,400,000 VND",
      category: "Quần áo",
      img: "https://i.pinimg.com/236x/d6/e7/e3/d6e7e3e62e9b2da65e993434e14329e9.jpg",
      description:
        "Quần Nike Tech Fleece với chất liệu ấm áp và thoải mái cho mùa đông.",
    },
  ];

  // Trạng thái giỏ hàng, yêu thích và các sản phẩm đã đánh giá
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [ratings, setRatings] = useState({});
  const [thankYouMessage, setThankYouMessage] = useState(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const addToWishlist = (product) => {
    setWishlist([...wishlist, product]);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Hiển thị chi tiết sản phẩm
  };

  const handleRating = (productId, rating) => {
    setRatings({ ...ratings, [productId]: rating });
  };

  const handleCheckout = () => {
    setThankYouMessage("Cảm ơn bạn đã mua hàng!");
    setCart([]); // Giỏ hàng sẽ được làm trống sau khi thanh toán
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="logo">Nike</div>
        <div className="nav">
          <a href="#home">Trang chủ</a>
          <a href="#shop">Sản phẩm</a>
          <a href="#contact">Liên hệ</a>
        </div>
        <div className="cart">
          <span>{cart.length} sản phẩm</span>
        </div>
      </header>

      {/* Banner */}
      <section className="banner">
        <h1></h1>
      </section>

      {/* Nếu có sản phẩm được chọn, hiển thị chi tiết */}
      {selectedProduct && (
        <section className="product-detail">
          <h2>{selectedProduct.name}</h2>
          <img src={selectedProduct.img} alt={selectedProduct.name} />
          <p>{selectedProduct.description}</p>
          <p>
            <strong>{selectedProduct.price}</strong>
          </p>
          <button onClick={() => addToCart(selectedProduct)}>
            Thêm vào giỏ hàng
          </button>
          <button onClick={() => addToWishlist(selectedProduct)}>
            Thêm vào yêu thích
          </button>
          <div className="rating">
            <span>Đánh giá: </span>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleRating(selectedProduct.id, star)}
              >
                {star}⭐
              </button>
            ))}
          </div>
          <button onClick={() => setSelectedProduct(null)}>Đóng</button>
        </section>
      )}

      {/* Danh sách sản phẩm */}
      {!selectedProduct && (
        <section className="products">
          {products.map((product) => (
            <div
              className="product"
              key={product.id}
              onClick={() => handleProductClick(product)}
            >
              <img src={product.img} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          ))}
        </section>
      )}

      {/* Nút thanh toán */}
      {cart.length > 0 && (
        <section className="checkout">
          <button onClick={handleCheckout}>Thanh toán</button>
        </section>
      )}

      {/* Hiển thị thông báo cảm ơn với hiệu ứng */}
      {thankYouMessage && (
        <section className="thank-you">
          <div className="thank-you-message">
            <h2>{thankYouMessage}</h2>
          </div>
        </section>
      )}

      {/* Chatbox hỗ trợ khách hàng */}
      <section className="chatbox">
        <h3>Chat hỗ trợ</h3>
        <div className="chat-content">
          <p>Chào bạn! Cần hỗ trợ gì không?</p>
        </div>
        <input type="text" placeholder="Nhập tin nhắn..." />
        <button>Gửi</button>
      </section>

      {/* Thông tin liên hệ */}
      <section className="contact">
        <h3>Thông tin liên hệ</h3>
        <p>Email: support@nike.com</p>
        <p>Điện thoại: 1800 1234</p>
        <p>Địa chỉ: 123 Nike Street, Thành phố Hồ Chí Minh, Việt Nam</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Nike, Inc. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
