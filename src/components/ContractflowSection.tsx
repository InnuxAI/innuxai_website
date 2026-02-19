import React from "react";
import { BentoDemo } from "./demo_bento";

const ContractFlowSection = () => { 

    return (
            <div id="features" className="w-full max-w-7xl mx-auto p-6 py-20">
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">Contractflow Features</h2>
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed text-balance">
                        Discover how InnuxAI transforms your enterprise workflows with intelligent automation.
                    </p>
                </div>
                <BentoDemo />

            </div>
    )
}

export default React.memo(ContractFlowSection);