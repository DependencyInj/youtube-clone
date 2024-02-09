import React from 'react';
import CommentList from './CommentList';

const comments = [
 {
    name: 'user 1',
    comment: 'test comment 1',
    replies: [
        {
            name: 'user 2',
            comment: 'reply comment 1',
            replies: []
        },
        {
            name: 'user 3',
            comment: 'reply comment 2',
            replies: [
                {
                    name: 'user 2',
                    comment: 'reply comment 3',
                    replies: [
                        {
                            name: 'user 2',
                            comment: 'reply comment 4',
                            replies: []
                        }
                    ]
                }
            ]
        }
    ]
 },
 {
    name: 'user 1',
    comment: 'test comment 1',
    replies: [
        {
            name: 'user 2',
            comment: 'reply comment 1',
            replies: []
        },
        {
            name: 'user 3',
            comment: 'reply comment 2',
            replies: [
                {
                    name: 'user 2',
                    comment: 'reply comment 3',
                    replies: [
                        {
                            name: 'user 2',
                            comment: 'reply comment 1',
                            replies: []
                        },
                        {
                            name: 'user 3',
                            comment: 'reply comment 2',
                            replies: []
                        },
                        {
                            name: 'user 2',
                            comment: 'reply comment 3',
                            replies: []
                        },
                        {
                            name: 'user 3',
                            comment: 'reply comment 4',
                            replies: []
                        }
                    ]
                }
            ]
        }
    ]
 }
]

const CommentsContainer = () => {
  return (
    <div className='m-5'>
        <h1 className='font-bold text-2xl'>Comments: </h1>
        <CommentList comments={comments} />
    </div>
  )
}

export default CommentsContainer;