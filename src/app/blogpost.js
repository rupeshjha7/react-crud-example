import React, { useEffect, useState } from "react";
import AddPost from "./addpost";
import Axios from "axios";
import ShowPost from "./showpost";

const baseurl = "https://jsonplaceholder.typicode.com";

function BlogPost() {

    const [posts, setposts] = useState([]);
    const [post, setpost] = useState({});
    const [success, setsuccess] = useState("");
    const [error, seterror] = useState("");
    const [loading, setloading] = useState(false);

    const updateById = (id, updatepost) => {
        const newposts = posts.map(post => {
            if (post.id === id) {
                post.body = updatepost.body;
                post.title = updatepost.title;
                post.userId = updatepost.userId;
            }
            return post;
        });
        return newposts;
    }

    const handleSave = (post) => {
        setloading(true);
        Axios.post(`${baseurl}/posts`, post).then((response) => {
            posts.push(response.data);
            setpost(posts);
            setsuccess("Save Successfully");
            setloading(false);
            deletemsg();
        });
    }

    useEffect(() => {
        setloading(true);
        Axios.get(`${baseurl}/posts`).then((response) => {
            setposts(response.data);
            setsuccess("Updated Successfully");
            setloading(false);
            deletemsg();
        });
    }, [])

    const handleDelete = (id) => {
        setloading(true);
        Axios.delete(`${baseurl}/posts/${id}`).then((response) => {
            const newposts = posts.filter(post => (post.id !== id));
            setposts(newposts);
            setsuccess("Deleted Successfully");
            setloading(false);
            deletemsg();

        });
    }
    const handleUpdate = (post) => {
        setloading(true);
        Axios.patch(`${baseurl}/posts/${post.id}`, post).then((response) => {
            setposts(updateById(post.id, response.data));
            setsuccess("Updated Successfully");
            setloading(false);
            deletemsg();

        });
    }
    const handleEdit = (post) => {
        console.log(post, 'edit');
        setpost(post);
    }

    const deletemsg = () => {
        setTimeout(() => {
            setsuccess('')
        }, 2000);
    }
    return (
        <>
            {success ?
                <div className="alert alert-success mt-3"> {success}</div>
                : null}
            {loading ?
                <div >Processing ...</div>
                : null}

            {error ?
                <div className="alert alert-success mt-3">{error}</div>
                : null}

            <AddPost onSave={handleSave} post={post} onUpdate={handleUpdate} />
            <ShowPost posts={posts} onEdit={handleEdit} deletePost={handleDelete} />
        </>
    );
}
export default BlogPost;