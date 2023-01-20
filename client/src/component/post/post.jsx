import './post.css'

export default function Post({ post }) {
    return (
        <div className='post'>
            {post.photo&&(

            <img
                className='postImg'
                src={post.photo}
                alt='React'
            />
            )}
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCats">footBall</span>
                    <span className="postCats">Math</span>
                </div>
                <span className="postTitle">
                    {post.title}
                </span>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className='postDesc'>
                {post.desc}
            </p>
        </div>


    )
}
