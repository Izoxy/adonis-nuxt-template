# App AdonisJS & NuxtJS
[![heart](https://img.shields.io/static/v1?label=Build%20With&message=❤&color=darkred&labelColor=red&style=for-the-badge)]()
[![foryou](https://img.shields.io/static/v1?label=For&message=You&color=aqua&labelColor=blue&style=for-the-badge)]()
[![license](https://img.shields.io/static/v1?label=License&message=MIT&color=green&labelColor=darkgreen&style=for-the-badge)]()
<br/>
<br/>
 An open source app for your personal website ! <br/>
 
 To use it refer you to the [documentation](#Guide).

## Features

* Authentication system
* Navbar included
* Sidebar included
* Header with Carousel

## Technologies used
- [Bootstrap Vue](https://bootstrap-vue.org/docs/)
- [SASS](https://sass-lang.com/)
- [AdonisJS](https://preview.adonisjs.com/)
- [VueJS](https://vuejs.org/)
- [NuxtJS](https://nuxtjs.org/)

![Banner](https://github.com/Izoxy/adonis-nuxt-template/tree/master/assets/banner.png)

## Summary
* [Installation](#Installation)
* [Guide](#Guide)
* [Contributors](#Contributors)
* [License](#License)

### Installation

1. Clone the repository from `https://github.com/Izoxy/adonis-nuxt-template/`
2. Open a terminal in the folder
3. Type `yarn build-template`
4. For run the template in dev mode, you need to type `yarn api` to start the API and `yarn front` to start the frontend in different terminals.
5. For generate your site (in VPS), simply type `yarn run-template`

It's already finished, it's really quick to set up.

### Guide
#### Master

Here you can find the master from the application.
<br>
In `/layouts/master/master.vue`, you have the main layout.
<br>
You have also the index in `/pages/index.vue`

#### Middleware

For a perfect routing, we use the middleware suggested by Adonis and those of Nuxt.
In `/api/app/Middleware` and in `/front/middleware`.

#### Auth

The authentication system is complexe.
We have many files who manage the system. 
We use Adonis for the back-end, the part who manage the database is in `/api/app`.
Moreover, we have a specific usage from the Cookie to save the data from the users. You can find it in `/front/store`

#### Components

Here you can find the different add-ons available in our template.

- [Navbar](#Navbar)
- [Header](#Header)
- [Sidebar](#Sidebar)

If you encounter difficulties with one or more components, do not hesitate to contact [us](https://github.com/Izoxy).

##### Navbar
A simple navbar. You can see the documentation from Navbar [here](https://bootstrap-vue.org/docs/components/navbar).
<br>
Just import `<Navbar/>` from `/components/navbar/Navbar.vue`
And need to do add this in `<script></script>`
```javascript
import Navbar from "~/components/navbar/Navbar";
export default {
    name: "YourComponentName",
    components: { Navbar }
}
```
If you want to have it on all pages, putting it on the main `layout` is advisable.

##### Header
A simple header with a Carousel. You can see the documentation from Carousel [here](https://bootstrap-vue.org/docs/components/carousel).
<br>
Just import `<Header/>` from `/components/header/Header.vue`
And need to do add this in `<script></script>`
```javascript
import Header from "~/components/header/Header";
export default {
    name: "YourComponentName",
    components: { Header }
}
```

##### Sidebar
A simple sidebar.
<br>
Just import `<Sidebar/>` from `/components/sidebar/Sidebar.vue`
And need to do add this in `<script></script>`
```javascript
import Sidebar from "~/components/sidebar/Sidebar";
export default {
    name: "YourComponentName",
    components: { Sidebar }
}
```

### Contributors
* [Baptiste Parmantier](https://github.com/LeadcodeDev)
* [Alexandre Gossard](https://github.com/HakkaOfDev)

### License

Distributed under the MIT License. See [License](https://github.com/Izoxy/adonis-nuxt-template/blob/master/LICENSE) for more information.

### Made with ❤ by Izoxy
