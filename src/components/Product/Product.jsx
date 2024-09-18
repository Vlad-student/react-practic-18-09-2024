import './Product.css'

const Product = (props) => {
    const {name = 'choose', amount=0 , cost=0}=props;
    return (
        <div>
            <tr>title: {name}</tr>
            <tr>amount: {amount}</tr>
            <tr>total cost: {cost}</tr>
        </div>
    );
}

export default Product;
