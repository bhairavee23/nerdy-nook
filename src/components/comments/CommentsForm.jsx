import React from 'react';
import cntl from 'cntl';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';
import { useState } from 'react';

const inputCN = cntl`
    bg-gray-200 
    appearance-none 
    border-2 
    border-gray-200 
    rounded 
    w-full 
    py-2 
    px-4 
    text-gray-700 
    leading-tight 
    focus:outline-none 
    focus:bg-white 
    focus:border-red-500 
    hover:border-red-500
`;

const textareaCN = cntl`
    bg-gray-200 
    appearance-none 
    border-2 
    border-gray-200 
    rounded 
    w-full 
    py-2 
    px-4 
    text-gray-700 
    leading-tight 
    focus:outline-none 
    focus:bg-white 
    focus:border-red-500 
    hover:border-red-500
    h-48
`;

const commentSubmitQuery = gql`
    mutation($author: String, $commentOn: Int, $content: String, $authorEmail: String) {
        createComment(
            input: {
                clientMutationId: "CreateComment"
                author_name: $authorName
                post: $commentOn
                content: $content
                author_email: $authorEmail
                author_url: $authorUrl
            }
        ) {
            success
        }
    }
`;

const CommentsForm = (props) => {
    const [commentStatus, setCommentStatus] = useState('');
    const [values, setValues] = useState({
        post: props.postId,
        content: '',
        author_name: '',
        author_email: '',
        author_url: '',
    });

    console.log(props.postId);

    const handleInputChange = e => {
        const {name, value} =  e.target;
        setValues({...values, [name]: value});
        console.log(values);
    }

    return (
        <Mutation
            mutation={commentSubmitQuery}
            // Set completion state.
            onCompleted={() => {
                setCommentStatus('success');
            }}
            // Set error state.
            onError={() => {
                setCommentStatus('error');
            }}
        >
            {(addComment) => (
                <form class="w-full max-w-2xl"
                    onSubmit={(event) => {
                        event.preventDefault();
                        setCommentStatus('loading');
                        addComment({
                            variables: {
                                author: values.author_name,
                                commentOn: values.post,
                                content: values.content,
                                authorEmail: values.author_email,
                                authorUrl: values.author_url
                            },
                        });
                    }}
                >
                    <div class="flex items-center mb-6">
                        <div class="md:w-1/4">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="author_name">
                                Name
                            </label>
                        </div>
                        <div class="md:w-1/2">
                            <input className={inputCN} id="author_name" name="author_name" type="text" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/4">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="author_email">
                                Email
                            </label>
                        </div>
                        <div class="md:w-1/2">
                            <input className={inputCN} id="author_email" name="author_email" type="text" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/4">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="author_url">
                                Website
                            </label>
                        </div>
                        <div class="md:w-1/2">
                            <input className={inputCN} id="author_url" name="author_url" type="text" onChange={handleInputChange}/>
                        </div>
                    </div>
                    <div class="md:flex md:items-center mb-6">
                        <div class="md:w-1/4">
                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="content">
                                Comment
                            </label>
                        </div>
                        <div class="md:w-1/2">
                            <textarea class={textareaCN} rows='5' cols='30' id="content" name="content" onChange={handleInputChange}/> 
                        </div>
                    </div>
                    <div class="md:flex md:items-center">
                        <div class="md:w-1/4"></div>
                        <div class="md:w-1/2">
                            <button class="shadow bg-red-600 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit">
                                Submit comment
                            </button>
                        </div>
                    </div>
                </form>
            )}
        </Mutation>
    );

    // const switchForm = () => {
    //     switch (values.commentStatus) {
	// 		case 'success':
	// 			return 'Your comment has been successfully submitted.';
	// 		case 'loading':
	// 			return 'Please wait. Your comment is being submitted.';
	// 		case 'error':
	// 			return 'There was an error in your submission. Please try again later.';
	// 		default:
	// 			return this.renderCommentForm();
	// 	}
    // }

    
}
export default CommentsForm;