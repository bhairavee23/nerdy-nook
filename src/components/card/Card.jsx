import React from 'react';
import parse from 'html-react-parser';
import {Link} from 'gatsby';

const Card = ({data, slug}) => {

    console.log(data);
    const {post_header, post_excerpt, post_header_image} = data;
    
    const url = "/"+slug;

    return (
        
        <Link className="shadow-none" to={url}>
            <div className="max-w-sm bg-white rounded-lg shadow-md hover:shadow-2xl overflow-hidden border m-6 mx-8">
                <div className="-mb-8">
                <img className="h-48 w-full" src={post_header_image.source_url}/>
                </div>
                <div className="space-y-3 divide-y divide-red-700">
                    <div className="text-center pt-4 uppercase">
                        <h3 className="text-gray-700 font-semibold text-md">
                            {post_header}
                        </h3>
                    </div>
                    <div className="px-3 pb-3 pt-4">
                        <p className="text-sm text-gray-900 leading-sm text-center">
                            {parse(post_excerpt)}
                        </p>
                    </div>
                </div>
                
            </div>
            </Link>
        
    )
}
export default Card;
