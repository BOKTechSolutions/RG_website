import new_logo from './new_logo.png'
import searchIcon from './searchIcon.svg'
import userIcon from './userIcon.svg'
import calenderIcon from './calenderIcon.svg'
import locationIcon from './locationIcon.svg'
import starIconFilled from './starIconFilled.svg'
import arrowIcon from './arrowIcon.svg'
import starIconOutlined from './starIconOutlined.svg'
import homeIcon from './homeIcon.svg'
import closeIcon from './closeIcon.svg'
import locationFilledIcon from './locationFilledIcon.svg'
import heartIcon from './heartIcon.svg'
import badgeIcon from './badgeIcon.svg'
import menuIcon from './menuIcon.svg'
import closeMenu from './closeMenu.svg'
import guestsIcon from './guestsIcon.svg'
import roomImg1 from './roomImg1.webp'
import roomImgIn from './roomImgIn.webp'
import roomImgannex from './roomImgannex.webp'
import roomfront from './roomfront.webp'
import roomImgsingle from './roomImgsingle.webp'
import roomImgfn from './roomImgfn.webp'
import roomImg2 from './roomImg2.webp'
import regImage from './regImage.png'
import dashboardIcon from "./dashboardIcon.svg";
import listIcon from "./listIcon.svg";
import uploadArea from "./uploadArea.svg";
import totalBookingIcon from "./totalBookingIcon.svg";
import totalRevenueIcon from "./totalRevenueIcon.svg";
import new_pic1 from "./new_pic1.webp";


//Gallery
import room1 from './gallery/roomImg1.webp';
import room2 from './gallery/roomImg2.webp'; // corrected if needed
import lobby from './gallery/roomImgannex.webp';
import room3 from './gallery/room3.webp';
import restaurant from './gallery/roomfront.webp';
import pool from './gallery/roomImgsingle.webp';
import conference from './gallery/2nd_compound.webp';
import floor from './gallery/2nd_floor_wide.webp';
import outside from './gallery/outside.webp';
import full_block from './gallery/full_block.webp';
import securitypost from './gallery/securitypost.webp';
import reception2 from './gallery/reception2.webp';
import carpark from './gallery/carpark.webp';
import trip_1 from './gallery/Trip_1.webp';

export const galleryImages = [
  { id: 1, src: room1, caption: 'Luxury Suite' },
  { id: 2, src: room2, caption: 'Deluxe Room' },
  { id: 3, src: lobby, caption: 'Lobby Area' },
  { id: 4, src: restaurant, caption: 'Restaurant View' },
  { id: 5, src: pool, caption: 'Swimming Pool' },
  { id: 6, src: conference, caption: 'Conference Hall' },
  { id: 7, src: floor, caption: 'Second Floor Wide View' },
  { id: 8, src: outside, caption: 'Outside View' },
  { id: 9, src: full_block, caption: 'Full Block View' },
  { id: 10, src: securitypost, caption: 'Security Post' },
  { id: 11, src: reception2, caption: 'Reception Area' },
  { id: 12, src: carpark, caption: 'carpark' },
  {id: 13, src:trip_1, caption:'Trip_1'},
];


export const assets = {
    new_logo,
    searchIcon,
    userIcon,
    calenderIcon,
    locationIcon,
    starIconFilled,
    arrowIcon,
    starIconOutlined,
    closeIcon,
    homeIcon,
    locationFilledIcon,
    heartIcon,
    badgeIcon,
    menuIcon,
    closeMenu,
    guestsIcon,
    regImage,
    dashboardIcon,
    listIcon,
    uploadArea,
    totalBookingIcon,
    totalRevenueIcon,
}

export const cities = [
    "Dubai",
    "Singapore",
    "New York",
    "London",
];


// Testimonials Dummy Data
export const testimonials = [
    { id: 1, name: "Nigel Connell", address: "Toronto, Canada", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "My stay at Royal George Guesthouse was simply wonderful. The rooms are elegant, the staff is incredibly attentive, and I felt truly at home. I can’t wait to visit again!" },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "Royal George Guesthouse exceeded my expectations. The booking process was smooth, the facilities were top-notch, and the hospitality was second to none. Highly recommended!" },
    { id: 3, name: "Abigial Quacoe", address: "Accra, Ghana", image: "https://images.unsplash.com/photo-1622352589840-a44b8a947aa9?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 5, review: "Amazing service! I always find my perfect luxury stay at Royal George Guesthouse. Their staff’s recommendations and personal touch make every visit memorable" },
    { id: 4, name: "Gloria Hinze", address: "London, UK", image: "https://images.unsplash.com/photo-1622352579597-f6c295b71ea3?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", rating: 5, review: "From the beautiful rooms to the delicious food, Royal George Guesthouse is a hidden gem. The warmth of the staff made my trip unforgettable. Definitely my go-to place in Ghana!" }
];


