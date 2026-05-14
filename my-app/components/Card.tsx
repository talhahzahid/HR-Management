import { Clock } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";



const Card = () => {
    return (
        <div className="border rounded-xl p-5 w-87.5 shadow-sm ">

            <div className="flex items-center gap-4">

                {/* Icon */}
                <div className="bg-gray-100 p-3 rounded-full">
                    <Clock className="w-5 h-5 text-gray-700" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 flex-1">
                    <span className="font-semibold text-lg">
                        Talha Zahid
                    </span>

                    <span className="text-sm text-gray-500">
                        Tuesday, May 13, 2026
                    </span>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>10:20 AM</span>
                        <span>•</span>
                        <span>10:20 AM</span>
                    </div>

                    <div className="mt-3">
                        <Button className="rounded-full px-5 bg-green-700">
                            Approved
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Card;