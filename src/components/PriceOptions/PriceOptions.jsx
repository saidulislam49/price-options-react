import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "priceName": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym facilities",
                "Locker room access",
                "Free Wi-Fi"
            ]
        },
        {
            "id": 2,
            "priceName": "Standard Plan",
            "price": 49.99,
            "features": [
                "Access to gym facilities",
                "Locker room access",
                "Free Wi-Fi",
                "5 Group Classes per month",
                "1 Personal Training session"
            ]
        },
        {
            "id": 3,
            "priceName": "Premium Plan",
            "price": 79.99,
            "features": [
                "Access to gym facilities",
                "Locker room access",
                "Free Wi-Fi",
                "Unlimited Group Classes",
                "3 Personal Training sessions",
                "Access to Sauna and Steam Room"
            ]
        },
        {
            "id": 4,
            "priceName": "Family Plan",
            "price": 99.99,
            "features": [
                "Access to gym facilities for up to 4 members",
                "Locker room access",
                "Free Wi-Fi",
                "Unlimited Group Classes",
                "5 Personal Training sessions",
                "Access to Sauna and Steam Room",
                "Discount on merchandise"
            ]
        },
        {
            "id": 5,
            "priceName": "VIP Plan",
            "price": 129.99,
            "features": [
                "24/7 Access to gym facilities",
                "Private locker",
                "Free Wi-Fi",
                "Unlimited Group Classes",
                "Unlimited Personal Training sessions",
                "Access to Sauna, Steam Room, and Spa",
                "Complimentary towels and water",
                "Exclusive access to VIP lounge"
            ]
        }
    ]
    
    return (
        <div>
            <h1 className="text-5xl text-center">Best Prices in the town</h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 p-5">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;