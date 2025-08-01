import React from "react";
import { BentoDemo } from "./demo_bento";

const FeaturesSection2 = () => {
    return (
    <div id="features" className="w-full max-w-7xl mx-auto p-6 py-20">
            <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Contractflow Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Discover how InnuxAI transforms your enterprise workflows with intelligent automation.
            </p>
            </div>


           
            <BentoDemo />
            
        </div>
    )
}

export default React.memo(FeaturesSection2);