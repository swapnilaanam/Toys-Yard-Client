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
        fetch('http://localhost:5000/subcategories')
            .then(res => res.json())
            .then(data => setSubCategories(data));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => {

                const marvel = data.filter(toy => toy.subCategory === 'Marvel');
                setMarvelToys(marvel);

                const dc = data.filter(toy => toy.subCategory === 'DC');
                setDcToys(dc);

                const naruto = data.filter(toy => toy.subCategory === 'Naruto');
                setNarutoToys(naruto);
            });
    }, [])

    return (
        <div>
            <h3 className="text-center text-3xl font-semibold">Shop By Category</h3>
            <Tabs className="max-w-5xl mx-auto mt-12">
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
                    <div className="my-10">
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
                    <div className="my-10">
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
                    <div className="my-10">
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