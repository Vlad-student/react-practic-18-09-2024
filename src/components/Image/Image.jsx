import './Image.css'

const Image = (props) => {
    const {src='url' , alt='image'}=props
    return (
    <img src={src} alt={alt} className='image' />
    );
}

export default Image;
