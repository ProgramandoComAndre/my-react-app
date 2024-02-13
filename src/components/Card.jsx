import profilePic from '../assets/my_channel_image.jpg'
function Card() {
 return (
 <div className="card">
    <img className="card-image" src={profilePic} alt="profile picture"></img>
    <h2 className='card-title'>Programando com Andre</h2>
    <p className='card-text'>I make blog posts</p>
 </div>)
}

export default Card