// For Room Details Page
export const roomCommonData = [
    { icon: assets.homeIcon, title: "Clean & Safe Stay", description: "A well-maintained and hygienic space just for you." },
    { icon: assets.badgeIcon, title: "Enhanced Cleaning", description: "This host follows Staybnb's strict cleaning standards." },
    { icon: assets.locationFilledIcon, title: "Excellent Location", description: "90% of guests rated the location 5 stars." },
    { icon: assets.heartIcon, title: "Smooth Check-In", description: "100% of guests gave check-in a 5-star rating." },
];

// User Dummy Data
export const userDummyData = {
    "_id": "user_2unqyL4diJFP1E3pIBnasc7w8hP",
    "username": "Great Stack",
    "email": "user.greatstack@gmail.com",
    "image": "https://img.clerk.com/eyJ0eXBlIjoicHJveHkiLCJzcmMiOiJodHRwczovL2ltYWdlcy5jbGVyay5kZXYvdXBsb2FkZWQvaW1nXzJ2N2c5YVpSSEFVYVUxbmVYZ2JkSVVuWnFzWSJ9",
    "role": "hotelOwner",
    "createdAt": "2025-03-25T09:29:16.367Z",
    "updatedAt": "2025-04-10T06:34:48.719Z",
    "__v": 1,
    "recentSearchedCities": [
        "New York"
    ]
}

// Hotel Dummy Data
export const ExecutiveData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Executive Room",
    "owner": userDummyData,
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

export const StandardData = {
    "_id": "67f76393197ac559e4089b72",
    "name": "Standard Room",
    "owner": userDummyData,
    "createdAt": "2025-04-10T06:22:11.663Z",
    "updatedAt": "2025-04-10T06:22:11.663Z",
    "__v": 0
}

// Rooms Dummy Data
export const roomsDummyData = [
    {
        "_id": "67f7647c197ac559e4089b96",
        "hotel": ExecutiveData,
        "roomType": "DOUBLE DELUXE",
        "pricePerNight": 350,
        "images": [roomImg1, roomImgIn,roomfront,roomImgannex],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:26:04.013Z",
        "updatedAt": "2025-04-10T06:26:04.013Z",
        "__v": 0
    },
    {
        "_id": "67f76452197ac559e4089b8e",
        "hotel": StandardData,
        "roomType": "SINGLE STANDARD ROOM",
        "pricePerNight": 250,
        "images": [roomImg2, roomImgsingle, roomImgfn,new_pic1],
        "isAvailable": true,
        "createdAt": "2025-04-10T06:25:22.593Z",
        "updatedAt": "2025-04-10T06:25:22.593Z",
        "__v": 0
    }
]



// User Bookings Dummy Data
export const userBookingsDummyData = [
    {
        "_id": "67f76839994a731e97d3b8ce",
        "user": userDummyData,
        "room": roomsDummyData[1],
        "hotel": StandardData,
        "checkInDate": "2025-04-30T00:00:00.000Z",
        "checkOutDate": "2025-05-01T00:00:00.000Z",
        "totalPrice": 299,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Stripe",
        "isPaid": true,
        "createdAt": "2025-04-10T06:42:01.529Z",
        "updatedAt": "2025-04-10T06:43:54.520Z",
        "__v": 0
    },
    {
        "_id": "67f76829994a731e97d3b8c3",
        "user": userDummyData,
        "room": roomsDummyData[0],
        "hotel":StandardData,
        "checkInDate": "2025-04-27T00:00:00.000Z",
        "checkOutDate": "2025-04-28T00:00:00.000Z",
        "totalPrice": 399,
        "guests": 1,
        "status": "pending",
        "paymentMethod": "Pay At Hotel",
        "isPaid": false,
        "createdAt": "2025-04-10T06:41:45.873Z",
        "updatedAt": "2025-04-10T06:41:45.873Z",
        "__v": 0
    }
]

// Dashboard Dummy Data
export const dashboardDummyData = {
    "totalBookings": 3,
    "totalRevenue": 897,
    "bookings": userBookingsDummyData
}

// --------- SVG code for Book Icon------
/* 
const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

*/



