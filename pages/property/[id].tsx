import { PROPERTYLISTINGSAMPLE } from "@/constants/index"; // import sample property data
import { useRouter } from "next/router"; // for routing to dynamic page
import PropertyDetail from "@/components/property/PropertyDetail"; // property detail section
import BookingSection from "@/components/property/BookingSection"; // booking section
import ReviewSection from "@/components/property/ReviewSection"; // review section

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query; // Get the property ID from the URL
  const property = PROPERTYLISTINGSAMPLE.find((item) => item.name === id); // Find the property by name

  if (!property) return <p>Property not found</p>; // Show if property doesn't exist

  return (
    <div className="container mx-auto p-6">
      {/* Property details */}
      <PropertyDetail property={property} />

      {/* Booking Section */}
      <div className="lg:w-1/3 lg:float-right mt-6 lg:mt-0">
        <BookingSection price={property.price} />
      </div>

      {/* Review Section */}
      <ReviewSection reviews={property.reviews} />
    </div>
  );
}
