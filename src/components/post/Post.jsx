import "./post.css"

export default function Post() {
  return (
    <div className='post'>
      <div className="postItem">
        
        <img className="postImg" src="https://plus.unsplash.com/premium_photo-1661342406124-740ae7a0dd0e?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="work" />
        <p className="postAbout">
        <span className="postWorkDesc"> Plumbing work needed:</span>
        Fix leaks, repair pipes, and install fixtures. Reliable service with prompt response and quality workmanship."
        </p>
      </div>
      {/* <div className="postInfo">
        <span className="postDate">1 hour ago</span>
        <span className="postLocation">jammu</span>
      </div> */}
      </div>
   
  )
}
