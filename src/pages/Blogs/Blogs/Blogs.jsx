import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Blogs = () => {
    useTitle('Blogs');

    return (
        <div className="py-20 bg-yellow-100 px-4">
            <h2 className="text-4xl text-center font-medium mb-16">Welcome To My Blogs</h2>
            <div>
                <div className="max-w-4xl mx-auto border-2 bg-base-100 rounded shadow-xl mb-14">
                    <div className="px-4 md:px-10 py-5 bg-base-300">
                        <h4 className="text-2xl font-medium">
                            1. What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </h4>
                    </div>
                    <div className="px-4 md:px-10 py-5 font-medium space-y-8">
                        <p>
                            Access token is a short lived token which allows access to resources for a short time period.
                        </p>
                        <p>
                            Refresh token is a longer lived token which can be used to obtain new access token after the old access
                            token expires.
                        </p>
                        <p>
                            When we need authentication and authorization both of these token are used for safer communication between
                            client and server. When a user logs in to a system, the system requests the authorization server for access
                            token. If the user is valid the authorization server gives an access token to the system which uses it to access the resources on user behalf. As access token is short lived when token expires, the system uses
                            refresh token to access a new access token from the authorization server. If the refresh token is valid new
                            access token is given to the system/application.
                        </p>
                        <p>
                            Access token and refresh token can be stored in a secure HTTP-only cookie. Though storing refresh token
                            in the client side is not recommended, rather it should be stored in the server side.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto border-2 bg-base-100 rounded shadow-xl mb-14">
                    <div className="px-4 md:px-10 py-5 bg-base-300">
                        <h4 className="text-2xl font-medium">
                            2. Compare SQL and NoSQL databases?
                        </h4>
                    </div>
                    <div className="px-4 md:px-10 py-5 font-medium space-y-8">
                        <p>
                            Here is an comparison between SQL and NoSQL databases:
                        </p>
                        <p className="ms-4">
                            1. SQL has tables, but NoSQL has collections.
                        </p>
                        <p className="ms-4">
                            2. SQL has the row column to store the data. But NoSQL has documents to store the data.
                        </p>
                        <p className="ms-4">
                            3. Also called relational databases. NoSQL also called non relational database.
                        </p>
                        <p className="ms-4">
                            4. Has predefined schema. NoSQL uses dynamic schema for unstructured data.
                        </p>
                        <p className="ms-4">
                            5. Example of SQL: MySQL. NoSQL example: mongodb.
                        </p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto border-2 bg-base-100 rounded shadow-xl mb-14">
                    <div className="px-4 md:px-10 py-5 bg-base-300">
                        <h4 className="text-2xl font-medium">
                            3. What is express js? What is Nest JS?
                        </h4>
                    </div>
                    <div className="px-4 md:px-10 py-5 font-medium space-y-8">
                        <p>
                            Express.js is a lightweight and adaptable Node.js online application framework that offers a comprehensive set of functionality for creating single- and multi-page, as well as hybrid, web apps.
                        </p>
                        <p>
                            A framework for creating effective, scalable Node.js server-side applications is called Nest.js. On top of popular Node.js frameworks like Express and Fastify, it is built.
                        </p>
                    </div>
                </div>


                <div className="max-w-4xl mx-auto border-2 bg-base-100 rounded shadow-xl mb-14">
                    <div className="px-4 md:px-10 py-5 bg-base-300">
                        <h4 className="text-2xl font-medium">
                            4. What is MongoDB aggregate and how does it work?
                        </h4>
                    </div>
                    <div className="px-4 md:px-10 py-5 font-medium space-y-8">
                        <p>
                            MongoDB aggregate is a function that performs an aggregation operation using the aggregation pipeline.
                        </p>
                        <p>
                            Users can process data from a collection or other source using the pipeline by performing a series of stage-based modifications. The input documents are subjected to an operation at each stage, such as filtering, grouping, and computing values.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blogs;