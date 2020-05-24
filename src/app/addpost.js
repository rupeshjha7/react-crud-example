import React, { useEffect, useState } from "react";



function AddPost(props) {
    const { post, onSave, onUpdate } = props;

    const [selectedPost, setSelectedPost] = useState(null);
    const [title, settitle] = useState('');
    const [body, setbody] = useState('');
    const [userId, setuserId] = useState('')



    useEffect(() => {
        setSelectedPost(post);
        setbody(post.body);
        settitle(post.title);
        setuserId(post.userId);
    }, [post])

    const handleInputs = (e) => {
        if (e.target.name === 'title') {
            settitle(e.target.value);
        }
        if (e.target.name === 'body') {
            setbody(e.target.value);
        }
        if (e.target.name === 'userId') {
            setuserId(e.target.value);
        }
    }


    const saveData = (e) => {
        e.preventDefault();
        const newpost = {
            id: selectedPost.id,
            title: title,
            body: body,
            userid: selectedPost.userId,
        };
        if (newpost.id) {
            onUpdate(newpost);
        } else {
            onSave(newpost);
        }

    };
    return (
        <div >
            <div className="form-group">
                <h2 className="text-center mb-5 mt-0 ">CRUD Operation</h2>
            </div>
            <div className="form-group">
                <input type="text" name="title" className="form-control" placeholder="Title..."
                    value={title} onChange={handleInputs} required />
            </div>
            <div className="input-group">
                <textarea className="form-control" name="body" aria-label="With textarea"
                    placeholder="body..." value={body} onChange={handleInputs} required />
            </div>
            <div className="form-group mt-3">
                <input type="text" name="userId" className="form-control" placeholder="userId..."
                    value={userId} onChange={handleInputs} required />
            </div>
           

            <div className="form-group mt-3">
                <button type="button" className="btn btn-primary" onClick={saveData}>Submit</button>
            </div>
        </div>
    )
}

export default AddPost;