import Post from '../post/Post'
import './serviceListingSidebar.css'

export default function ServiceListingSidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarItem">
        <span className="sidebarTitle">Grab a Work</span>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
       <Post/>
        
      </div>
    </div>
  )
}
