import React from "react";


const ShowPost = (props) => {
    const  {posts, onEdit, deletePost} = props;
    return (
        <table className="table border shadow mt-4">
            <thead className="thead-dark">
                <tr >
                    <th scope="col">TITLE</th>
                    <th scope="col">BODY</th>
                    <th scope="col">USERID</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            {posts.map((post) => (
                <tbody key={post.id}>
                    <tr >
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        <td>{post.userid}</td>
                        <td><button type="button" className="btn btn-primary"
                            onClick={() => onEdit(post)}>Update</button></td>
                        <td><button type="button" className="btn btn-primary"
                            onClick={() => deletePost(post.id)}>Delete</button></td>
                    </tr>
                </tbody>
            ))}
        </table>
    );
};
export default ShowPost;