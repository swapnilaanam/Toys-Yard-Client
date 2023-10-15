import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css';
import CategoryToyCard from '../CategoryToyCard/CategoryToyCard';
import { Flip } from 'react-awesome-reveal';

const ShopByCategory = () => {
    const [subCategories, setSubCategories] = useState([]);
    const [marvelToys, setMarvelToys] = useState([]);
    const [dcToys, setDcToys] = useState([]);
    const [narutoToys, setNarutoToys] = useState([]);

    useEffect(() => {
        fetch('https://toy-marketplace-server-gray-beta.vercel.app/subcategories')
            .then(res => res.json())
            .then(data => setSubCategories(data));
    }, []);

    useEffect(() => {
        fetch('https://toy-marketplace-server-gray-beta.vercel.app/toys/category/marvel')
            .then(res => res.json())
            .then(data => {
                const slicedData = data.slice(0, 3);
                setMarvelToys(slicedData);
            });
    }, []);

    useEffect(() => {
        fetch('https://toy-marketplace-server-gray-beta.vercel.app/toys/category/dc')
            .then(res => res.json())
            .then(data => {
                const slicedData = data.slice(0, 3);
                setDcToys(slicedData);
            });
    }, []);

    useEffect(() => {
        fetch('https://toy-marketplace-server-gray-beta.vercel.app/toys/category/naruto')
            .then(res => res.json())
            .then(data => {
                const slicedData = data.slice(0, 3);
                setNarutoToys(slicedData)
            });
    }, []);

    return (
        <div className="mt-28">
            <Flip direction='horizontal'>
                <h3 className="mb-20 text-center text-4xl text-black font-semibold tracking-wide">Shop By Category</h3>
            </Flip>
            <Tabs className="max-w-7xl mx-4 lg:mx-auto">
                <TabList className="w-full flex flex-col lg:flex-row justify-center">
                    {
                        subCategories.map(subCategory => <Tab
                            className="bg-white px-16 py-2 cursor-pointer text-xl font-medium"
                            key={subCategory._id}
                        >
                            {subCategory?.subCategoryName}
                        </Tab>)
                    }
                </TabList>

                <TabPanel>
                    <div className="pt-24 flex flex-col lg:flex-row justify-center items-center gap-20">
                        {
                            dcToys.map(dcToy => <CategoryToyCard
                                key={dcToy._id}
                                toyInfo={dcToy}
                            >
                            </CategoryToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="py-24 flex flex-col lg:flex-row justify-center items-center gap-20">
                        {
                            marvelToys.map(marvelToy => <CategoryToyCard
                                key={marvelToy._id}
                                toyInfo={marvelToy}
                            >
                            </CategoryToyCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="py-24 flex flex-col lg:flex-row justify-center items-center gap-20">
                        {
                            narutoToys.map(narutoToy => <CategoryToyCard
                                key={narutoToy._id}
                                toyInfo={narutoToy}
                            >
                            </CategoryToyCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;