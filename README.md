
# NextJS Airbnb Fullstack Clone (renamed D3Properties)

A usable web application build on:
* React with NextJS 13
* Tailwind CSS for the styling of components
* React-Map-Gl to interact with Mapbox
* Cloudinary for image uploads and store
* Zustand for central state management
* Axios as the request library.
* Amplication for the backend, creating a server with:
  - Nest
  - Prisma
  - PostgreSQL

![homepage](/assets/home-list.png)

## Key Features

* View All Listings
  - View as list and as map with markers (pins)
* Filter and Search
  - Search by Category, Location, Available Dates for Booking and Ammenities.
* Locate yourself on the map
* Login and Signup using email.
* Create new listings
  - An 8 step process using central state
  - Allows images upload
* Add or remove listings from your wishlists
* Manage your properties listed for lease.
* Make reservations on listings at avasilable dates ang manage them. 

## How To Use

Clone this repo and then, from your command line:

```bash

# Go into the repository
$ cd d3-properties-airbnb-clone

# Install dependencies
$ npm install

# Run the app. This will start both the frontend (Next) and the backend (Nest).
$ npm start
```

## App Screenshots

### Home Page List View

![list](/assets/home-list.png)

### Home Page Map View

![map](/assets/home-map.png)

### Geo Location on Map

![map](/assets/geo-1.png)
![map](/assets/geo-2.png)

### Filter and Search

![filter-1](/assets/filter-0.png)
![filter-2](/assets/filter-1.png)
![filter-3](/assets/filter-2.png)

### Login Modal

![login](/assets/auth-1.png)

### Add New Listings

![process1](/assets/create-1.png)

![process2](/assets/create-2.png)

![process3](/assets/create-3.png)

![process4](/assets/create-4.png)

![process5](/assets/create-5.png)

![process6](/assets/create-6.png)

![process7](/assets/create-7.png)

![process8](/assets/create-8.png)

### My Listings

![mylistings](/assets/mylistings.png)

### Wishlists

![wishlists](/assets/mywishlists.png)

### Listing Info Page

![listing](/assets/listing-1.png)
![listing](/assets/listing-2.png)

### Bookings / Trips

![listing](/assets/trips.png)

## Credits

I followed both of these guides to achieve this:

- [Kishan](https://www.youtube.com/watch?v=nkmPmUpUM6U&t=3s)
- [CodeWithAntonio](https://www.youtube.com/watch?v=c_-b_isI4vg&t=17784s)

And also the docs for the tools used

- [Mapbox](https://visgl.github.io/react-map-gl/docs)
- [Zustand](https://github.com/pmndrs/zustand)

## License

MIT