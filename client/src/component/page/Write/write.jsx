import './write.css'

export default function write() {
    return (
        <div className='write'>
            <img
                className='writeImg'
                src='https://media.istockphoto.com/id/519162052/photo/fast-coding.jpg?s=612x612&w=0&k=20&c=GQYnIlkFJve_XQlRjZX5klclnJuwZ-6esZwuLQkqcGQ='
                alt='React'
            />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor='fileInput'>
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type='file' id='fileInput' style={{ display: 'none' }} />
                    <input type='text' placeholder='Title' className='writeInput' aoutoFocus={true} />
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder='Tell your story...'
                        type='text'
                        className='writeInput writeText'
                    ></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
