import './singlePost.css'


export default function singlePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
        <img
                className='singlePostImg'
                src='https://media.istockphoto.com/id/519162052/photo/fast-coding.jpg?s=612x612&w=0&k=20&c=GQYnIlkFJve_XQlRjZX5klclnJuwZ-6esZwuLQkqcGQ='
                alt='React'
            />

          <h1 className="singlePostTitle">
            Lorem ipsum, dolor sit amet 
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
          </h1>
       
        <div className="singlePostInfo">
          <span className="singlePostAuthor">Author: <b>Eyob</b></span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className='singlePostDesc'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Incidunt iure ratione ut error officiis beatae esse! Ratione quo qui, 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Incidunt iure ratione ut error officiis beatae esse! Ratione quo qui,
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Incidunt iure ratione ut error officiis beatae esse! Ratione quo qui, 
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Incidunt iure ratione ut error officiis beatae esse! Ratione quo qui, 
     
        </p>
        </div>
        </div>
  )
}
