import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css';
import CategoryToyCard from '../../CategoryToyCard/CategoryToyCard';

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
            .then(data => setMarvelToys(data));
    }, []);

    useEffect(() => {
        fetch('https://toy-marketplace-server-gray-beta.vercel.app/toys/category/dc')
            .then(res => res.json())
            .then(data => setDcToys(data));
    }, []);

    useEffect(() => {
        fetch('https://toy-marketplace-server-gray-beta.vercel.app/toys/category/naruto')
            .then(res => res.json())
            .then(data => setNarutoToys(data));
    }, []);

    return (
        <div>
            <h3 className="text-center text-3xl font-semibold">Shop By Category</h3>
            <Tabs className="max-w-7xl mx-auto mt-12">
                <TabList className="w-full flex justify-center">
                    {
                        subCategories.map(subCategory => <Tab
                            className="bg-slate-300 px-16 py-3 cursor-pointer text-xl font-medium"
                            key={subCategory._id}
                        >
                            {subCategory?.subCategoryName}
                        </Tab>)
                    }
                </TabList>

                <TabPanel>
                    <div className="py-16 flex justify-center items-center gap-20">
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
                    <div className="py-16 flex justify-center items-center gap-20">
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
                    <div className="py-16 flex justify-center items-center gap-20">
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