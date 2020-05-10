import React from 'react';
import './Card.scss';

const Card = () => {
    return (
        <div class="blog-wrapper">
            <div class="blog-card">
                <div class="card-img">
                    <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/>
                    <h1>New York</h1>
                </div>
                <div class="card-details"><span><i class="fa fa-calendar"></i>AUG 4</span><span><i class="fa fa-heart"></i>102</span></div>
                <div class="card-text"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si verbum sequimur, primum longius verbum praepositum quam bonum.</p></div>
                <div class="read-more">Read More</div>
            </div>
            <div class="blog-card">
                <div class="card-img">
                    <img src="https://images.unsplash.com/photo-1445368794737-0cf251429ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"/>
                    <h1>San Francisco</h1>
                </div>
                <div class="card-details">
                    <span>
                        <i class="fa fa-calendar"></i>AUG 1
                    </span>
                    <span>
                        <i class="fa fa-heart"></i>265
                    </span>
                </div>
                <div class="card-text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si verbum sequimur, primum longius verbum praepositum quam bonum.</p>
                </div>
                <div class="read-more">Read More</div>
            </div>
        </div>
        
    );
};

export default Card;