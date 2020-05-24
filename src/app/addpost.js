import React, { useEffect, useState } from "react";



function AddPost(props) {
    const { post, onSave, onUpdate } = props;

    const [selectedPost, setSelectedPost] = useState(null);
    const [title, settitle] = useState('');
    const [body, setbody] = useState('')



    useEffect(() => {
        setSelectedPost(post);
        setbody(post.body);
        settitle(post.title);
    }, [post])

    const handleInputs = (e) => {
        if (e.target.name === 'title') {
            settitle(e.target.value);
        }
        if (e.target.name === 'body') {
            setbody(e.target.value);
        }
    }


    const saveData = (e) => {
        e.preventDefault();
        const newpost = {
            id: selectedPost.id,
            title: title,
            body: body,
            userid: selectedPost.userid,
        };
        if (newpost.id) {
            onUpdate(newpost);
        } else {
            onSave(newpost);
        }

    };

    // componentDidUpdate(prev, props) {
    //     if (this.props.post !== prev.post) {
    //         this.setState({ post: this.props.post });

    //     }
    // }






    return (
        <div >
            <div className="form-group">
                <h2>CRUD</h2>
            </div>
            <div className="form-group">
                <input type="text" name="title" className="form-control" placeholder="Title..."
                    value={title} onChange={handleInputs} required />
            </div>
            <div className="input-group">
                <textarea className="form-control" name="body" aria-label="With textarea"
                    placeholder="body..." value={body} onChange={handleInputs} required />
            </div>
           

            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={saveData}>Submit</button>
            </div>
        </div>
    )
}

export default AddPost;