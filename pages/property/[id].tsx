import { useRouter } from "next/router"; // dynamic routing
import { useState, useEffect } from "react";
import axios from "axios";

import PropertyDetail from "@/components/property/PropertyDetail"; // property detail section
import BookingSection from "@/components/property/BookingSection"; // booking section
import ReviewSection from "@/components/property/ReviewSection"; // review section

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query; // Get the property ID from the URL

  const [property, setProperty] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return; // wait until the id is available from the router

    const fetchProperty = async () => {
      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (err) {
        console.error("Error fetching property:", err);
        setError("Failed to load property details");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return <p className="p-6">Loading...</p>;
  }

  if (error) {
    return <p className="p-6 text-red-500">{error}</p>;
  }

  if (!property) {
    return <p className="p-6">Property not found</p>;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Property details */}
      <PropertyDetail property={property} />

      {/* Booking Section */}
      <div className="lg:w-1/3 lg:float-right mt-6 lg:mt-0">
        <BookingSection price={property.price} />
      </div>

      {/* Review Section */}
      <ReviewSection reviews={property.reviews || []} />
    </div>
  );
}
