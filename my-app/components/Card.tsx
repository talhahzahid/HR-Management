import { Clock } from "lucide-react";
import { Button } from "./ui/button";

interface CardProps {
    userName: string;
    createdAt: string;
    checkInTime: string;
    checkOutTime: string;
    status: string;
}

const Card = ({
    userName,
    createdAt,
    checkInTime,
    checkOutTime,
    status,
}: CardProps) => {
    return (
        <div className="border rounded-xl p-5 w-87.5 shadow-sm">
            <div className="flex items-center gap-4">

                {/* Icon */}
                <div className="bg-emerald-900 p-3 rounded-full">
                    <Clock className="w-5 h-5 text-emerald-400" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-1 flex-1">

                    <span className="font-semibold text-lg">
                        {userName}
                    </span>

                    <span className="text-sm text-gray-500">
                        {createdAt}
                    </span>

                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <span>{checkInTime}</span>
                        <span>•</span>
                        <span>{checkOutTime}</span>
                    </div>

                    <div className="mt-3">
                        <Button className="rounded-full px-5 bg-green-700">
                            {status}
                        </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Card;