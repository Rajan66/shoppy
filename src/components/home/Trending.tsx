import React from "react";
import Button from "../common/Button";

const Trending = () => {
    return (
        <div className="p-4">
            <div className="flex justify-between">
                <h1 className="uppercase text-3xl font-extrabold tracking-wide">
                    Trending Categories
                </h1>
                <div className="flex gap-6">
                    <Button
                        variant="secondary"
                        size="xl"
                        className="text-base rounded-none uppercase"
                    >
                        Womens
                    </Button>
                    <Button
                        variant="primary"
                        size="xl"
                        className="text-base border border-secondary rounded-none uppercase"
                    >
                        Mens
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Trending;
