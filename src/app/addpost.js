import React, { useEffect,useState } from "react";



function AddPost(props) {
    const { post, onSave, onUpdate } = props;

    const [selectedPost, setSelectedPost] = useState({
        id: null,
        title: '',
        body: '',
        userid: '',
    });

    useEffect(() => {
       setSelectedPost(post);
    }, [post])

    const handleInputs = (e) => {
        const post = selectedPost;
        post[e.target.name] = e.target.value;
        setSelectedPost(post);
    }
    

    const saveData = (e) => {
        e.preventDefault();
        const newpost = {
            id: selectedPost.id,
            title: selectedPost.title,
            body: selectedPost.body,
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
        <div ><h2>Edit {selectedPost.id}</h2>
            <div className="form-group">
                <h2>CRUD</h2>
            </div>
            <div className="form-group">
                <input type="text" name="title" className="form-control" placeholder="Title..."
                    value={selectedPost.title} onChange={handleInputs} required />
            </div>
            <div className="input-group">
                <textarea className="form-control" name="body" aria-label="With textarea"
                    placeholder="body..." value={selectedPost.body} onChange={handleInputs} required />
            </div>
            <div className="form-group mt-3">
                <input type="text" name="userId" className="form-control" placeholder="UserId..."
                    value={selectedPost.userId} onChange={handleInputs} required />
            </div>

            <div className="form-group">
                <button type="button" className="btn btn-primary" onClick={saveData}>Submit</button>
            </div>
        </div>
    )
}

export default AddPost;