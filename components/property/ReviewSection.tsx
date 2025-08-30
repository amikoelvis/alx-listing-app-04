import { Review } from "@/interfaces";
import Image from "next/image"; 
import { FaStar } from "react-icons/fa"; // Star icon

const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
  return (
    <div className="mt-8">
      <h3 className="text-2xl font-semibold">Reviews</h3>
      {reviews.map((review, index) => (
        <div key={index} className="border-b pb-4 mb-4">
          {/* Review User */}
          <div className="flex items-center">
            <div className="relative w-12 h-12 mr-4">
              {/* avatar */}
              <Image
                src={review.avatar}
                alt={review.name}
                layout="fill"
                className="rounded-full"
              />
            </div>
            <div>
              <p className="font-bold">{review.name}</p>
              <div className="flex items-center">
                {/* Display stars based on rating */}
                {[...Array(5)].map((_, starIndex) => (
                  <FaStar
                    key={starIndex}
                    className={`${
                      starIndex < review.rating
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Review Comment */}
          <p className="mt-2 text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
