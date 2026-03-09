import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();

  const placeOrder = () => {
    alert("Order placed");

    navigate("/");
  };

  return (
    <div>
      <h2>Checkout</h2>

      <input placeholder="Name" />
      <input placeholder="Address" />

      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}

export default Checkout;