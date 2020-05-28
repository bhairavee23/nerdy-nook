import React from 'react';
import parse from 'html-react-parser';
// import './Card.scss';    

// const Card = () => {
//     return (
//         <div class="blog-wrapper">
//             <div class="blog-card">
//                 {/* <div class="card-img"> */}
//                     {/* <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/> */}
//                     {/* <h1>New York</h1> */}
//                 {/* </div> */}
//                 <div class="card-details"><span><i class="fa fa-calendar"></i>May 18</span><span><i class="fa fa-heart"></i>-</span></div>
//                 <div class="card-text"><p>This is post one</p></div>
//                 <div class="read-more">Nothing more to read</div>
//             </div>
//             <div class="blog-card">
//                 {/* <div class="card-img"> */}
//                     {/* <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/> */}
//                     {/* <h1>New York</h1> */}
//                 {/* </div> */}
//                 <div class="card-details"><span><i class="fa fa-calendar"></i>May 18</span><span><i class="fa fa-heart"></i>-</span></div>
//                 <div class="card-text"><p>This is post two</p></div>
//                 <div class="read-more">Nothing more to read</div>
//             </div>
//             <div class="blog-card">
//                 {/* <div class="card-img"> */}
//                     {/* <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/> */}
//                     {/* <h1>New York</h1> */}
//                 {/* </div> */}
//                 <div class="card-details"><span><i class="fa fa-calendar"></i>May 18</span><span><i class="fa fa-heart"></i>-</span></div>
//                 <div class="card-text"><p>This is post three</p></div>
//                 <div class="read-more">Nothing more to read</div>
//             </div>
//             <div class="blog-card">
//                 {/* <div class="card-img"> */}
//                     {/* <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/> */}
//                     {/* <h1>New York</h1> */}
//                 {/* </div> */}
//                 <div class="card-details"><span><i class="fa fa-calendar"></i>May 18</span><span><i class="fa fa-heart"></i>-</span></div>
//                 <div class="card-text"><p>This is post four</p></div>
//                 <div class="read-more">Nothing more to read</div>
//             </div>
//             <div class="blog-card">
//                 {/* <div class="card-img"> */}
//                     {/* <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/> */}
//                     {/* <h1>New York</h1> */}
//                 {/* </div> */}
//                 <div class="card-details"><span><i class="fa fa-calendar"></i>May 18</span><span><i class="fa fa-heart"></i>-</span></div>
//                 <div class="card-text"><p>This is post five</p></div>
//                 <div class="read-more">Nothing more to read</div>
//             </div>
//             <div class="blog-card">
//                 {/* <div class="card-img"> */}
//                     {/* <img src="https://images.unsplash.com/photo-1518235506717-e1ed3306a89b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"/> */}
//                     {/* <h1>New York</h1> */}
//                 {/* </div> */}
//                 <div class="card-details"><span><i class="fa fa-calendar"></i>May 18</span><span><i class="fa fa-heart"></i>-</span></div>
//                 <div class="card-text"><p>This is post six</p></div>
//                 <div class="read-more">Nothing more to read</div>
//             </div>
//             {/* <div class="blog-card">
//                 <div class="card-img">
//                     <img src="https://images.unsplash.com/photo-1445368794737-0cf251429ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"/>
//                     <h1>San Francisco</h1>
//                 </div>
//                 <div class="card-details">
//                     <span>
//                         <i class="fa fa-calendar"></i>AUG 1
//                     </span>
//                     <span>
//                         <i class="fa fa-heart"></i>265
//                     </span>
//                 </div>
//                 <div class="card-text">
//                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si verbum sequimur, primum longius verbum praepositum quam bonum.</p>
//                 </div>
//                 <div class="read-more">Read More</div>
//             </div> */}
//         </div>
        
//     );
// };

const Card = ({ data }) => {
    const {title, excerpt} = data;
    return (
        
            <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-2xl overflow-hidden border m-6 mx-8">
                <div className="-mb-8">
                <img src="https://cdn.pixabay.com/photo/2016/05/24/16/48/mountains-1412683_1280.png" alt="montaña" />
                </div>
                <div className="space-y-3 divide-y divide-red-700">
                    <div className="text-center pt-6">
                        <h3 className="text-gray-700 font-semibold text-md">
                            {title}
                        </h3>
                    </div>
                    <div className="px-3 pb-3 pt-4">
                        <p className="text-sm text-gray-900 leading-sm">
                            {parse(excerpt)}
                        </p>
                    </div>
                </div>
                <button
                class="bg-red-700 w-full flex justify-center py-2 text-white font-semibold transition duration-300 hover:underline"
                >
                    Read More...
                </button>
            </div>
        
    )
}
export default Card;
