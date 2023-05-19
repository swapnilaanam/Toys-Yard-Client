import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './ShopByCategory.css';

const ShopByCategory = () => {
    const [subCategories, setSubCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/subcategories')
            .then(res => res.json())
            .then(data => setSubCategories(data));
    }, []);

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
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;